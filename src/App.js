import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { lazy } from "react";
const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

// import { useState } from "react";
// import logo from "../assets/images/logo.png";

// function Header() {
//   const [theamMode, settheamMode] = useState("dark");
//   const localtheamMode = localStorage.getItem("theamMode");
//   if (localtheamMode) {
//     if (localtheamMode == "light" && theamMode !== "light") {
//       settheamMode("light");
//     } else if (localtheamMode == "dark" && theamMode !== "dark") {
//       settheamMode("dark");
//     }
//   }
//   return (
//     <header className="p-3 sticky-top">
//       <div className="container d-flex justify-content-between align-items-center">
//         <img src={logo} alt="" srcset="" />
//         <nav className="d-flex text-white text18 text500">
//           <div className="mx-3">Home</div>
//           <div className="mx-3">About</div>
//           <div className="mx-3">Pricing</div>
//           <div className="mx-3">Dashboard</div>
//         </nav>
//         <button className="btn text-white background-gradient text18 px-5">
//           Get started
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header;


export default App;
