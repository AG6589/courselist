course-enrollment-app/
│
├── backend/
│   ├── src/
│   │   ├── index.js
│   │   ├── db.js
│   │   └── routes/
│   │       └── courses.js
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── CourseCard.jsx
│   │   ├── pages/
│   │   │   └── CourseList.jsx
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── README.md     ← Main root readme
└── screenshots/  ← Add UI screenshots here
# Course Enrollment Full-Stack Assignment

## 📌 Overview
A full-stack React + Node application that displays a list of courses and allows a user to enroll.

## 🚀 Tech Used
- Frontend: React
- Backend: Node.js + Express
- Database: In-memory (Mock DB)

## 📦 Features
✔ List available courses  
✔ Enroll into a course  
✔ Button auto-disables after enrollment  
✔ Clean UI  
✔ Fully working APIs  

## 🛠 Setup Instructions
### 1️⃣ Backend
cd backend  
npm install  
node src/index.js  
Runs on: http://localhost:5000

### 2️⃣ Frontend
cd frontend  
npm install  
npm start  
Runs on: http://localhost:3000

## 📸 Screenshots
(Add images here)

## 📝 API Endpoints
GET /courses  
POST /courses/:id/enroll  
