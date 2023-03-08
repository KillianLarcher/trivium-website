import './App.css'
import {Route, Routes} from "react-router-dom";
import Main from "./components/layout/Main.jsx";
import Home from "./pages/Home.jsx";
import Tables from "./pages/Tables.jsx";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="dashboard" element={<Home/>}/>
                    <Route path="tables" element={<Tables/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
