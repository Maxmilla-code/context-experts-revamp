# Context Expert Agencies Limited - Website

This is the official website for Context Expert Agencies Limited, a professional digital marketing company based in Nairobi, Kenya. The website is built with Next.js and Tailwind CSS, and it showcases the company's services, portfolio, and contact information.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/context-experts.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env.local` file in the root of the project and add the following environment variables. You can copy the `.env.example` file to get started.
    ```env
    # Add any necessary environment variables here
    # For example, if you were using a different email provider
    # EMAIL_HOST=...
    # EMAIL_PORT=...
    # EMAIL_USER=...
    # EMAIL_PASS=...
    ```
4.  Run the development server
    ```sh
    npm run dev
    ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

The project follows a standard Next.js `app` directory structure. Here's a breakdown of the key directories:

-   `app/`: Contains all the application's routes, pages, and API endpoints.
    -   `app/(marketing)/`: Contains the public-facing pages of the website (e.g., home, about, contact).
    -   `app/api/`: Contains the API routes for the application.
        -   `app/api/contact/`: Handles the contact form submission.
-   `components/`: Contains all the React components used in the application.
    -   `components/cards/`: Reusable card components.
    -   `components/forms/`: Form components.
    -   `components/layout/`: Layout components (e.g., header, footer).
    -   `components/sections/`: Larger sections of the pages (e.g., hero, testimonials).
    -   `components/shared/`: Shared components used throughout the application.
    -   `components/ui/`: Basic UI components (e.g., buttons, inputs).
-   `config/`: Contains the site configuration file (`site.ts`).
-   `data/`: Contains any static data used in the application.
-   `hooks/`: Contains custom React hooks.
-   `lib/`: Contains helper functions, utilities, and validations.
-   `public/`: Contains static assets like images and icons.
-   `styles/`: Contains global styles.
-   `types/`: Contains TypeScript type definitions.

## Key Technologies

-   [Next.js](https://nextjs.org/): A React framework for building server-side rendered and statically generated web applications.
-   [React](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
-   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
-   [Framer Motion](https://www.framer.com/motion/): A library for creating animations in React.
-   [Zod](https://zod.dev/): A TypeScript-first schema declaration and validation library.
-   [Nodemailer](https://nodemailer.com/): A module for Node.js applications to allow easy as cake email sending.

## API Endpoints

### `/api/contact`

-   **Method:** `POST`
-   **Description:** Handles the contact form submission. It parses the request body, validates it using Zod, and then sends an email using Nodemailer.
-   **Request Body:**
    ```json
    {
      "name": "string",
      "email": "string",
      "message": "string"
    }
    ```
-   **Responses:**
    -   `200 OK`: If the email is sent successfully.
        ```json
        {
          "ok": true
        }
        ```
    -   `400 Bad Request`: If the request body is invalid or if there's an error sending the email.
        ```json
        {
          "ok": false,
          "error": "Error message"
        }
        ```

## Deployment

The application is ready for deployment on any platform that supports Next.js, such as Vercel or Netlify. To build the application for production, run the following command:

```sh
npm run build
```

Then, you can start the production server with:

```sh
npm run start
```
