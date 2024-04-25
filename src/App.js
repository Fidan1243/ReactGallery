import "./Styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [token,setToken] = useState("");
  return (
    <BrowserRouter>
            <Header></Header>

      <Routes>
        <Route path="/signin" element={<Login setToken={setToken} />} />
        <Route path="/" element={<Home  token={token} setToken={setToken} />}></Route>
        <Route   path="/signup" element={<Register setToken={setToken} />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
