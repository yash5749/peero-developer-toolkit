### PEERO

# peero-x-backend

A modern Express backend generator using pure ES Modules (2026+ standard).  
Part of the **Peero Developer Toolkit**.

Generate a production-ready backend in seconds:



## 🚀 Features

- ⚡ Pure ES6 modules (import/export)
- 📂 Clean, scalable folder structure
- 🔐 Auth system (register, login, getMe)
- 🔑 JWT based authentication
- 🔒 Password hashing with bcryptjs
- 🧱 Config-driven database connection
- 🛠 ApiError, ApiResponse, asyncHandler utilities
- 🌱 Auto generated `.env` file
- 📦 Auto-installs dependencies
- 🧰 Zero-config backend ready in seconds

## 🛠 Installation

No install needed:


## 🚀 Features

- Pure ES6 modules (import/export everywhere)
- Express server with clean architecture
- MongoDB + Mongoose setup
- JWT authentication
- Hashing with bcryptjs
- ApiError, ApiResponse, asyncHandler utils
- Auto `.env` generation
- Auto dependency installation
- Scalable folder structure

## 📦 Usage

```shell
npx peero-x-backend myapp
cd myapp
npm run dev
```


## 📁 Generated Structure
-------------
myapp/
- .env
- .env.example
- package.json
- package-lock.json
-  server.js
-  src/
    - app.js
    - config/
        - db.js
    - controllers/
        - auth.controller.js
    - middleware/
        - auth.middleware.js
        - error.middleware.js
    - models/
        - User.js
    - routes/
        - auth.routes.js
    - utils/
        - ApiError.js
        - ApiResponse.js
        - asyncHandler.js
        - token.js
    - node_modules/



---

# 🔥 API Endpoints

### **Auth Routes**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/auth/register` | Create a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get logged-in user |

---

# 🔧 Scripts

npm run dev # start development server using nodemon
npm start # start without nodemon

# ⚙️ Requirements

- Node.js 18+  
- MongoDB running locally (or via Docker) 

# 🌟 Part of the Peero Toolkit

Future generators:

- `peero-dj-backend` (Django)
- `peero-java-backend`
- `peero-vite-frontend`
- `peero-react-frontend`
- `peero-next-frontend`

---

# 🤝 Contributing

Pull requests are welcome.  
Open issues for bugs or feature ideas.

---

# 📄 License

MIT License  
© 2025 Peero
