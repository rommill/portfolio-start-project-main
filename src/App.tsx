import './App.css';
import {Header} from './layout/header/Header';
import {Main} from "./layout/header/sections/main/Main";
import {Skills} from "./layout/header/sections/skills/Skills";
import {Works} from "./layout/header/sections/works/Works";
import {Testimony} from "./layout/header/sections/testimony/Testimony";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
        </div>
    );
}

export default App;
