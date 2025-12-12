
# 🎮 YOSGAMES - Ultimate Gaming Marketplace

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub last commit](https://img.shields.io/github/last-commit/YoussefFakhi/YosGames-game-store?color=blue&logo=github)](https://github.com/YoussefFakhi/YosGames-game-store/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/YoussefFakhi/YosGames-game-store?logo=github)](https://github.com/YoussefFakhi/YosGames-game-store/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/YoussefFakhi/YosGames-game-store?logo=github)](https://github.com/YoussefFakhi/YosGames-game-store/pulls)
[![GitHub stars](https://img.shields.io/github/stars/YoussefFakhi/YosGames-game-store?style=social)](https://github.com/YoussefFakhi/YosGames-game-store/stargazers)

A modern, full-stack e-commerce platform for digital games, built with React and Laravel. Experience seamless game browsing, secure checkout, and personalized recommendations.


## ✨ Features

### 🛍️ Shopping Experience
- **Game Catalog** - Browse games by category, price, and popularity
- **Advanced Search** - Find your next favorite game with powerful filters
- **Game Details** - Comprehensive game pages with media gallery and system requirements
- **Wishlist** - Save games for later

### 🔒 User Features
- **Secure Authentication** - JWT-based authentication system
- **Order History** - Track your purchases and downloads
- **User Profile** - Manage your account details and preferences
- **Review System** - Rate and review purchased games

### 🛒 E-commerce
- **Shopping Cart** - Add/remove items before checkout
- **Secure Payments** - Integrated payment gateways
- **Order Tracking** - Real-time order status updates
- **Digital Delivery** - Instant game key delivery

## 🚀 Tech Stack

### Frontend
- **React 18** - Frontend library
- **React Router** - Navigation and routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **React Context API** - State management

### Backend
- **Laravel 10** - PHP framework
- **MySQL** - Database
- **Sanctum** - API authentication
- **Eloquent ORM** - Database operations

### DevOps
- **Vite** - Build tool
- **Composer** - PHP dependency manager
- **npm** - JavaScript package manager

## 📦 Installation

### Prerequisites
- PHP 8.1+
- Node.js 16+
- Composer
- MySQL 8.0+
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/YoussefFakhi/YosGames-game-store.git
   cd YosGames-game-store
   ```

2. **Backend Setup**
   ```bash
   cd laravel
   cp .env.example .env
   composer install
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

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - Admin Panel: http://localhost:8000/admin

## 🧪 Testing

### Frontend Tests
```bash
cd gaming
npm test
```

### Backend Tests
```bash
cd laravel
php artisan test
```

## 🛠️ Project Structure

```
YosGames-game-store/
├── gaming/                 # Frontend (React)
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # Reusable components
│   │   ├── context/       # Context providers
│   │   ├── pages/         # Page components
│   │   └── App.js         # Main component
│   └── package.json       # Dependencies
│
└── laravel/               # Backend (Laravel)
    ├── app/               # Application code
    ├── config/            # Configuration files
    ├── database/          # Migrations and seeders
    ├── routes/            # API routes
    └── composer.json      # PHP dependencies
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Youssef Fakhi** - [@YoussefFakhi](https://github.com/YoussefFakhi)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Laravel](https://laravel.com/)
- [Shields.io](https://shields.io/) for badges
- [Font Awesome](https://fontawesome.com/) for icons

---

<div align="center">
  Made with ❤️ by YOSGAMES Team
</div>

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

## Project Status

[![GitHub issues](https://img.shields.io/github/issues/YoussefFakhi/YosGames-game-store)](https://github.com/YoussefFakhi/YosGames-game-store/issues)
[![GitHub forks](https://img.shields.io/github/forks/YoussefFakhi/YosGames-game-store)](https://github.com/YoussefFakhi/YosGames-game-store/network)
[![GitHub stars](https://img.shields.io/github/stars/YoussefFakhi/YosGames-game-store)](https://github.com/YoussefFakhi/YosGames-game-store/stargazers)

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

[![GitHub license](https://img.shields.io/github/license/YoussefFakhi/YosGames-game-store)](https://github.com/YoussefFakhi/YosGames-game-store/blob/main/LICENSE)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
