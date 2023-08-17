import React from "react";
export default function StockCard({ stocks }) {
  return (
    <>
      {stocks.map((stock) => (
        <div className="card">
          <div className="card-body">
            <div key={stock.id}>
              <h5 className="card-title">{stock.name}</h5>
              <p className="card-text">${stock.price}</p>
              {<button className="buyBtn">BUY</button>}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
