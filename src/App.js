import './App.css';
import Header from './Header'
import Category from "./components/Category";
import Catalog from "./components/Catalog";


function App() {
    return (
        <div className="app">
            <Header/>
            <div className='content'>
                <Category />
                <Catalog />
            </div>
        </div>
    );
}

export default App;
