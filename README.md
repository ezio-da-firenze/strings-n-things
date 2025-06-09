# 🎵 Music Store - E-commerce Application

A modern, e-commerce web application for musical instruments built with React, Firebase, and styled-components. Browse and purchase guitars, pianos, drums and more!

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse musical instruments across 8 categories
- **Category Navigation**: Dedicated pages for each instrument category
- **Shopping Cart**: Add, remove, and manage items with real-time updates
- **Checkout System**: Complete purchase flow with item management
- **Responsive Design**: Optimized for desktop and mobile devices

### 🔐 User Authentication
- **Email/Password Authentication**: Secure user registration and login
- **Google OAuth Integration**: Quick sign-in with Google account
- **User Session Management**: Persistent login state across sessions
- **Secure Sign-out**: Clean session termination

### 🎨 User Interface
- **Modern Design**: Clean, professional interface with hover effects
- **Interactive Elements**: Smooth transitions and animations
- **Cart Dropdown**: Quick access to cart contents
- **Product Cards**: Attractive product displays with images and pricing
- **Form Validation**: User-friendly input validation and error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing and navigation
- **Styled Components** - CSS-in-JS styling solution
- **SCSS** - Enhanced CSS with variables and mixins

### Backend & Database
- **Firebase Authentication** - User management and authentication
- **Cloud Firestore** - NoSQL database for product and user data
- **Firebase SDK** - Real-time data synchronization

### State Management
- **React Context API** - Global state management for:
  - User authentication state
  - Shopping cart management
  - Product categories

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button/          # Custom button component
│   ├── CartDropdown/    # Shopping cart dropdown
│   ├── CartIcon/        # Cart icon with item count
│   ├── CartItem/        # Individual cart item display
│   ├── CheckoutItem/    # Checkout page item component
│   ├── Directory/       # Homepage category directory
│   ├── DirectoryItem/   # Individual category tiles
│   ├── FormInput/       # Styled form input component
│   ├── Navigation/      # Main navigation bar
│   ├── ProductCard/     # Product display card
│   └── SignInForm/      # User authentication forms
├── routes/              # Page components
│   ├── Authentication/  # Login/register page
│   ├── Category/        # Individual category pages
│   ├── Checkout/        # Shopping cart checkout
│   ├── Home/           # Homepage with categories
│   └── Shop/           # Main shop with all products
├── Context/            # React Context providers
│   ├── Cart.context.jsx    # Shopping cart state
│   ├── Categories.context.jsx # Product categories
│   └── User.context.jsx    # User authentication
├── utils/              # Utility functions
│   └── firebase/       # Firebase configuration
└── assets/            # Static assets
```

## Live Link
https://strings-n-thinz.netlify.app/

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Firebase project with Authentication and Firestore enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/music-store.git
   cd music-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication (Email/Password and Google providers)
   - Create a Firestore database
   - Update `src/utils/firebase/firebase.utils.js` with your config:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     // ... other config
   };
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Product Categories

The store features 8 main categories of musical instruments:

- **🎸 Guitars** - Acoustic and electric guitars
- **🎹 Pianos** - Digital and acoustic pianos
- **🥁 Percussion** - Drum kits and percussion instruments  
- **🎸 Bass** - Bass guitars and accessories
- **🎵 Harmonica** - Various harmonica models
- **🎺 Brass** - Trumpets, saxophones, and brass instruments
- **🪈 Flutes** - Concert and student flutes
- **🎤 Microphones** - Recording and performance microphones

## 💡 Key Features Deep Dive

### Shopping Cart Management
- **Add to Cart**: One-click addition from product cards
- **Quantity Control**: Increment/decrement item quantities
- **Item Removal**: Remove individual items or clear entire cart
- **Real-time Updates**: Cart count and total price update automatically
- **Persistent State**: Cart contents maintained during session

### User Authentication Flow
- **Registration**: Create account with email/password
- **Login**: Sign in with existing credentials or Google
- **Session Management**: Automatic login state persistence
- **Protected Routes**: Checkout requires authentication
- **User Context**: Global user state across all components

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

```

## 🌟 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation for new features
- Test thoroughly before submitting

## 🙏 Acknowledgments

- **Firebase** - Backend infrastructure and authentication
- **React Team** - Amazing frontend framework
- **Styled Components** - Elegant styling solution
- **Music Industry** - Inspiration for product categories

## 📞 Support

For support, email dixitparthsarathi@gmail.com or create an issue on GitHub.

## 🔮 Future Enhancements

- [ ] Payment integration (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search and filtering
- [ ] Order history and tracking
- [ ] Admin dashboard for inventory management
- [ ] Email notifications
- [ ] Social media integration
- [ ] Multi-language support
- [ ] Dark mode theme

---

**Built with ❤️ for music lovers everywhere** 🎶
