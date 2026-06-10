

### Technical Documentation

- [Installing](#installing)
- [Build](#build)
- [Branch](#branch)

### Installing

to be able to run this project, you must [install nodejs](https://nodejs.org/en/).

check installation nodejs :

1. open terminal
2. run `node --version` to check your nodejs version, **recomended version `v20.19.5`**.

Running Apps :
1. open directory project on terminal.
2. In the project directory, you can run `npm install` to install dependencies.

```bash
$ npm install
```

4. then run `npm run dev` to run app in development mode.

```bash
$ npm run dev
```
# Project Structure

```text
.
├── app/                    # Application entry point and route groups
│   ├── (auth)/             # Authentication routes
│   ├── (dashboard)/        # Dashboard routes
│   └── api/                # API route handlers
│
├── core/                   # Core application modules and services
│   ├── config/             # Application configuration
│   ├── http/               # HTTP clients, interceptors, and API setup
│   └── services/           # Global services
         └── public/        # Public API
│        └── app/           # API With token
├── features/               # Feature-based modules
│   ├── auth/
│   │   ├── login/
│   │   │   ├── hook/       # Custom hooks and state management
│   │   │   └── validation/ # Form validation schemas and logic
│   │   └── ...
│   │
│   └── dashboard/
│       └── dashboard/
│           ├── components/   # Feature-specific components
│           ├── hook/         # Custom hooks and business logic
│           ├── validation/   # Validation schemas and rules
│           └── presentation/ # UI presentation layer
│
├── shared/                 # Shared resources used across features
│   ├── components/         # Reusable UI components
│   ├── constants/          # Application constants
│   ├── context/            # Shared contexts/providers
│   ├── guards/             # Route guards and authorization logic
│   └── helpers/            # Utility and helper functions
│
└── public/
    └── assets/            # Static assets (images, icons, fonts, etc.)
```

## Folder Responsibilities

### app

Contains application-level routing, layouts, and route groups such as authentication and dashboard modules.

### core

Houses core functionality shared throughout the application, including configuration, HTTP setup, and global services.

### features

Organized by business domain or feature. Each feature contains its own components, hooks, validations, presentation logic, and related files to maintain modularity and scalability.

### shared

Contains reusable resources that can be used by multiple features, including UI components, utilities, constants, guards, and shared contexts.

### public

Stores static assets that are publicly accessible, such as images, fonts, and icons.

------------------------------------------------------------------------------------------------------

## State Management

This project uses Redux Toolkit Query (RTK Query) as the primary solution for API communication.

### Why RTK Query?

RTK Query provides a modern and efficient approach to managing remote data by reducing boilerplate and simplifying API integration.

1. Responses are cached automatically, reducing unnecessary network requests and improving application performance.
2. Built-in Loading and Error States Provides standardized loading, success, and error states without requiring additional reducers or actions.
3. Reduced Boilerplate Eliminates the need to manually create actions, reducers, thunks, and selectors for API requests.
4. TypeScript Support Offers excellent TypeScript integration for strongly typed API requests and responses.
5. Scalability Centralizes API definitions, making it easier to maintain and scale as the application grows.


Security Strategy
Currently, authentication tokens are stored in localStorage as a simpler approach for applications. These reasons include:

1. Simpler implementation
2 Easier access

A better approach is to store them in an http-only cookie or use the refresh token technique. Access tokens are stored in an HTTP-only cookie to obtain a new access token without re-logging in.
