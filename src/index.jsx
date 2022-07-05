import React from "react";
import ReactDOM from "react-dom";

// import Primary from "./Components/Primary";
// import BomDia from "./Components/BomDia";

import Multi from "./Components/Multiplos";

ReactDOM.render(
  <div>
    <Multi.BoaTarde name="Pedro" />
    <Multi.BoaNoite name="Gabriela" />
  </div>,
  document.getElementById("root")
);
