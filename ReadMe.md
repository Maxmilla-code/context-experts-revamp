
# Context Experts - Digital Marketing Agency

This is a **Next.js marketing website**, a recreation for a fictional digital agency in Kenya called **"Context Experts"**.  
It is a statically generated site designed to showcase services, portfolio, and company information.  
This project was bootstrapped with `create-next-app`.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)

---

## Features
- **Services Showcase:** Detailed page listing all digital marketing services and packages.  
- **Portfolio Grid:** A gallery of client projects and successful outcomes.  
- **Contact Form:** Functional form that sends inquiries via email (using Nodemailer).  
- **Attachment Application Form:** Multi-field form for submitting internship/attachment applications, including file uploads.  
- **Responsive Design:** Mobile-first layout that adapts to all screen sizes.  
- **SEO Optimized:** Includes meta tags, Open Graph, and JSON-LD schema for better search engine visibility.

---

## Tech Stack
- **Framework:** Next.js (React)  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion  
- **Form Handling:** Standard React hooks with `FormData`  
- **Validation:** Zod for server-side API validation  
- **Email:** Nodemailer for sending emails from API routes  
- **Deployment:** Vercel but not yet deployed.

---

## Project Structure
The project uses the **Next.js App Router**.  
Key directories include `app/`, `config/`, and `components/`.

---

## Getting Started

### Prerequisites
- Node.js (v18.x or later)  
- npm, yarn, or pnpm  

### Steps
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**  
   Copy the `.env.example` file to a new file named `.env.local` and add your SMTP credentials for the contact and attachment forms.
   ```bash
   cp .env.example .env.local
   ```
   **Note:**  
   For development, you can use a service like [Ethereal](https://ethereal.email/) to create a free fake SMTP server.  
   If SMTP variables are not set, the email content will be logged to the console instead of being sent.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Configuration
Most site-wide settings can be configured in the `config/` directory:

- **`config/site.ts`** – Update site name, description, URL, social links, and contact info.  
- **`config/navigation.ts`** – Add or remove navigation links for the header.  
- **`tailwind.config.ts`** – Customize color palette, fonts, and design tokens.

**Email configuration:**  
The contact form recipient email is hardcoded in:
- `app/api/contact/route.ts`  
- `app/api/attachment/route.ts`

Change `'maxmillanjahira@gmail.com'` to your desired recipient email.

---

## Deployment
The easiest way to deploy this application is via **Vercel**.

1. Push your code to a Git repository (GitHub, GitLab, etc.).  
2. Import the project into [Vercel](https://vercel.com/).  
3. Configure environment variables (SMTP credentials) in the Vercel project settings.  
4. Deploy!  

Vercel will automatically detect this as a Next.js project and handle the build process for you.

---

## Future Enhancements

The following features are planned for future updates:

- **AI Chatbot Integration:**  
  Incorporate a chatbot for Kenyan legal queries using Supabase and Anthropic Claude.
  - Set up a Supabase backend with PostgreSQL and vector extension.  
  - Create a RAG (Retrieval-Augmented Generation) pipeline.  
  - Build a chat interface with user authentication.  

- **Content Management System (CMS):**  
  Integrate a headless CMS (Strapi, Sanity, or Contentful) to manage portfolio, testimonials, and services.

- **Theme Toggle:**  
  Add a dark/light mode toggle with persistence using `localStorage`.

- **Advanced Form Validations:**  
  Implement client-side validation for instant feedback.

- **Blog:**  
  Add a blog section for digital marketing, SEO, and industry news.


