import React from "react";
import Reactdom from "react-dom";

Reactdom.render(
  <div>
    <h1>My Fav Food</h1>
    <ul>
      <li>Piizza</li>
      <li>Coffee</li>
      <li>Ice cream</li>
    </ul>
  </div>,
  document.getElementById("root")
);
