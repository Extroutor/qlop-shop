import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";



function App() {
    const categoryList = [
        {
            id: 1,
            title: 'Новинки'
        },
        {
            id: 2,
            title: 'Одежда'
        },
        {
            id: 3,
            title: 'Обувь'
        },
        {
            id: 4,
            title: 'Аксессуары'
        },
        {
            id: 5,
            title: 'Косметика'
        },
    ]

    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <AppRouter />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
