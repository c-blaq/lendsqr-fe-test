# Lendsqr Frontend Assessment

A frontend dashboard application built with **React + TypeScript + Vite**, implementing a Users management flow that mirrors the Lendsqr Admin design.

This project focuses on **visual fidelity**, **clean architecture**, **state management**, **unit testing**, and **responsiveness**, as required by the assessment guidelines.

---

## Live Demo

**URL:** https://fathi-adesina-babayeju-lendsqr-fe-test.vercel.app/

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd lendsqr-fe-test
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## Running Tests

```bash
npm run test
```

### Test Coverage Includes

- Rendering users when API returns data (positive)
- Handling empty API responses (negative)
- Filtering users by username
- Empty results when filter matches nothing
- Pagination interaction

---

## Features Implemented

### Layout & Navigation

- Reusable Dashboard layout (Header + Sidebar)
- Sidebar navigation driven by a configuration constant
- “Coming Soon” placeholder for unimplemented pages
- 404 Not Found page
- Global loading states

### Authentication

- Login page layout (UI-focused as per assessment scope)
- Input validations

### Dashboard

- Summary statistics cards
- Clean, lightweight dashboard to avoid duplication with Users page

### Users

- Users listing page
- Dynamic stats updated from filtered data
- Client-side filtering (organization, username, email, phone, status, date)
- Pagination with configurable page size
- Status badges (Active, Inactive, Pending, Blacklisted)

### User Details

- User summary card
- User details (personal, employment, socials, and guarantor details)
- Empty state handling for invalid or missing users

### Quality & Testing

- Unit tests with **positive and negative scenarios**
- Mock API using static JSON
- Mobile-responsive layout
- Clean folder and file structure

---

## Tech Stack

- React 18
- TypeScript
- Vite
- SCSS
- React Router v6
- Radix UI (accessible primitives)
- Vitest + React Testing Library
- ESLint

---

## Project Structure

```txt
public/
├── icons/
├── mock/
│   └── users.json
│
src/
├── api/
│   └── user.ts
│
├── assets/
│   ├── fonts
│   ├── icons
│   └── img
│
├── components/
│   ├── commmon
│   ├── layout
│   ├── pages/users
│   └── ui
│
├── constants/
│   └── sidebar.ts
│
├── layouts/
│   ├── scss/
│   ├── AuthLayout.tsx
│   └── DashboardLayout.tsx
│
├── pages/ (each route have their respective scss file)
│   ├── users
│   ├── coming-soon
│   ├── not-found
│   └── dashboard
│
├── routes/
│   ├── index.tsx
│   └── routes.ts
│
├── styles/
│   └── core
│   └── main.scss
│
├── __tests__/
│   └──mock/
│   └── Users.test.tsx
│
├── test/
│   └── setup.ts
│
├── types/
│   ├── user.ts
│   └── navigation.ts
│
├── utils/
│   └── formatters.ts
│
└── main.tsx
```

---

## Mock API

- Data served from `public/mock/users.json`
- API abstraction in `src/api/user.ts`
- Supports client side pagination and filtering

---

## Architecture & Design Decisions

### Layout Structure

The application uses separate layouts for authentication and the dashboard. This avoids repetition and keeps page responsibilities clear.

### Sidebar Configuration

- Sidebar items live in `constants/sidebar.ts`
- Keeps Sidebar component clean and declarative
- Prevents duplicate route logic

### Loading States

Skeleton loaders are used across data-driven views to provide visual feedback while data is being fetched. This ensures a smoother user experience and prevents layout shifts during loading states.

---

## Accessibility

- Semantic HTML
- Keyboard-friendly interactions
- Accessible labels and controls

---

## Responsiveness

- Mobile sidebar toggle
- Adaptive layouts across breakpoints
- Smooth transitions using CSS transforms

---

## Assumptions & Limitations

- Authentication is mocked
- Only General Details tab is active
- Backend persistence is simulated
