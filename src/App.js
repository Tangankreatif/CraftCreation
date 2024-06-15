import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import React from "react";
import Login from "./components/Login"
import Daftar from "./components/Daftar"
import Penjual from "./pages/Penjual";
import Product from "./pages/Product";
import Formtambahpenjual from "./components/Formtambahpenjual";
import Formeditpenjual from "./components/Formeditpenjual";
import Formtambahproduct from "./components/Formtambahproduct";
import Formeditproduct from "./components/Formeditproduct";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} /> 
                    <Route path="/Daftar" element={<Daftar />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/penjual" element={<Penjual />} />
                    <Route path="/tambahpenjual" element={<Formtambahpenjual />} />
                    <Route path="/editpenjual" element={<Formeditpenjual />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/tambahproduct" element={<Formtambahproduct />} />
                    <Route path="/editproduct" element={<Formeditproduct />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;