# Notes Management REST API ✍️

A clean and robust Notes Management API built with **Node.js, Express, and MongoDB**. This assignment focuses on REST principles, CRUD operations, and MVC architecture.

---

## 🚀 Key Features

- **RESTful Endpoints**: Full CRUD operations for managing notes.
- **Bulk Operations**: Create and delete multiple notes at once.
- **MVC Architecture**: Clean separation of models, controllers, and routes.
- **Mongoose Support**: Data modeling with schema validation.

---

## 📦 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Validation**: Mongoose Built-in Validators

---

## 📂 Project Structure

```text
notes-app/
│
├── src/
│   ├── config/      # Database connection
│   ├── models/      # Mongoose Schema
│   ├── controllers/ # Logical implementation
│   ├── routes/      # Endpoint definitions
│   ├── app.js       # Express configuration
│   └── index.js     # Server startup
│
├── .env.example     # Environment variable template
└── package.json     # Dependencies & Scripts
```

---

## 🛠️ API Endpoints

### Base URL: `/api/notes`

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/notes` | Create a single note |
| **POST** | `/api/notes/bulk` | Create multiple notes |
| **GET** | `/api/notes` | Fetch all notes |
| **GET** | `/api/notes/:id` | Fetch a single note by ID |
| **PUT** | `/api/notes/:id` | Replace a note completely |
| **PATCH** | `/api/notes/:id` | Update specific fields |
| **DELETE** | `/api/notes/:id` | Delete a single note |
| **DELETE** | `/api/notes/bulk` | Delete multiple notes |

---

## ⚙️ Environment Variables

Create a `.env` file from `.env.example`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

---

## 🏃 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abdulhaque2005/Note_api.git
   cd Note_api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

4. **Start the production server**:
   ```bash
   npm start
   ```

---

## 🛠️ Deployment (Render)

1. Connect your GitHub repository to Render.
2. Set Environment Variables: `MONGO_URI`.
3. Build Command: `npm install`.
4. Start Command: `npm start`.

---

Developed as an **Assignment** focusing on Backend Fundamentals. 🚀
