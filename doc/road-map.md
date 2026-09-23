## 🗺️ Next.js Roadmap

### 1. Authentication & Authorization ✅ Almost complete

You've already learned:

* Better Auth
* Login/logout
* Sessions
* Protected routes
* Authentication vs authorization
* RBAC
* Roles
* Permissions
* Role-permission relationships
* Server-side permission checks
* Protecting Server Actions

**Remaining:**

* Permission-aware UI
* Admin user management
* Role management UI
* Handling unauthorized/forbidden states cleanly
* Possibly middleware for broad route protection

---

# 2. Forms & Server Actions 🔥

You've already used Server Actions, but we should go deeper.

Learn:

* `FormData`
* Server Actions
* Client-side vs server-side validation
* Zod
* Returning validation errors
* Pending states
* `useActionState`
* `useFormStatus`
* Optimistic UI
* Handling action errors
* Loading indicators
* Preventing duplicate submissions

You'll use this heavily throughout the CRM.

Example:

```text
Create Customer
      ↓
Form
      ↓
Server Action
      ↓
Zod validation
      ↓
Authorization
      ↓
Service
      ↓
Prisma
      ↓
revalidate
      ↓
UI update
```

---

# 3. Data Fetching & Caching ⭐⭐⭐

This is one of the **most important Next.js topics**.

We have mostly been fetching directly with Prisma:

```ts
const customers = await prisma.customer.findMany();
```

Now we need to understand:

* Server-side data fetching
* Request memoization
* Next.js caching
* `revalidate`
* `revalidatePath`
* `revalidateTag`
* Dynamic rendering
* Static rendering
* `force-dynamic`
* `no-store`
* Cache invalidation
* When data is cached vs fetched again

This is an area where Next.js differs significantly from traditional Laravel/Express applications.

---

# 4. Loading & Error Handling ✅ Partially done

You've already learned:

* `loading.tsx`
* `error.tsx`
* `not-found.tsx`
* `notFound()`

Still worth learning:

* Nested loading states
* Nested error boundaries
* `global-error.tsx`
* `global-not-found.tsx`
* `redirect()`
* `permanentRedirect()`
* Handling Server Action errors properly

---

# 5. Server Components vs Client Components ⭐⭐⭐

You've learned the basic distinction.

We should go deeper into:

```text
Server Component
       ↓
Client Component
       ↓
Server Action
```

Learn:

* When to use `"use client"`
* When **not** to use it
* Passing props from Server → Client
* Serializable props
* Server Component composition
* Client Component boundaries
* Why you shouldn't make the whole dashboard `"use client"`
* Fetching data in Server Components
* Interactive UI in Client Components

This is one of the most important Next.js concepts for production applications.

---

# 6. API Routes / Route Handlers

You currently use Server Actions for mutations.

We should also learn Next.js Route Handlers:

```text
app/api/customers/route.ts
```

Learn:

```http
GET
POST
PUT
PATCH
DELETE
```

and:

* `Request`
* `NextRequest`
* `NextResponse`
* Query parameters
* Route parameters
* JSON responses
* HTTP status codes
* Authentication
* Authorization
* Error handling

Then you'll understand when to use:

```text
Server Action
vs
Route Handler
```

This will be especially useful given your Express background.

---

# 7. Middleware / Proxy

Since you already asked about authorization, we'll revisit this.

Learn:

* Request interception
* Protecting route groups
* Redirecting unauthenticated users
* Public vs private routes
* Route matching
* What middleware/proxy should and shouldn't do
* Why sensitive authorization still belongs on the server operation

For example:

```text
/dashboard/*
      ↓
Authentication check
      ↓
Allow / redirect
```

But:

```text
deleteCustomer()
      ↓
Permission check
```

still remains necessary.

---

# 8. Dynamic Routes & Advanced Routing

You've already learned:

```text
[ id ]
```

We'll go further:

### Dynamic segments

```text
[ id ]
```

### Catch-all

```text
[ ...slug ]
```

### Optional catch-all

```text
[[ ...slug ]]
```

### Route groups

```text
(auth)
(dashboard)
```

### Parallel routes

```text
@modal
```

### Intercepting routes

```text
(.)photo
```

These become useful for things like:

```text
Customer list
     ↓
Click customer
     ↓
Customer details
```

and potentially displaying details in a modal without leaving the page.

---

# 9. Layouts & Navigation ⭐⭐

You've already learned nested layouts.

We'll eventually cover:

* Root layout
* Nested layouts
* Route groups
* Shared UI
* Persistent sidebar
* Persistent navbar
* Loading states inside layouts
* Template vs layout
* Navigation behavior

Your CRM is actually a good project for understanding this.

---

# 10. Search, Filtering & Pagination ✅ Partially done

You've already implemented:

* Query parameters
* Search
* Pagination
* `URLSearchParams`
* Server-side filtering
* Prisma `skip`
* Prisma `take`
* `count()`

We can extend this to:

* Multiple filters
* Sorting
* Date ranges
* Status filters
* Debounced search
* URL state
* Combining filters + pagination
* Preserving filters during navigation

For example:

```text
/customers?
search=john
&status=active
&page=2
&sort=name
```

---

# 11. Advanced Prisma / Database Patterns

This isn't strictly Next.js, but it's essential for your Next.js backend.

We'll learn:

* Relations
* Nested queries
* Transactions
* `include`
* `select`
* Aggregations
* `groupBy`
* Pagination
* Transactions
* Soft deletes
* Database constraints
* Optimizing queries
* N+1 problems

Your CRM will give us plenty of opportunities.

---

# 12. File Uploads

Very common in real applications.

We'll build something like:

```text
Customer
 ├── Profile
 ├── Documents
 └── Attachments
```

Learn:

* `<input type="file">`
* `FormData`
* Server Actions
* File validation
* Storage
* Uploading images
* Uploading PDFs
* File URLs
* Secure file access

We can later connect something like S3/Cloudinary if needed.

---

# 13. Image Optimization

Next.js has:

```tsx
<Image />
```

Learn:

* `next/image`
* Automatic optimization
* Width/height
* Responsive images
* Remote images
* Priority images
* Image loading behavior

---

# 14. Metadata & SEO

Learn:

```ts
export const metadata = {
  title: "...",
  description: "...",
};
```

and:

* Dynamic metadata
* `generateMetadata`
* Open Graph
* Twitter cards
* Favicon
* Robots
* Sitemap

For a CRM this isn't the biggest priority, but it's important Next.js knowledge.

---

# 15. API Integration / External Services

Since you're already a Node/Laravel backend developer, this will be familiar.

Learn:

```text
Next.js
   ↓
External API
   ↓
Response
   ↓
Server Component
```

We'll cover:

* `fetch`
* Axios
* External APIs
* API authentication
* Environment variables
* Error handling
* Webhooks

This will also prepare you for your future WhatsApp/AI CRM projects.

---

# 16. Environment Variables & Configuration

Learn properly:

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
API_KEY=
```

vs:

```env
NEXT_PUBLIC_API_URL=
```

Understand:

```text
Server-only secrets
        vs
Public browser variables
```

This is particularly important for security.

---

# 17. Security 🔐

Given your interest in cybersecurity, I want to spend some time here.

Learn:

* Authentication
* Authorization
* CSRF considerations
* XSS
* SQL/ORM injection
* Input validation
* File upload security
* Rate limiting
* Secure cookies
* Environment secrets
* Session security
* API security
* Server Action security
* Preventing privilege escalation

Your CRM will be a good security playground.

---

# 18. Performance

Learn:

* Server Components
* Client Components
* Code splitting
* Lazy loading
* Dynamic imports
* `Suspense`
* Streaming
* Image optimization
* Database query optimization
* Caching
* Prefetching
* Bundle size

We'll actually measure some of these rather than just reading about them.

---

# 19. Suspense & Streaming ⭐⭐

This is one of the more interesting Next.js features.

Instead of:

```text
Page
 ↓
Wait for everything
 ↓
Show everything
```

we can do:

```text
Page
 ├── Header       → immediately
 ├── Stats        → loading
 ├── Customers    → loading
 └── Activity     → loading
```

Then each section appears as its data becomes available.

We'll eventually use:

```tsx
<Suspense fallback={<Loading />}>
   <CustomerStats />
</Suspense>
```

---

# 20. Testing

We'll eventually cover:

### Unit tests

```text
Vitest
```

### Component tests

```text
React Testing Library
```

### End-to-end tests

```text
Playwright
```

For example:

```text
Login
 ↓
Dashboard
 ↓
Customers
 ↓
Create customer
 ↓
Logout
```

---

# 21. Deployment 🚀

Since you've already deployed Laravel/Node applications, this will be particularly useful.

We'll learn:

* Production build
* `npm run build`
* `npm start`
* Environment variables
* PostgreSQL production database
* Prisma migrations
* Static vs dynamic pages
* Vercel deployment
* VPS deployment
* Nginx
* PM2
* Reverse proxy
* Production logging

And compare:

```text
Laravel + Nginx + PHP-FPM
```

with:

```text
Next.js + Node + Nginx
```

---

# 22. Production Architecture ⭐⭐⭐

Finally, we'll put everything together.

Your CRM architecture should eventually look roughly like:

```text
                    Browser
                       │
                       ▼
                Next.js App Router
                       │
          ┌────────────┴────────────┐
          │                         │
     Server Components        Client Components
          │                         │
          │                    Interactive UI
          │
     Server Actions
          │
          ▼
    Authorization
          │
          ▼
      Services
          │
          ▼
       Prisma
          │
          ▼
     PostgreSQL
```

With:

```text
Better Auth
     │
     ├── Sessions
     ├── Users
     └── Authentication

RBAC
     │
     ├── Roles
     ├── Permissions
     └── RolePermissions
```

---

# 🎯 What I Recommend We Do Next

Rather than learning these in a random order, I'd use your CRM as the curriculum:

| Stage | Topic                             | Status |
| ----- | --------------------------------- | ------ |
| 1     | App Router                        | ✅      |
| 2     | Layouts & navigation              | ✅      |
| 3     | Server/Client Components          | ✅      |
| 4     | CRUD                              | ✅      |
| 5     | Server Actions                    | ✅      |
| 6     | Validation + Zod                  | ✅      |
| 7     | Search + pagination               | ✅      |
| 8     | Loading/error/not-found           | ✅      |
| 9     | Authentication                    | ✅      |
| 10    | RBAC                              | 🔄     |
| 11    | Better authorization architecture | 🔄     |
| 12    | Forms & pending states            | ⏭️     |
| 13    | Data fetching & caching           | ⏭️     |
| 14    | Route Handlers/API                | ⏭️     |
| 15    | Middleware/proxy                  | ⏭️     |
| 16    | Advanced routing                  | ⏭️     |
| 17    | Advanced Prisma                   | ⏭️     |
| 18    | File uploads                      | ⏭️     |
| 19    | Suspense/streaming                | ⏭️     |
| 20    | Performance                       | ⏭️     |
| 21    | Security                          | ⏭️     |
| 22    | Testing                           | ⏭️     |
| 23    | Deployment                        | ⏭️     |
| 24    | Production architecture           | ⏭️     |
