# pc-builder-angular-app

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

This is the **frontend** of the **PC Builder E-Commerce Platform**, built using **Angular**. The application allows users to build, validate, and purchase custom PCs with ease. It includes features like component browsing, real-time compatibility checks, a shopping cart, and order tracking.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Development Setup](#development-setup)

---

## Features

### User-Facing Features
- **User Registration & Profile**: Sign up, log in, and manage profile details.
- **Component Browsing**: Browse PC components by category, filter by price, compatibility, and brand.
- **PC Builder Tool**: Build custom PCs with real-time compatibility checks and cost calculations.
- **Shopping Cart & Checkout**: Save builds, compare them, and proceed to checkout with multiple payment options.
- **Order Tracking**: Track order status and shipment details.

---

## Installation

To set up the Angular project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nourabuelenin/pc-builder-angular-app.git
   cd pc-builder-angular-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `src/environments/environment.ts` file (if it doesn't exist) and add the necessary environment variables:
     ```typescript
     export const environment = {
       production: false,
       apiUrl: 'https://your-api-url.com', // Replace with your backend API URL
       stripePublicKey: 'your-stripe-public-key', // Replace with your Stripe public key
     };
     ```

---

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components (e.g., header, footer, PC builder tool)
│   ├── pages/               # Page components (e.g., home, profile, checkout)
│   ├── services/            # Angular services for API calls (e.g., auth, component, order)
│   ├── models/              # Data models (e.g., user, component, order)
│   ├── guards/              # Route guards (e.g., auth guard)
│   ├── app-routing.module.ts # Routing configuration
│   ├── app.component.ts     # Root component
│   ├── app.module.ts        # Root module
├── assets/                  # Static assets (e.g., images, fonts)
├── environments/            # Environment configurations
```

---

## Development Setup

1. **Run the development server**:
   ```bash
   ng serve
   ```
   - The application will be available at `http://localhost:4200`.

2. **Linting**:
   - Run the linter to ensure code quality:
     ```bash
     ng lint
     ```

3. **Formatting**:
   - Use Prettier for consistent code formatting:
     ```bash
     npm run format
     ```
