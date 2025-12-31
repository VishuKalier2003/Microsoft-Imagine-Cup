# Sentinel: The Future of Personal & Global Health

<p align="center">
  <img src="https://img.shields.io/badge/Microsoft-Imagine%20Cup%202025-blue?style=for-the-badge&logo=microsoft" alt="Imagine Cup"/>
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi" alt="FastAPI"/>
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript"/>
</p>

Sentinel is a revolutionary health monitoring and epidemiological tracking platform designed to empower individuals with real-time health insights and provide medical professionals with advanced predictive tools. Built for the **Microsoft Imagine Cup**, this project leverages AI to bridge the gap between personal vitals and global disease prevention.

## 🌟 Vision

In an increasingly connected world, health is no longer just personal—it's communal. Sentinel aims to create a **"Global Health Shield"** by correlating individual smartwatch data with real-time regional disease spread. Our platform doesn't just track your health; it protects you based on your environment.

---

## 🚀 Key Features

### 1. 🗺️ Global Disease Tracker
- **Real-time Spatial Visualization**: Interactive dark-mode map showing disease density (COVID-19, Influenza, Dengue, etc.) across the globe.
- **Epidemiological Dataset**: High-density analytical view for researchers to analyze regional logs and risk levels.
- **Predictive Heatmaps**: Visualizes movement patterns of potential outbreaks.

### 2. 💓 Personal Health Suite (User Dashboard)
- **Smartwatch Integration**: Live syncing of Heart Rate, SpO2, Sleep Quality, and Stress Levels.
- **AI-Predicted Blood Pressure**: Machine learning models predict BP when direct readings are unavailable.
- **AI Exposure Risk**: Personalized risk assessment that alerts you when outbreaks are detected in your vicinity.

### 3. 🏥 Clinical Specialist Portal (Doctor Portal)
- **Patient List Management**: Real-time patient roster with vitals and risk indicators.
- **Schedule & Appointments**: Dynamic timeline of clinical follow-ups and virtual consultations.
- **Secure Messaging**: End-to-end encrypted communication with patients and colleagues.
- **Outbreak Reporting**: Doctors can report outbreaks which are then tracked on the global map.

### 4. 🔐 Secure Role-Based Access (RBAC)
- **Differentiated Authentication**: Specialized login flows for Users and Medical Professionals.
- **Protected Workspace**: Users cannot access doctor pages; doctors can access their own user health view.
- **Cross-Portal Navigation**: Doctors can seamlessly switch between professional and personal dashboards.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Framer Motion, Lucide Icons |
| **Visualization** | Recharts (Analytics), Leaflet (Geospatial Maps), Cobe (3D Globe) |
| **State Management** | React Context API |
| **Backend** | FastAPI, Python 3.11+ |
| **Database** | SQLite (Dev) / PostgreSQL (Production) via SQLModel |
| **Authentication** | JWT (python-jose), Bcrypt (passlib) |
| **Design System** | Custom "True Black" Glassmorphism UI |

---

## � Project Structure

```
v1/
├── frontend/               # React + Vite Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Dashboard pages
│   │   └── context/        # Auth & State management
│   └── public/             # Static assets
│
├── backend/                # FastAPI Backend
│   ├── app/
│   │   ├── routes/         # API endpoints (auth, health, map, alerts)
│   │   ├── models.py       # SQLModel database schemas
│   │   ├── auth.py         # JWT authentication logic
│   │   └── database.py     # Database connection
│   ├── requirements.txt    # Python dependencies
│   └── .env.example        # Environment template
│
└── README.md
```

---

## 📦 Getting Started

### Prerequisites
- **Node.js** v18+
- **Python** 3.11+
- npm or yarn

### 1️⃣ Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
Frontend runs at `http://localhost:5173`

### 2️⃣ Backend Setup
```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment template and configure
cp .env.example .env

# Start the API server
uvicorn app.main:app --reload --port 8000
```
Backend API runs at `http://localhost:8000`

---

## 🔐 Test Credentials

Use these to explore the different portals:

| Role | Email | Password |
|------|-------|----------|
| **General User** | `user@health.ai` | `password` |
| **Medical Doctor** | `doctor@health.ai` | `password` |

> 💡 You can also create new accounts via the "Sign Up" flow in the application.

---

## 📡 API Endpoints

| Endpoint | Method | Description | Auth |
|----------|--------|-------------|------|
| `/api/auth/register` | POST | Register new user | ❌ |
| `/api/auth/login` | POST | Get JWT token | ❌ |
| `/api/health/me` | GET | Get user's health metrics | ✅ |
| `/api/health/record` | POST | Record new health metric | ✅ |
| `/api/map/outbreaks` | GET | Get all outbreaks | ❌ |
| `/api/map/outbreak` | POST | Report new outbreak | ✅ (Doctor) |
| `/api/alerts/me` | GET | Get user's alerts | ✅ |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is built for the **Microsoft Imagine Cup 2025** competition.

---

<p align="center">
  <strong>Built with ❤️ for a healthier world</strong>
</p>
