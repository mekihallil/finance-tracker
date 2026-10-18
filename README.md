# 💰 Finance Tracker Pro

**A Full-Stack TypeScript Financial Management System**

Finance Tracker Pro is a full-stack financial management application built with the MERN stack. It helps users manage their income and expenses, track savings, monitor financial activity, and share bills with other users through a centralized dashboard.

The project emphasizes secure authentication, type safety, reusable architecture, reliable data validation, and a responsive user experience.

> 🚧 **New version coming soon!**  
> The next release will focus on username-based split bills, participant invitations and acceptance, payment status tracking, trust scores, and payment reminders.

---

## 🚀 Features

### 💵 Income and Expense Management
- Create, read, update, and delete financial transactions.
- Track income and expenses separately.
- Organize transactions by category.
- View transaction history and monitor spending.
- Calculate income, expenses, and current balance.

### 📊 Financial Dashboard
- View total income, expenses, and available balance.
- Access financial summaries powered by backend aggregation.
- Monitor personal financial activity in one place.
- Visualize financial information through a centralized dashboard.

### 🎯 Savings Management
- Create and manage savings goals.
- Track contributions toward savings targets.
- Monitor saving progress and completion percentages.
- View savings activity over time.

### 🤝 Split Bill Management
- Create shared bills and add participants.
- Calculate each participant's share of a bill.
- Track which participants have paid and which have outstanding balances.
- View unpaid amounts associated with shared expenses.
- Manage split bills independently for each authenticated user.

### 🔐 Authentication and Security
- User registration and login.
- Password hashing with bcrypt.
- JWT-based authentication.
- Protected API endpoints.
- User-specific financial records.
- Server-side request validation.

### 🌗 Modern User Experience
- Dark and light themes.
- Responsive layouts.
- Reusable React components.
- Form validation with clear error messages.
- Notifications and feedback using Sonner.
- Efficient data fetching and caching with TanStack Query.

---

## 🛠️ Technology Stack

### Frontend
- React 18+
- TypeScript
- Vite
- Tailwind CSS v4
- TanStack Query v5
- React Context API
- Axios
- React Hook Form
- Zod
- Sonner
- Lucide React

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- Zod
- HTTP REST API

### Development and Testing
- Git and GitHub
- VS Code REST Client
- `.http` API testing files
- Environment-based configuration
- Separation of concerns
- Controller-service-route architecture

---

## 📂 Project Architecture

The project uses a modular structure that separates responsibilities and makes the application easier to maintain and extend.

```text
finance-tracker/
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── http/
│       ├── interface/
│       ├── middlewares/
│       ├── models/
│       ├── routes/
│       ├── services/
│       ├── validations/
│       ├── app.ts
│       └── index.ts
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── hook/
│       ├── interface/
│       ├── lib/
│       ├── page/
│       ├── services/
│       └── types/
│
└── README.md
```

*Note: The structure illustrates the intended organization; directory names may vary slightly in the current repository.*

---

## 🧠 Engineering Principles

### Separation of Concerns
The frontend separates UI components, custom hooks, API services, and validation schemas. The backend separates routing, request handling, business logic, data models, and middleware.

### Type Safety
TypeScript is used across the frontend and backend to improve maintainability, clarify data contracts, and catch many errors during development.

### Data Validation
Zod validates incoming data and frontend form inputs. Server-side validation remains essential because client-side validation alone cannot protect the API.

### Predictable Server State
TanStack Query manages server-state fetching, caching, mutations, and query invalidation to keep the interface synchronized with backend data.

### Secure User Data
Authenticated endpoints associate financial records with the logged-in user. Access control must be enforced on the backend rather than relying on frontend filtering.

### Reusable Code
Shared components, hooks, services, and validation schemas help reduce duplication and keep behavior consistent.

---

## 🔮 What's Coming in the Next Version?

The next release aims to make split bills more collaborative, transparent, and trustworthy.

### 1. 👤 Username-Based User Identification
- Allow users to create a unique username.
- Find and invite split-bill participants by username instead of email.
- Prevent duplicate usernames.
- Display usernames and profile information in split-bill details.

### 2. ✉️ Split-Bill Invitations and Acceptance
- Send an invitation when a user is added to a split bill.
- Notify the invited user that their participation requires confirmation.
- Allow users to accept or reject invitations.
- Track invitation states such as `pending`, `accepted`, and `rejected`.
- Calculate confirmed participant shares using the agreed participant list.

### 3. ⭐ User Trust and Payment Reliability Score
- Track completed and overdue split-bill payments.
- Calculate a transparent payment reliability score based on verifiable payment history.
- Display relevant payment statistics to help participants make informed decisions.
- Prevent users from unfairly manipulating another user's score.

**Planned trust metrics:**
- Total accepted split bills.
- Payments completed on time.
- Payments completed late.
- Outstanding payments.
- On-time payment rate.

The score should distinguish a genuinely overdue payment from a payment that is still awaiting confirmation or whose due date has not arrived.

### 4. ✅ Payment Status Updates
- Allow participants to mark their share as paid.
- Display clear paid, unpaid, and pending-confirmation states.
- Update the relevant payment icon when the status changes.
- Keep a record of payment status changes.
- Support confirmation workflows when proof or external payment verification is required.

Marking a payment as paid should not automatically imply that money has been transferred or independently verified.

### 5. 🔔 Payment Notifications and Reminders
- Notify users when someone invites them to a split bill.
- Notify participants when a bill is accepted or updated.
- Send reminders for unpaid shares before or after their due dates.
- Notify participants when a payment status changes.
- Allow users to manage notification preferences.

### 6. 📈 Improved Financial Insights
- More detailed income and expense summaries.
- Better savings progress visualization.
- Improved split-bill history and outstanding balance tracking.
- Additional reporting and filtering options.

*These features are planned for a future release and are not represented as completed functionality.*

---

## ⚙️ Getting Started

### Prerequisites

Install the following before running the application:

- Node.js and npm
- MongoDB or a MongoDB Atlas connection
- Git
- Visual Studio Code (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/mekihallil/finance-tracker.git
cd finance-tracker
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_random_secret
```

Keep your environment variables private. Never commit real database credentials or JWT secrets to GitHub.

### 4. Start the Backend

```bash
npm run dev
```

The backend is expected to run on port `5000`, unless configured otherwise.

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Start the Frontend

```bash
npm run dev
```

Vite commonly serves the frontend at `http://localhost:5173`.

---

## 🧪 API Testing

This project uses VS Code REST Client `.http` files to test endpoints during development.

Example:

```http
GET http://localhost:5000/api/transaction/summary
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

Replace the example token with a valid token from your development environment. The endpoint and authentication requirements must match the routes implemented in your backend.

---

## 🎯 Project Goals

Finance Tracker Pro is being developed to demonstrate practical full-stack engineering skills, including:

- Building REST APIs with Express and TypeScript.
- Designing MongoDB schemas with Mongoose.
- Implementing JWT authentication and authorization.
- Managing server state with TanStack Query.
- Validating forms and API requests with Zod.
- Building reusable, responsive interfaces with React and Tailwind CSS.
- Designing multi-user financial workflows.
- Improving reliability through modular architecture and API testing.

---

## 👨‍💻 Author

**Meki Hallil**

Full-Stack Developer | React | TypeScript | Node.js | Express | MongoDB

- **GitHub:** https://github.com/mekihallil
- **LinkedIn:** https://www.linkedin.com/in/meki-hallil

---

## 📌 Project Status

**Active development — new version coming soon.**

The upcoming release will focus on username-based split-bill invitations, participant acceptance, payment tracking, payment reliability metrics, and notifications.

If you find the project interesting, feel free to explore the repository and follow its development.
