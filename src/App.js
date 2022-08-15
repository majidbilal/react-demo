import "./App.css";
//import { Greet } from './components/Greet'
//import { Posts } from './components/Posts';
//import {PostForm} from './components/PostForm'
import DATA from "./components/DATA.json";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  const filteredNames = DATA.filter((item) => {
    return (
      item.first_name.toLowerCase().includes(query.toLowerCase()) ||
      item.last_name.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className="App">
      <input type="text" value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  );
}

export default App;
