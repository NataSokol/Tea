import React from "react";
import { Link } from "react-router-dom";
import "../css/notFound.css"; 

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - ЧАЙ НЕ НАЙДЕН</h1>
      <h2>БРАТИШКА, ПОИЩИ ЧАЙ В ДРУГОМ МЕСТЕ</h2>
    </div>
  );
}

export default NotFound;
