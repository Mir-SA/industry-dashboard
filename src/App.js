import "./App.css";
import React, { useState } from "react";
import BasicCard from "./Components/Card";
import Form from "./Components/Form";
import Table from "./Components/Table";

function App() {
  let [symbol, setSymbol] = useState(null);
  let [symbols, setSymbols] = useState([]);
  let [industry, setIndustry] = useState(null);

  function handleSubmit(e) {
    setSymbols(...symbols, symbol);
    console.log(symbols);
  }

  function symbolChange(e) {
    setSymbol(e.target.value);
  }

  function industryChange(e) {
    setIndustry(e.target.value);
  }

  return (
    <div className="App">
      {/* Left sidebar */}
      <aside className="cardLeft">
        <BasicCard header={"Card TL"} />
        <BasicCard header={"Card BL"} />
      </aside>

      <main>
        <Form
          submit={handleSubmit}
          symbols={symbolChange}
          industry={industryChange}
        />
        <Table />
      </main>

      {/* Right sidebar */}
      <aside className="cardRight">
        <BasicCard header={"Card TR"} />
        <BasicCard header={"Card MR"} />
        <BasicCard header={"Card BR"} />
      </aside>
    </div>
  );
}

export default App;
