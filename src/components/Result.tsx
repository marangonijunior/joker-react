import React from "react";

export interface propsResult {
  categories: any;
  id: number;
  joke: string;
}

function Result(item: propsResult) {
  return (
    <div className="resultMessage" data-test="joke-result">
      {item.joke}
    </div>
  );
}

export default Result;
