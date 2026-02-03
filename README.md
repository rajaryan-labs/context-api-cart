# Context API Cart Demo

A small React app that demonstrates using the Context API to share cart state across components. Items can be added from the product list and the cart totals update automatically.

## Features

- Global cart state with `CartContext`
- Add items to cart from the `Item` component
- Live cart total calculation

## Tech Stack

- React (Create React App)
- Context API + Hooks

## Project Structure

- `src/context/CartContext.jsx` - Context, provider, and `useCart` hook
- `src/components/Item.jsx` - Product item with "Add to Cart"
- `src/components/Cart.jsx` - Cart list + total
- `src/App.js` - Renders the items and cart

## Getting Started

1. Install dependencies: `npm install`
2. Run the app: `npm start`

Open `http://localhost:3000` in your browser.

## Scripts

- `npm start` - Run the development server
- `npm test` - Run tests in watch mode
- `npm run build` - Build for production
