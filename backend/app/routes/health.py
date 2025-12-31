from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from app.database import get_session
from app.models import User, HealthMetric, HealthMetricCreate, HealthMetricRead, Alert
from app.auth import get_current_user
from typing import List

router = APIRouter(prefix="/health", tags=["health"])

@router.get("/me", response_model=List[HealthMetricRead])
def get_my_health_metrics(
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):
    statement = select(HealthMetric).where(HealthMetric.user_id == current_user.id).order_by(HealthMetric.timestamp.desc())
    metrics = session.exec(statement).all()
    return metrics

@router.post("/record", response_model=HealthMetricRead)
def record_health_metric(
    metric_in: HealthMetricCreate,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):
    # Prepare metric data
    metric_data = metric_in.dict()

    db_metric = HealthMetric(
        **metric_data,
        user_id=current_user.id
    )
    session.add(db_metric)

    session.commit()
    session.refresh(db_metric)
    return db_metric