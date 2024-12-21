import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackaginList from "./PackaginList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

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

  function handleClearList() {
    const confirmed = window.confirm("Are u sure you want to delete?");
    if (confirmed) setItems([]);
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackaginList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}

// V Important

// Now we are implmenting logic of state and props we learned.
// Here we fixed major problem with SPA, on sumbit of a form page reload will be triggred.
