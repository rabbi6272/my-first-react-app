import "./App.css";
import Todo from "./components/todo";

export default function App() {
  return (
    <div className="App flex justify-center items-center h-screen bg-slate-800 text-black">
      <Todo />
    </div>
  );
}
