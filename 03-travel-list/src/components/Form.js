// In React, to control the text value that the user enters,we use the concept of controlled components. Instead of directly accessingthe DOM to get the input value, we manage it via React state, ensuring the input field and state stay in sync.
import { useState } from "react";

export default function Form({ onAddItems }) {
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
