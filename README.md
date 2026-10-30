
# Paradise Nursery Shopping Application

Paradise Nursery is a React-based online houseplant shopping application that allows users to explore different categories of indoor plants, add products to their shopping cart, manage quantities, and view their total purchase amount.

## Features

- Attractive landing page with a Get Started button.
- About Us page describing Paradise Nursery.
- Product listing with 18 unique houseplants.
- Three plant categories:
  - Air Purifying Plants
  - Indoor Decorative Plants
  - Succulents and Cacti
- Add plants to the shopping cart.
- Prevent duplicate additions using button state.
- Dynamic cart item count.
- Increase and decrease product quantities.
- Remove products from the cart.
- Automatic subtotal and total amount calculation.
- Continue Shopping navigation.
- Responsive user interface.

## Technologies Used

- React.js
- Vite
- JavaScript
- CSS3
- Redux Toolkit
- React Redux
- React Router DOM
- Lucide React Icons

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate into the project:

   ```bash
   cd paradise-nursery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Project Structure

```text
paradise-nursery/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductList.css
│   │   ├── CartItem.jsx
│   │   └── CartItem.css
│   ├── redux/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── README.md
├── package.json
└── vite.config.js
```

## Application Pages

- Home: Introduction to Paradise Nursery.
- About Us: Information about the nursery and its mission.
- Plants: Browse and add houseplants to the cart.
- Cart: Manage selected products and view order totals.

## Future Improvements

- User authentication.
- Online payment integration.
- Product search and filtering.
- Order tracking.
- Backend integration and database storage.

## Author

Raj Kale
