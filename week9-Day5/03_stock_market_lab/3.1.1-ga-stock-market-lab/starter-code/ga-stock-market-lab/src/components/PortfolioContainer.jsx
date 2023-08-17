import React from "react";
import StockCard from "./StockCard";

export default function PortfolioContainer({ stocks }) {
  return (
    <div>
      <h2>
        My Portfolio -{" "}
        {/* render the total value of the stocks in the portfolio here */}
      </h2>
      <StockCard stocks={stocks} />
      {StockCard}
    </div>
  );
}
