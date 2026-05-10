
# 💰 Finance Tracker Pro (Full-Stack TypeScript)

A production-grade, type-safe financial management system built with the **MERN Stack**. This application features a highly decoupled architecture, modern server-state management.

---

## 🚀 Key Features

- **Full CRUD Engine:** Securely manage income and expense records.
- **Advanced Dashboard:** Real-time financial summaries (Balance, Income, Expense) using backend aggregation logic.
- **Modern Theme Engine:** Stateful Dark/Light mode implementation using React Context API and Tailwind CSS v4.
- **Server-State Management:** Efficient data fetching, caching, and optimistic updates via **TanStack Query (React Query)**.
- **End-to-End Type Safety:** Strict TypeScript implementation across both Frontend and Backend to eliminate runtime errors.
- **Robust Validation:** Data integrity ensured by **Zod** schema validation on both API requests and Frontend forms.
- **Professional Testing Workflow:** Built-in API testing using `.http` files for rapid development and documentation.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** React 18+ (Vite)
- **Styling:** Tailwind CSS v4
- **State Management:** TanStack Query v5 & React Context API
- **API Client:** Axios
- **Form Handling:** React Hook Form + Zod
- **Notifications:** Sonner

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Architecture:** Controller-Service-Route Pattern
- **Testing:** REST Client (`.http` integration)

---

## 📂 Project Architecture

The project follows the **Separation of Concerns (SoC)** principle for high scalability:

```text
backend/src/
├── config/        # Database & Environment configuration
├── controllers/   # Request handling & Business logic
├── http/          # Professional .http API testing files
├── interface/     # Global TypeScript interfaces
├── middlewares/   # Zod validation & Error handling
├── models/        # Mongoose Data Models
├── routes/        # API route definitions
├── validations/   # Zod schemas
├── app.ts         # Express configuration
└── index.ts       # Server entry point

frontend/src/
├── components/    # Reusable UI components (Atomic design)
├── context/       # Theme & Global State Providers
├── hook/          # Custom TanStack Query hooks
├── interface/     # UI Data interfaces
├── lib/           # Utility libraries (Axios instances)
├── page/          # Routed page components
├── services/      # API communication layer (Axios services)
└── types/         # Localized TS types & Zod schemas

🚦 Getting Started

1. Installation

# Clone the repository
git clone https://github.com/mekihallil/finance-tracker.git

# Install Backend dependencies
cd backend
npm install

# Install Frontend dependencies
cd ../frontend
npm install

2. Environment Setup

Create a .env file in the backend/ directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string

3. Running the Project

Start Backend: npm run dev (Runs on port 5000)
Start Frontend: npm run dev (Runs on port 5173)

🧪 Testing the API

Instead of external tools like Postman, this project uses the VS Code REST
Client pattern. Navigate to backend/src/http and open any .http file to test
endpoints directly from your editor.

GET http://localhost:5000/api/transaction/summary
Content-Type: application/json

🧠 Core Engineering Principles

1.  Decoupled Logic: The UI (components) never talks directly to the API. It uses hooks, which use services, ensuring the code is easy to test and maintain.
2.  Predictable State: Using React Query ensures that the UI is always in sync with the database without manual useEffect management.
3.  Clean Code: reusable code once to handle complex tasks automatically.

👤 Author
  
  Meki Hallil

  - https://www.linkedin.com/in/meki-hallil
  - https://github.com/mekihallil