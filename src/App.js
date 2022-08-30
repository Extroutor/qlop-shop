import './App.css';
import Header from './components/Header'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
