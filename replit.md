# Overview

This is a full-stack portfolio website for Aditya Kumar Mishra, a Computer Science Engineering student. The application showcases his projects, achievements, skills, and provides contact functionality. It's built using a modern tech stack with React/TypeScript on the frontend and Express.js on the backend, designed as a single-page application with smooth scrolling navigation and interactive 3D elements.

# User Preferences

Preferred communication style: Simple, everyday language.
Tech Stack Display: Apple Watch home screen style circular layout with all project technologies.
Portfolio Enhancement: Professional presentation with comprehensive project impact metrics.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for build tooling
- **UI Components**: Comprehensive component library based on shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system including color variables and animations
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **3D Integration**: Spline integration planned for interactive 3D elements (currently using placeholder components)

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with centralized route handling
- **Development**: Hot module replacement with Vite middleware integration
- **Error Handling**: Centralized error middleware with status code management
- **Logging**: Custom request logging with duration tracking and response capture

## Data Storage
- **Primary Database**: PostgreSQL with Neon database service integration
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Development Storage**: In-memory storage implementation for development/testing
- **Database Schema**: 
  - Users table with authentication fields
  - Contact submissions table for form handling
  - UUID primary keys with PostgreSQL's gen_random_uuid()

## Contact Form System
- **Validation**: Zod schema validation for form data integrity
- **Submission Handling**: Async form processing with proper error handling
- **User Feedback**: Toast notifications for success/error states
- **Data Persistence**: Contact submissions stored in database with timestamps

## Development Workflow
- **Build System**: Vite for frontend with ESBuild for backend bundling
- **Type Safety**: Comprehensive TypeScript configuration with strict mode
- **Code Organization**: Monorepo structure with shared schema definitions
- **Path Aliases**: Configured path mapping for cleaner imports (@/, @shared/, etc.)

# External Dependencies

## Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library
- **express**: Backend web framework
- **drizzle-orm**: Type-safe database ORM
- **zod**: Runtime type validation

## UI Component Libraries  
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx & tailwind-merge**: Utility class management
- **lucide-react**: Icon library

## Database Integration
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-kit**: Database migration and introspection tools

## Development Tools
- **@replit/vite-plugin-***: Replit-specific development plugins
- **tsx**: TypeScript execution for development
- **tailwindcss**: Utility-first CSS framework
- **postcss & autoprefixer**: CSS processing pipeline

## Planned Integrations
- **@splinetool/react-spline**: 3D scene integration (dependencies included but implementation pending)
- **@types/three**: Three.js type definitions for 3D graphics support

The application uses environment variables for database configuration and is designed to work seamlessly in both development and production environments with proper error handling and type safety throughout the stack.