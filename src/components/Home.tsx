import React, { useState, useEffect } from "react";
import { getJoke, getJokeRandom } from "../service/search";
import Result, { propsResult } from "./Result";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export default function Home(props: HelloProps) {
  let [inputSearchPage, setInputSearchPage] = useState("");

  let [joke, setJoke] = useState({
    categories: [],
    id: 0,
    joke: "",
  });

  useEffect(() => {}, []);

  const handleAPI = (name: string) => {
    if (name) {
      getJoke(name, "").then((item: any) => {
        setJoke(item.value);
      });
    } else {
      getJokeRandom().then((item: any) => {
        setJoke(item.value);
      });
    }
  };

  return (
    <div data-test="home" className="home">
      <div>
        <input
          type="text"
          value={inputSearchPage}
          placeholder="Insert your name"
          onChange={(e: any) => {
            setInputSearchPage(e.target.value);
          }}
          onKeyDown={(e: any) => {
            if (e.keyCode == 13) {
              handleAPI(inputSearchPage);
            }
          }}
        />
      </div>
      <button
        onClick={() => {
          setInputSearchPage("");
          handleAPI("");
        }}
      >
        Randon
      </button>
      {joke.id != 0 && <Result {...joke} />}
    </div>
  );
}
