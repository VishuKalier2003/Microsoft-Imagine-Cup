from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from app.database import get_session
from app.models import User, Outbreak, OutbreakCreate, OutbreakRead
from app.auth import get_current_user, get_current_doctor
from typing import List

router = APIRouter(prefix="/map", tags=["map"])

@router.get("/outbreaks", response_model=List[OutbreakRead])
def get_outbreaks(
    session: Session = Depends(get_session)
):
    statement = select(Outbreak).order_by(Outbreak.timestamp.desc())
    outbreaks = session.exec(statement).all()
    return outbreaks

@router.post("/outbreak", response_model=OutbreakRead)
def report_outbreak(
    outbreak_in: OutbreakCreate,
    session: Session = Depends(get_session),
    current_doctor: User = Depends(get_current_doctor)
):
    db_outbreak = Outbreak(
        **outbreak_in.dict(),
        reported_by=current_doctor.id
    )
    session.add(db_outbreak)
    session.commit()
    session.refresh(db_outbreak)
    return db_outbreak
