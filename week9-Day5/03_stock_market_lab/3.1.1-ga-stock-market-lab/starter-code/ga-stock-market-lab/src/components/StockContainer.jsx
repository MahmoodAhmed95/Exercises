import React from "react";
import StockCard from "./StockCard";

export default function StockContainer({ stocks }) {
  return (
    <div>
      <h2>Stocks</h2>
      <StockCard stocks={stocks} />
    </div>
  );
}
