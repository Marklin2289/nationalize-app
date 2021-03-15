import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import CharacterGrid from "./components/CharacterGrid";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [items, setItems] = useState([]); //empty array first item
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems(); //remember to call it
  }, [query]);
  return (
    <div className="Container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
