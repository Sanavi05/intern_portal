# Intern Portal – Full Stack Project

A simple intern dashboard built using **React (Vite)** and **Node.js + Express**, with dummy data served from a REST API. This project is designed for evaluation and demonstration purposes only.

---


---

## Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/<your-username>/intern_portal.git
cd intern_portal
```

### 2. Start the backend
```bash
cd backend
npm install
npm run dev
```
Server runs at: http://localhost:5000

### 3. Start the frontend
```bash
cd ../frontend
npm install
npm run dev
```
Server runs at: http://localhost:5173

## API Routes(GET)
### /api/user <br>
Returns intern profile + rewards

### /api/leaderboard	 <br>
Returns leaderboard dummy data


## API Response
### /api/user <br>
```json
{
  "name": "John Doe",
  "referralCode": "johndoe2025",
  "totalDonations": 1200,
  "rewards": ["Bronze Badge", "T-shirt", "Certificate"]
}
```

### /api/leaderboard	 <br>
```json
[
  { "name": "Alice", "donations": 1500 },
  { "name": "John Doe", "donations": 1200 },
  { "name": "Bob", "donations": 1000 }
]
```

## Features
- Dummy Login Screen (no real auth) 
- Dashboard with dummy user data 
- Rewards section (static) - Leaderboard (optional bonus) 
- API built with Express, returns static JSON

### Tech Stack
- Frontend: React, Vite, React Router DOM

- Backend: Node.js, Express

- No DB: Static data used (no persistence)

- No Auth: Dummy login flow


### API Testing (Optional via Postman)
You can test the backend endpoints by hitting:

http://localhost:5000/api/user

http://localhost:5000/api/leaderboard

You may create a Postman collection if needed.

### Demo Screenshots

(https://drive.google.com/drive/folders/1o22bYAkw0LjBUUgvY72-TT5kN0kBzLWX?usp=sharing)
