# Student Management System (MVC) - Node.js + Express + MongoDB

## Overview
Simple student management API following MVC architecture using Express and Mongoose.

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root with:
   ```bash
   MONGO_URI=mongodb://127.0.0.1:27017/studentdb
   PORT=3000
   ```
3. Start the server:
   ```bash
   npm run dev   # requires nodemon installed (devDependency)
   # or
   npm start
   ```
4. API endpoints:
   - `GET /api/students` - list all students
   - `POST /api/students` - create a student (body: { name, age, course })
   - `GET /api/students/:id` - get a student
   - `PUT /api/students/:id` - update a student
   - `DELETE /api/students/:id` - delete a student

## Notes
- This project uses environment variables. Use `.env` to store your MongoDB connection string.
- The code is separated into `models`, `controllers`, and `routes` to follow MVC principles.
