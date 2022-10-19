import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <AppRouter/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;