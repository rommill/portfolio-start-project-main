import './App.css';
import {Header} from './layout/header/Header';
import {Main} from "./layout/header/sections/main/Main";
import {Skills} from "./layout/header/sections/skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
