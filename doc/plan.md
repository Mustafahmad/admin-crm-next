# Next.js CRM — Complete Learning & Performance Roadmap

**Project:** `admin-crm`

**Goal:** Learn Next.js by building a production-style CRM rather than studying isolated examples.

---

# Overall Progress

## Current Position

**Completed:** ~70%

**Remaining:** ~30%

**Estimated remaining time:** 10 focused learning days

The remaining days are not necessarily calendar days. A difficult topic can take longer without being considered a failure.

---

# PHASE 1 — FOUNDATION

# COMPLETED

## Day 1 — Next.js Project & App Router

### Completed

- [x] Next.js project setup
- [x] TypeScript
- [x] App Router
- [x] `app/` directory
- [x] `page.tsx`
- [x] Nested routes
- [x] Dynamic routes `[id]`
- [x] Promise-based `params`
- [x] `layout.tsx`
- [x] Nested layouts
- [x] `Link`
- [x] `usePathname`
- [x] Route organization

### CRM Implementation

```text
/dashboard
/dashboard/customers
/dashboard/customers/[id]
/dashboard/customers/create
/dashboard/customers/[id]/edit
```

### Status

**COMPLETE**

---

# DAY 2 — Server & Client Components

# COMPLETED

### Completed

- [x] Server Components
- [x] Client Components
- [x] `"use client"`
- [x] When Client Components are required
- [x] Passing props
- [x] Reusable components
- [x] Server → Client component boundaries
- [x] Keeping data fetching on the server

### CRM Implementation

Reusable components:

```text
StatCard
Navbar
Sidebar
CustomerForm
CustomerSearch
SubmitButton
```

### Status

**COMPLETE**

---

# DAY 3 — Prisma & Database CRUD

# COMPLETED

### Completed

- [x] Prisma
- [x] PostgreSQL
- [x] Prisma 7
- [x] Prisma schema
- [x] Migrations
- [x] Generated Prisma client
- [x] Database queries
- [x] Create
- [x] Read
- [x] Update
- [x] Delete
- [x] Unique constraints
- [x] Handling Prisma errors

### CRM Implementation

Customer CRUD.

### Status

**COMPLETE**

---

# DAY 4 — Service Layer

# COMPLETED

### Completed

- [x] Separating database logic from UI
- [x] Service functions
- [x] `customer.service.ts`
- [x] `dashboard.service.ts`
- [x] Reusable database operations
- [x] Keeping components thin

### Architecture

```text
Page / Server Action
        ↓
Service
        ↓
Prisma
        ↓
PostgreSQL
```

### Status

**COMPLETE**

---

# DAY 5 — Server Actions & Forms

# COMPLETED

### Completed

- [x] Server Actions
- [x] `"use server"`
- [x] Form submission
- [x] `useActionState`
- [x] `useFormStatus`
- [x] `FormData`
- [x] Server-side validation
- [x] Returning form errors
- [x] Pending states
- [x] `redirect()`
- [x] `revalidatePath()`
- [x] Server Action authorization

### CRM Implementation

Customer create/edit/delete.

### Status

**COMPLETE**

---

# DAY 6 — Zod Validation

# COMPLETED

### Completed

- [x] Zod schemas
- [x] `safeParse`
- [x] Field validation
- [x] Validation error handling
- [x] Server-side validation
- [x] Combining Zod with Server Actions

### CRM Implementation

Customer validation:

```text
name
email
```

including duplicate email handling.

### Status

**COMPLETE**

---

# DAY 7 — Search & Pagination

# COMPLETED

### Completed

- [x] URL query parameters
- [x] Search
- [x] Pagination
- [x] `searchParams`
- [x] Prisma `skip`
- [x] Prisma `take`
- [x] `count`
- [x] Case-insensitive search
- [x] Server-side filtering

### CRM Implementation

Customer search and pagination.

### Status

**COMPLETE**

---

# DAY 8 — Loading, Errors & Not Found

# MOSTLY COMPLETED

### Completed

- [x] `loading.tsx`
- [x] Route loading UI
- [x] `error.tsx`
- [x] `notFound()`
- [x] `[id]/not-found.tsx`
- [x] Server-side not-found handling
- [x] Basic error boundaries

### Currently Learning

- [x] `reset()`
- [x] Error recovery
- [x] Local component-level error boundary

### Status

**IN PROGRESS**

---

# DAY 9 — Authentication

# COMPLETED

### Completed

- [x] Better Auth
- [x] Prisma adapter
- [x] Login
- [x] Logout
- [x] Sessions
- [x] Server-side session retrieval
- [x] Protected dashboard
- [x] Auth client
- [x] Redirect unauthenticated users

### CRM Implementation

```text
/login
/dashboard
```

### Status

**COMPLETE**

---

# DAY 10 — Authorization & RBAC

# COMPLETED

### Completed

- [x] Authentication vs authorization
- [x] Roles
- [x] Permissions
- [x] RolePermission
- [x] Permission naming
- [x] `requirePermission()`
- [x] Server-side permission checks
- [x] Authorization inside Server Actions
- [x] UI permission concepts

### Roles

```text
Admin
Manager
Viewer
```

### Example permissions

```text
customer.view
customer.create
customer.update
customer.delete
```

### Status

**COMPLETE**

---

# DAY 11 — Next.js Caching

# COMPLETED

This was a major module and should NOT be repeated.

### Completed

- [x] `"use cache"`
- [x] Cache Components
- [x] `cacheComponents: true`
- [x] `cacheLife`
- [x] `cacheTag`
- [x] `updateTag`
- [x] `revalidatePath`
- [x] Cache invalidation
- [x] Stale/revalidation concepts
- [x] Cached dashboard statistics
- [x] Keeping customer list fresh

### CRM Implementation

Dashboard statistics:

```text
Customer count
User count
```

with cache lifetime and cache tags.

### Important distinction learned

```text
"use cache"
      ↓
Persistent Next.js caching


cache()
      ↓
Request-level deduplication
```

### Status

**COMPLETE**

---

# DAY 12 — Parallel Data Fetching

# COMPLETED

### Completed

- [x] Sequential fetching
- [x] Parallel fetching
- [x] `Promise.all()`
- [x] Independent database queries
- [x] Avoiding unnecessary waterfalls

### CRM Implementation

Dashboard:

```tsx
const [stats, customers] = await Promise.all([
  getDashboardStats(),
  getRecentCustomers(),
]);
```

### Status

**COMPLETE**

---

# DAY 13 — Suspense & Streaming

# COMPLETED

### Completed

- [x] `Suspense`
- [x] Suspense fallback
- [x] Independent Suspense boundaries
- [x] Streaming
- [x] Component-level loading
- [x] Server Components + Suspense
- [x] Slow component simulation

### CRM Implementation

```text
Dashboard
├── DashboardStats
└── RecentCustomers
```

with independent Suspense boundaries.

Customer page:

```text
Customer Details
       +
Customer Activity
       ↓
independent streaming
```

### Status

**COMPLETE**

---

# DAY 14 — React `cache()`

# COMPLETED

### Completed

- [x] React `cache()`
- [x] Request-level deduplication
- [x] Same function + same arguments
- [x] Difference between `cache()` and `"use cache"`
- [x] Sharing server data requests
- [x] Data ownership

### CRM Implementation

```tsx
export const getCustomerById = cache(async (id: string) => {
  return prisma.customer.findUnique({
    where: { id },
  });
});
```

### Status

**COMPLETE**

---

# DAY 15 — Data Ownership & `notFound()`

# COMPLETED

### Completed

Moved the existence check into the page:

```text
CustomerPage
    ↓
getCustomerById()
    ↓
customer exists?
   ↙       ↘
 yes       no
  ↓         ↓
render    notFound()
```

Then:

```text
CustomerPage
├── CustomerHeader(customer)
└── CustomerDetail(customer)
```

### Architectural lesson

Pages can own:

- data loading
- existence checks
- route decisions

Components can own:

- presentation

### Status

**COMPLETE**

---

# REMAINING ROADMAP

# DAY 1 — Advanced Error Boundaries

## Topics

- [x] Local error boundaries
- [x] Route-level vs component-level errors
- [x] Nested error boundaries
- [x] `reset()`
- [x] Error propagation
- [x] Suspense + error boundary together
- [x] Designing recoverable UI

## CRM Task

Make:

```text
CustomerActivity
```

fail independently without replacing:

```text
CustomerHeader
CustomerDetail
```

Target:

```text
Customer Page
│
├── Header              ← still works
├── Details             ← still works
│
└── Activity
     ↓
   Error
     ↓
   [Try again]
```

### Status

**Completed**

---

# DAY 2 — Advanced Routing & Proxy

## Topics

- [x] Next.js Proxy
- [x] Authentication at route level
- [x] Protected route groups
- [x] Public vs private routes
- [x] Redirect behavior
- [x] Route matching
- [x] Why Proxy is not authorization
- [x] Server-side authorization boundaries

## CRM Task

Protect:

```text
/dashboard/*
```

while keeping:

```text
/login
```

public.

Then understand:

```text
Proxy
   ↓
"Can this request enter?"

Server Action
   ↓
"Is this user allowed to perform this operation?"
```

### Status

**Completed**

---

# DAY 3 — Advanced Database Architecture

## Topics

- [x] Prisma relations
- [x] One-to-many relationships
- [x] Many-to-many relationships
- [x] Transactions
- [x] Database constraints
- [x] Indexes
- [x] Query optimization
- [x] N+1 problem
- [x] `select`
- [x] `include`
- [x] Transaction boundaries

## CRM Task

Expand Customer:

```text
Customer
│
├── Activities
├── Notes
├── Contacts
└── Leads
```

Create a proper activity system:

```text
call
email
meeting
note
```

### Status

**Completed**

---

# DAY 4 — API Route Handlers & Webhooks

## Topics

- [x] Route Handlers
- [x] GET
- [x] POST
- [x] PATCH
- [x] DELETE
- [x] Request parsing
- [x] Response handling
- [x] API validation
- [x] API authentication
- [x] API authorization
- [x] Webhooks
- [x] Webhook verification

## CRM Task

Create:

```text
/api/customers
/api/customers/[id]
```

Then create:

```text
/api/webhooks/customer
```

for incoming external events.

### Status

**Completed**

---

# DAY 5 — Client State & UI Architecture

## Topics

- [ ] Local React state
- [ ] Client state vs server state
- [ ] Context
- [ ] When global state is appropriate
- [ ] When global state is unnecessary
- [ ] Modal state
- [ ] Filter state
- [ ] Bulk selection
- [ ] URL state vs React state

## CRM Task

Implement a real client-side interaction such as:

```text
Customer bulk selection
```

or:

```text
Customer modal
```

while deliberately keeping server data on the server.

### Goal

Understand:

```text
Server data
      ≠
UI state
```

### Status

**PENDING**

---

# DAY 6 — Advanced Forms & Optimistic UI

You already completed `useActionState` and `useFormStatus`.

This day is **not** about relearning them.

## New Topics

- [ ] Optimistic UI
- [ ] `useOptimistic`
- [ ] Instant UI updates
- [ ] Rollback after failure
- [ ] Multiple Server Actions
- [ ] Form UX patterns
- [ ] Optimistic deletion
- [ ] Optimistic status changes

## CRM Task

Implement something like:

```text
Customer Activity
    ↓
Mark as completed
    ↓
UI changes immediately
    ↓
Server Action
    ↓
Success / rollback
```

### Status

**PENDING**

---

# DAY 7 — Performance Optimization

## Topics

- [ ] Server vs Client Component optimization
- [ ] Reducing client JavaScript
- [ ] Component boundaries
- [ ] Dynamic imports
- [ ] Lazy loading
- [ ] Image optimization
- [ ] Font optimization
- [ ] Bundle analysis
- [ ] Database query performance
- [ ] Avoiding unnecessary requests
- [ ] Avoiding waterfalls

## CRM Task

Perform a performance audit of the existing CRM.

Find at least:

```text
5 performance improvements
```

and implement them.

### Status

**PENDING**

---

# DAY 8 — Security

## Topics

- [ ] Authentication security
- [ ] Authorization
- [ ] Server Action security
- [ ] Input validation
- [ ] XSS
- [ ] CSRF concepts
- [ ] Cookies
- [ ] Environment variables
- [ ] Secrets
- [ ] Rate limiting
- [ ] API security
- [ ] Webhook verification
- [ ] File upload security
- [ ] Database security

## CRM Task

Perform a security audit:

```text
Login
↓
Session
↓
Routes
↓
Server Actions
↓
Permissions
↓
API
↓
Database
```

### Status

**PENDING**

---

# DAY 9 — Testing

## Topics

- [ ] Unit testing
- [ ] Integration testing
- [ ] End-to-end testing
- [ ] Server Actions testing
- [ ] Validation testing
- [ ] Authorization testing
- [ ] API testing
- [ ] Error scenario testing

## CRM Tests

Test:

```text
Customer creation
Customer update
Customer deletion
Invalid customer
Duplicate email
Unauthorized user
Forbidden user
Missing customer
API failure
```

### Status

**PENDING**

---

# DAY 10 — Production Deployment & Architecture

## Topics

- [ ] Production build
- [ ] Environment variables
- [ ] Prisma migrations
- [ ] PostgreSQL production
- [ ] Logging
- [ ] Error monitoring
- [ ] Deployment
- [ ] Reverse proxy
- [ ] HTTPS
- [ ] Database backups
- [ ] CI/CD basics

## CRM Task

Deploy the application.

Target architecture:

```text
Internet
   ↓
Reverse Proxy
   ↓
Next.js
   ↓
PostgreSQL
```

### Status

**PENDING**

---

# OPTIONAL DAY 11 — Real CRM Feature

After the technical roadmap, build a real CRM module without tutorial-style guidance.

Possible module:

```text
Lead Management
```

Features:

- [ ] Create lead
- [ ] Lead status
- [ ] Assign lead
- [ ] Search
- [ ] Filter
- [ ] Pagination
- [ ] Activity history
- [ ] Permissions
- [ ] Dashboard statistics

The goal is to see whether you can independently apply everything you've learned.

### Status

**PENDING**

---

# OPTIONAL DAY 12 — Final Architecture Review

Do a complete review of the project.

Check:

```text
Architecture
Database
Authentication
Authorization
Caching
Performance
Security
Error handling
Testing
Deployment
Code organization
```

Then refactor anything that doesn't meet production standards.

### Status

**PENDING**

---

# CURRENT PROGRESS SUMMARY

## Completed

### Foundation

- [x] App Router
- [x] Routing
- [x] Dynamic routes
- [x] Layouts
- [x] Server Components
- [x] Client Components
- [x] Reusable components

### Database

- [x] Prisma
- [x] PostgreSQL
- [x] CRUD
- [x] Service layer
- [x] Validation

### Forms

- [x] Server Actions
- [x] `useActionState`
- [x] `useFormStatus`
- [x] Zod
- [x] Form errors
- [x] Pending states
- [x] Redirects

### Data

- [x] Server fetching
- [x] Search
- [x] Pagination
- [x] `Promise.all()`
- [x] React `cache()`
- [x] `"use cache"`
- [x] `cacheLife`
- [x] `cacheTag`
- [x] `updateTag`
- [x] `revalidatePath`

### Rendering

- [x] `loading.tsx`
- [x] `error.tsx`
- [x] `notFound()`
- [x] Suspense
- [x] Streaming
- [x] Independent Suspense boundaries

### Authentication

- [x] Better Auth
- [x] Sessions
- [x] Login/logout
- [x] Protected routes
- [x] RBAC
- [x] Permissions
- [x] Server-side authorization  

- [x] Proxy / advanced route protection
- [x] Advanced Prisma architecture
- [x] Relations
- [x] Transactions
- [x] N+1 prevention
- [ ] Route Handlers
- [x] APIs
- [x] Webhooks  

---

# Remaining

- [ ] Client state
- [ ] Optimistic UI
- [ ] Performance optimization
- [ ] Security
- [ ] Testing
- [ ] Production deployment
- [ ] Independent CRM feature
- [ ] Final architecture review

---

