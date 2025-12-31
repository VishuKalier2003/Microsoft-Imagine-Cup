from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from app.database import get_session
from app.models import User, Alert, AlertCreate, AlertRead
from app.auth import get_current_user
from typing import List

router = APIRouter(prefix="/alerts", tags=["alerts"])

@router.get("/me", response_model=List[AlertRead])
def get_my_alerts(
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):
    statement = select(Alert).where(Alert.user_id == current_user.id).order_by(Alert.timestamp.desc())
    alerts = session.exec(statement).all()
    return alerts

@router.put("/{alert_id}/read", response_model=AlertRead)
def mark_alert_as_read(
    alert_id: int,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):
    statement = select(Alert).where(Alert.id == alert_id, Alert.user_id == current_user.id)
    alert = session.exec(statement).first()
    if not alert:
        raise HTTPException(status_code=404, detail="Alert not found")
    
    alert.is_read = True
    session.add(alert)
    session.commit()
    session.refresh(alert)
    return alert
