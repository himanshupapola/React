import "./index.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((quesiton, i) => (
        <Question
          quesiton={quesiton}
          num={i}
          key={quesiton.title}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        />
      ))}
    </div>
  );
}

function Question({ quesiton, num, currOpen, onOpen }) {
  const isOpen = num === currOpen


  function handleClick() {
    onOpen(num)
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{num < 10 ? `0${num + 1}` : num + 1}.</p>
      <p className="title">{quesiton.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <p className="content-box">{quesiton.text}</p>}
    </div>
  );
}
