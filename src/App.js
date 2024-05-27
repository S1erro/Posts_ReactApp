import React, {useEffect, useState} from "react";
import "./styles/App.css"
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Componets/Navbar/Navbar";
import AppRouter from "./Componets/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
