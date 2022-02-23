import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="container font-poppins mx-auto">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Navbar/>
        </div>
    );
}

export default App;
