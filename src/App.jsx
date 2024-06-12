import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import Card from './Components/Card.jsx';
function App() {
  // const [counter, setCounter] = useState(0);
  const productCards = [
    {
      name: "Wireless Bluetooth Headphones",
      price: 59.99,
      description: "High-quality wireless headphones with noise-cancellation and long battery life.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315"
    },
    {
      name: "Smart Fitness Watch",
      price: 199.99,
      description: "Advanced fitness watch with heart rate monitor, GPS, and sleep tracking.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315"
    },
    {
      name: "Portable Power Bank",
      price: 29.99,
      description: "Compact 10000mAh power bank with fast charging support and multiple ports.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315"
    },
    {
      name: "4K Ultra HD Smart TV",
      price: 499.99,
      description: "50-inch 4K UHD Smart TV with HDR and built-in streaming apps.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315"
    },
    {
      name: "Wireless Gaming Mouse",
      price: 49.99,
      description: "Ergonomic wireless gaming mouse with customizable buttons and RGB lighting.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315"
    },
    {
      name: "Electric Toothbrush",
      price: 89.99,
      description: "Rechargeable electric toothbrush with multiple brushing modes and a 2-minute timer.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315"
    },
    {
      name: "Instant Pot Pressure Cooker",
      price: 99.99,
      description: "7-in-1 electric pressure cooker with multiple cooking functions and safety features.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315"
    },
    {
      name: "Noise-Cancelling Earbuds",
      price: 79.99,
      description: "True wireless earbuds with active noise cancellation and touch controls.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315"
    },
    {
      name: "Smart Home Security Camera",
      price: 129.99,
      description: "1080p HD smart security camera with night vision, motion detection, and cloud storage.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315"
    },
    {
      name: "Electric Scooter",
      price: 299.99,
      description: "Foldable electric scooter with a top speed of 15 mph and a range of up to 15 miles.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315"
    }
  ];

  return (
    <div className="flex  items-center justify-center flex-col">
      <Navbar />
      <div className='flex justify-center items-center gap-5 flex-wrap'>
        {
          productCards.map((product) => {
            return (
              <Card product={product} />
            )

          })
        }
      </div>


      {/* <header className="App-header">
        <div className="flex items-center gap-3 ">
          <button className="bg-green-800 bor h-4 w-4 rounded-md flex justify-center items-center text-white" onClick={() => setCounter(counter + 1)}>+</button>
          <button className="bg-red-800 bor h-4 w-4 rounded-md flex justify-center items-center text-white" onClick={() => setCounter(counter - 1)}>-</button>
        </div>
        <span className="flex items-center justify-center" >{counter}</span>
      </header> */}
    </div>
  );
}

export default App;
