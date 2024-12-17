// V Important

// Now we are implmenting logic of state and props we learned.
// Here we fixed major problem with SPA, on sumbit of a form page reload will be triggred.
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  // step 2: Modifying state
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackaginList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </>
  );
}

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

// In React, to control the text value that the user enters,we use the concept of controlled components. Instead of directly accessingthe DOM to get the input value, we manage it via React state, ensuring the input field and state stay in sync.
function Form({ onAddItems }) {
  // step 1: Create a react state for the input element
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState(1);

  function hadleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = {
      description: description,
      quantity,
      packed: false,
      //trick to get unique id
      id: Date.now(),
    };

    // here we have now items to be packed in list but there's issue:
    //we have all our componnets like this this is component tree:

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={hadleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      {/* To set the value and allow user to change it we use value and onchange */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* To set the value and allow user to change it we use value and onchange */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackaginList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X item on your list, and you already packed X {`X%`}</em>
    </footer>
  );
}
