from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import init_db
from app.routes import auth, health, map, alerts

app = FastAPI(title="Sentinel API")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    init_db()

@app.get("/")
def read_root():
    return {"message": "Welcome to Sentinel API"}

# Include routers
app.include_router(auth.router, prefix="/api")
app.include_router(health.router, prefix="/api")
app.include_router(map.router, prefix="/api")
app.include_router(alerts.router, prefix="/api")
