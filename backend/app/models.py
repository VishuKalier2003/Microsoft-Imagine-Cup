from sqlmodel import SQLModel, Field
from typing import Optional, List
from datetime import datetime

class UserBase(SQLModel):
    email: str = Field(unique=True, index=True)
    full_name: str
    role: str = "user" # user or doctor

class User(UserBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    hashed_password: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class UserCreate(UserBase):
    password: str

class UserRead(UserBase):
    id: int
    created_at: datetime

class Token(SQLModel):
    access_token: str
    token_type: str

class TokenData(SQLModel):
    email: Optional[str] = None
    role: Optional[str] = None

# Health Metrics Models
class HealthMetricBase(SQLModel):
    user_id: int = Field(foreign_key="user.id")
    heart_rate: float
    spo2: float
    blood_pressure_sys: float
    blood_pressure_dia: float
    stress_level: float
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class HealthMetric(HealthMetricBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

class HealthMetricCreate(SQLModel):
    heart_rate: float
    spo2: float
    blood_pressure_sys: float
    blood_pressure_dia: float
    stress_level: float

class HealthMetricRead(HealthMetricBase):
    id: int

# Outbreak Models
class OutbreakBase(SQLModel):
    disease_name: str
    latitude: float
    longitude: float
    radius: float # in meters or km
    severity: str # Low, Medium, High, Critical
    reported_by: int = Field(foreign_key="user.id")
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class Outbreak(OutbreakBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

class OutbreakCreate(SQLModel):
    disease_name: str
    latitude: float
    longitude: float
    radius: float
    severity: str

class OutbreakRead(OutbreakBase):
    id: int

# Alert Models
class AlertBase(SQLModel):
    user_id: int = Field(foreign_key="user.id")
    title: str
    message: str
    type: str # Info, Warning, Critical
    is_read: bool = False
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class Alert(AlertBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

class AlertCreate(SQLModel):
    title: str
    message: str
    type: str

class AlertRead(AlertBase):
    id: int
