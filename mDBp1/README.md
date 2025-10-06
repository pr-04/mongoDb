# 🛍️ Product CRUD API (Node.js + Mongoose)

This project demonstrates basic **Create, Read, Update, Delete (CRUD)** operations using **Express.js** and **MongoDB** (via **Mongoose**).

---

## 🚀 Features
- Add a new product (POST)
- Get all products (GET)
- Update a product by ID (PUT)
- Delete a product by ID (DELETE)
- MongoDB + Mongoose integration

---

## 🧠 Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Body-parser
- CORS

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Run MongoDB
Make sure MongoDB is running locally on port **27017**.

### 3️⃣ Start the server
```bash
npm start
```

Server runs on: [http://localhost:3000](http://localhost:3000)

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/products` | Add a new product |
| `GET` | `/products` | Get all products |
| `PUT` | `/products/:id` | Update a product |
| `DELETE` | `/products/:id` | Delete a product |

---

## 🧾 Example Product Object
```json
{
  "name": "Smartphone",
  "price": 899,
  "category": "Electronics"
}
```

---

## 🧰 Example Output

### ➕ POST `/products`
```json
{
  "_id": "66f56e1a0b5e1b4065099e60",
  "name": "Smartphone",
  "price": 899,
  "category": "Electronics",
  "__v": 0
}
```

### 🗑️ DELETE `/products/:id`
```json
{
  "message": "Product deleted",
  "product": {
    "_id": "66f56e1a0b5e1b4065099e60",
    "name": "Laptop",
    "price": 1200,
    "category": "Electronics"
  }
}
```

---

## 🧾 License
MIT License © 2025
