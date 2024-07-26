import { useState } from "react";

export default function Input() {
  const [state, setState] = useState("");
  const [datas, setData] = useState([]);

  function HandleClick() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=bbe7d4cf002908df2b1cf82e3d4a947e&units=metric&q=${state}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData([data, ...datas]);
      })
      .catch((err) => {
        console.log(err);
      });

    setState("");
  }

  return (
    <form
      className="p-4 bg-slate-600 rounded-lg w-3/5 h-4/5 overflow-y-auto"
      onSubmit={(e) => {
        e.preventDefault();
        HandleClick();
      }}
    >
      <input
        className="rounded-full p-1 m-1 outline-none text-black text-center"
        type="text"
        placeholder="Input here....."
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button
        className="px-2 py-1 rounded-full bg-blue-400 hover:bg-blue-500"
        onClick={HandleClick}
      >
        ADD
      </button>
      <br />
      <div className="grid grid-cols-4 grid-rows-3 gap-2 overflow-y-auto">
        {datas.map(
          (item) => item.cod === 200 && <Result {...item} key={item.id} />
        )}
      </div>
    </form>
  );
}

function Result(props) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center bg-slate-400 p-4 rounded-lg ">
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <h1 className="text-xl font-bold">{props.main.temp}°C</h1>
        <h1 className="text-xl font-bold">{props.weather[0].main}</h1>
      </div>
    </div>
  );
}
