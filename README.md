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

🧠 Approach
1. Requirements Understanding

Backend: 2 APIs (GET + POST)

Frontend: show courses + enroll

No database needed → use in-memory store

Clean UI + API flow

2. Architecture Planning

Separate backend & frontend projects

Clear module separation: routes, components, API services

3. Backend Implementation

Built Express API

Enabled CORS

Added in-memory courses array

Implemented GET + POST routes

Tested with Postman

4. Frontend Implementation

React + Vite setup

Axios for API calls

Component-based UI (CourseList + CourseCard)

Added loading skeleton + search

Tested full flow

5. Final Repo Polishing

README

Screenshots

Clean commits

Professional structure

🖼️ Screenshots

Add your screenshots here:

/screenshots/home.png
/screenshots/enrolled.png
/screenshots/api.png

🛣️ Future Enhancements

Add pagination

Add sorting (A–Z, Z–A)

Add authentication

Move from in-memory → MongoDB or PostgreSQL

Deploy frontend + backend (Render / Vercel)

📄 License

This project is licensed under the MIT License.
