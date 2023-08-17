import React, { Component } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StockContainer from "./components/StockContainer";
import PortfolioContainer from "./components/PortfolioContainer";
import "./index.css";
const stocks = require("./db.json");
export default function App() {
  return (
    <main>
      <Header />
      <div className="hh">
        <SearchBar />
      </div>
      <div className="row">
        <div className="col-6">
          <StockContainer stocks={stocks.stocks} />
        </div>
        <div className="col-6">
          <PortfolioContainer stocks={stocks.stocks} />
        </div>
      </div>
    </main>
  );
}
