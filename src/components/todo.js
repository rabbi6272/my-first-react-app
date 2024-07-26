import { useState } from "react";
import Button from "@mui/material/Button";
import "./todo.css";

export default function Todo() {
  const [items, setItems] = useState([]);

  function handleSetItems(item) {
    setItems([...items, item]);
  }

  function handleDeleteItems(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleUpdateItems(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <div className="wrapper p-4 bg-slate-700 rounded-lg flex flex-col gap-4 h-3/5 md:h-2/4 lg:w-2/4 md:w-3/5">
      <SetItems handleSetItems={handleSetItems} />
      <ShowItems
        items={items}
        handleDeleteItems={handleDeleteItems}
        handleUpdateItems={handleUpdateItems}
      />
    </div>
  );
}

function SetItems({ handleSetItems }) {
  const [item, setItem] = useState("");

  function handleClick() {
    let newItem = {
      id: Date.now(),
      name: item,
      completed: false,
    };

    handleSetItems(newItem);

    setItem("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className="flex gap-4 p-4 "
    >
      <input
        className="text-center rounded-lg text-white flex-1 outline-none
        bg-slate-500"
        type="text"
        placeholder="Enter Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>
        Add
      </Button>
    </form>
  );
}

function ShowItems({ items, handleDeleteItems, handleUpdateItems }) {
  return (
    <div className="p-4 text-white overflow-y-auto">
      <ul className="flex flex-col gap-1 list-none overflow-y-auto">
        {items.map((item) => (
          <li
            id="item"
            className={item.completed ? "line-through" : ""}
            key={item.id}
          >
            <input
              className="mx-4 size-3.5"
              type="checkbox"
              checked={item.completed}
              onChange={() => handleUpdateItems(item.id)}
            />
            {item.name}
            <button
              className="float-right"
              onClick={() => handleDeleteItems(item.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
