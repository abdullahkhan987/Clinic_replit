# Overview

This is a React-based website for Ukaash Skin Clinic, a dermatology and aesthetic treatment center. The application features a modern single-page design with sections for services, gallery, testimonials, and contact forms. It's built as a full-stack application with a React frontend and Express backend, utilizing PostgreSQL for data persistence and modern UI components from shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 using TypeScript and modern tooling:
- **Vite** as the build tool and development server for fast hot module replacement
- **React Router** via Wouter for lightweight client-side routing
- **TanStack Query** for server state management and API communication
- **React Hook Form** with Zod validation for form handling
- **Framer Motion** for animations and smooth transitions
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for styling with custom CSS variables and design tokens

The application follows a component-based architecture with reusable UI components organized in a `components/ui` directory. The main page sections (Hero, About, Services, Gallery, Testimonials, Contact) are modular components that can be easily maintained and modified.

## Backend Architecture
The backend uses Express.js with TypeScript:
- **Express.js** server with middleware for JSON parsing and request logging
- **RESTful API** design with routes for contact form submissions
- **In-memory storage** with interface abstraction allowing future database integration
- **Zod schemas** for request validation shared between frontend and backend
- **Error handling** middleware for consistent API responses

The storage layer uses an interface pattern (`IStorage`) with a memory implementation (`MemStorage`) that can be easily replaced with a database implementation.

## Database Design
The application is configured for PostgreSQL with Drizzle ORM:
- **Users table** with id, username, and password fields
- **Contact submissions table** for storing form submissions with fields for personal information, service interests, and messages
- **UUID primary keys** with PostgreSQL's `gen_random_uuid()` function
- **Timestamps** for tracking creation dates

Database migrations are managed through Drizzle Kit with configuration pointing to a PostgreSQL database via environment variables.

## Styling and UI System
The design system uses a sophisticated approach:
- **CSS custom properties** for consistent theming and design tokens
- **Tailwind CSS** with custom configuration for the clinic's brand colors
- **Responsive design** with mobile-first approach
- **Animation system** using Framer Motion with predefined variants for consistent motion design
- **Component variants** using class-variance-authority for consistent styling patterns

## Form Handling and Validation
Contact forms use a robust validation system:
- **React Hook Form** for form state management
- **Zod schemas** shared between client and server for consistent validation
- **Type-safe** form handling with TypeScript integration
- **Error handling** with user-friendly error messages and toast notifications

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL driver optimized for serverless environments
- **drizzle-orm**: TypeScript ORM for database operations with type safety
- **express**: Web framework for the Node.js backend API

## Frontend UI and Interaction
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives for components
- **@tanstack/react-query**: Data fetching and server state management
- **framer-motion**: Animation library for smooth UI transitions
- **react-hook-form**: Form state management with performance optimization
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries

## Development and Build Tools
- **vite**: Fast build tool and development server
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Static type checking
- **zod**: Runtime type validation and schema definition

## Validation and Data Handling
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation
- **date-fns**: Date manipulation utilities
- **nanoid**: Unique ID generation

The application is designed to be scalable and maintainable, with clear separation of concerns between the frontend presentation layer, backend API layer, and data persistence layer.