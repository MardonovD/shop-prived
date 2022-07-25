// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// import App from "./App";

// import { store } from "./app/store";
// import { Provider } from "react-redux";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// 0-yak
// 1-Du
// 2-Se
// 3-Chor
// 4-Pay
// 5-Ju
// 6-Shan

let k = 205;

switch (k % 7 && k > 0 && k <= 365) {
  case 0:
    return "yak";
  case 1:
    return "Du";
  case 2:
    return "sesh";
  case 3:
    return "CHor";
  case 4:
    return "Pay";
  case 5:
    return "Juma";
  case 6:
    return "Shanba";
  default:
    return "Bilmadim";
}
