// What i leraned here
// Learned about creating and resuing component
// Putting JS logic inside the component with JSX
// Using css in various ways to style the componenet via extrnal, internal and inline.
// Passing and reciving props, we can pass anythingh in props

// React component is made up of data(props+state), logic, apperance.
// We learned how to render a list in this too

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// App
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  const style = { color: "red" };
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// Menu Component
function Menu() {
  const pizza = pizzaData;
  const numPizzas = pizza.length;
  return (
    <main className="menu">
      <h2>Menu</h2>

      {/*1. conditonal rendering with && */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/*2. conditonal rendering with ternary operator */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on menu. Please come back later</p>
      )}
    </main>
  );
}

// Pizza Types Component

// we use destructring instead of passing using props
// function Pizza(props) {
function Pizza({ pizzaObj }) {
  /*3. conditonal rendering with multiple return */
  // if (pizzaObj.soldOut) return null;

  return (
    /*4. conditonal rendering with css classes */
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* 5. conditonal rendering with text */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

// Footer Component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <>
      <footer className="footer">
        {/* conditonal rendering with && */}
        {isOpen && <Order closeHour={closeHour} />}
      </footer>
    </>
  );
}

// Extracting JSX into new component
// if component become too big it can be divided into sub component
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
