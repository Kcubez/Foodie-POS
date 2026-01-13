# 🍕 Foodie POS

A modern, full-stack **Point of Sale (POS) system** for restaurants and food businesses built with Next.js 15, featuring a comprehensive back-office management dashboard and a customer-facing QR code ordering system.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-5.18-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql)
![MUI](https://img.shields.io/badge/MUI-5.16-007FFF?logo=mui)

## ✨ Features

### 🏢 Back-Office Management Dashboard

- **Menu Management** - Create, edit, and organize menu items with images and pricing
- **Menu Categories** - Organize menus into categories for easy navigation
- **Addon Categories & Addons** - Configure optional/required add-ons for menu items
- **Multi-Location Support** - Manage multiple restaurant locations from a single dashboard
- **Table Management** - Create and manage tables with auto-generated QR codes
- **Order Management** - Real-time order tracking with status updates (Cart → Pending → Cooking → Complete)
- **Company Settings** - Configure company information and preferences

### 📱 Customer-Facing Order App

- **QR Code Ordering** - Customers scan table QR codes to access digital menus
- **Interactive Menu** - Browse menu categories and items with images
- **Addon Selection** - Choose required and optional add-ons for each item
- **Shopping Cart** - Review and modify orders before submission
- **Order Tracking** - Real-time order status updates

### 🔐 Authentication & Security

- **NextAuth.js Integration** - Secure authentication with multiple providers
- **Role-based Access** - Separate admin and customer interfaces
- **Session Management** - Secure session handling

## 🛠️ Tech Stack

| Category            | Technology              |
| ------------------- | ----------------------- |
| **Framework**       | Next.js 15 (App Router) |
| **Language**        | TypeScript              |
| **Database**        | PostgreSQL              |
| **ORM**             | Prisma                  |
| **Authentication**  | NextAuth.js             |
| **UI Library**      | Material UI (MUI)       |
| **Styling**         | Emotion CSS-in-JS       |
| **File Storage**    | Vercel Blob             |
| **QR Code**         | qrcode library          |
| **Form Validation** | Zod                     |
| **Notifications**   | React Hot Toast         |

## 📁 Project Structure

```
foodie-pos/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── backoffice/        # Admin dashboard
│   │   │   ├── menus/         # Menu management
│   │   │   ├── menu-categories/
│   │   │   ├── addon-categories/
│   │   │   ├── addons/
│   │   │   ├── locations/
│   │   │   ├── tables/
│   │   │   ├── orders/
│   │   │   └── settings/
│   │   └── order/             # Customer ordering app
│   │       ├── menus/
│   │       ├── cart/
│   │       └── active-order/
│   ├── components/            # Reusable UI components
│   ├── config/                # App configuration
│   └── libs/                  # Utility functions & actions
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kcubez/foodie-pos.git
   cd foodie-pos
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Configure the following variables:

   ```env
   DATABASE_URL="postgresql://..."
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"
   ```

4. **Run database migrations**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📊 Database Schema

The application uses a relational database with the following main entities:

- **Company** - Restaurant/business information
- **Users** - Admin users with company association
- **Locations** - Physical restaurant locations
- **Tables** - Dining tables with QR codes
- **MenuCategories** - Categories for organizing menus
- **Menus** - Food/drink items with pricing and images
- **AddonCategories** - Groups of add-ons (e.g., "Toppings", "Sizes")
- **Addons** - Individual add-on items with pricing
- **Orders** - Customer orders with status tracking
- **OrdersAddons** - Add-ons associated with orders

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy!

```bash
npm run build
```

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Kaung Khant Kyaw**

- Full Stack Developer
- [GitHub](https://github.com/Kcubez)
- [LinkedIn](https://linkedin.com/in/kaungkhantkyaw-kcubez)

---

⭐ If you found this project helpful, please give it a star!
