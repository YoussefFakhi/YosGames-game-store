# YOSGAMES-GAME-STORE

Unleash Gaming Power, Elevate Your Play Experience

![Last Commit](https://img.shields.io/badge/last%20commit-today-blue)
![JavaScript Percentage](https://img.shields.io/badge/javascript-52.8%25-yellow)
![Languages](https://img.shields.io/badge/languages-5-blue)

### Built with the tools and technologies:

![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Autoprefixer](https://img.shields.io/badge/Autoprefixer-DD3735?style=for-the-badge&logo=autoprefixer&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3735?style=for-the-badge&logo=postcss&logoColor=white)
![Composer](https://img.shields.io/badge/Composer-885630?style=for-the-badge&logo=composer&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![XML](https://img.shields.io/badge/XML-1070B6?style=for-the-badge&logo=xml&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Testing](#testing)
* [License](#license)

## Overview

YOSGAMES-GAME-STORE is a modern, full-stack e-commerce platform designed specifically for digital game distribution. This application provides a seamless shopping experience with a clean, responsive interface built with React and powered by a robust Laravel backend.

## Features

- **Secure Authentication & Protected Routes**
  - User registration and login
  - Role-based access control
  - JWT token authentication

- **E-commerce Capabilities**
  - Browse games by category
  - Shopping cart functionality
  - Secure checkout process
  - Order history and tracking

- **Rich UI Components & Routing**
  - Responsive design
  - Interactive product gallery
  - Smooth page transitions
  - Real-time search and filtering

- **Modular Architecture**
  - Clean separation of concerns
  - Reusable components
  - API-first approach
  - Scalable codebase

## Getting Started

### Prerequisites

- **Backend**
  - PHP 8.1 or higher
  - Composer (Dependency Manager for PHP)
  - MySQL 5.7+ or MariaDB 10.3+

- **Frontend**
  - Node.js 16.14+ and npm 8.5+
  - React 18+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yosgames-game-store.git
   cd yosgames-game-store
   ```

2. **Backend Setup**
   ```bash
   cd laravel
   composer install
   cp .env.example .env
   php artisan key:generate
   # Configure your .env file with database credentials
   php artisan migrate --seed
   php artisan serve
   ```

3. **Frontend Setup**
   ```bash
   cd ../gaming
   npm install
   npm start
   ```

The application will be available at `http://localhost:3000`

## Testing

### Frontend Tests
```bash
cd gaming
npm test
```

### Backend Tests
```bash
cd laravel
composer test
# or
vendor/bin/phpunit
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
