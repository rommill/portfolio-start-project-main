import './App.css';
import {Header} from './layout/header/Header';
import {Main} from "./layout/header/sections/main/Main";
import {Skills} from "./layout/header/sections/skills/Skills";
import {Works} from "./layout/header/sections/works/Works";
import {Testimony} from "./layout/header/sections/testimony/Testimony";
import {Contact} from "./layout/header/sections/contacts/Contacts";
import {Slogan} from "./layout/header/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;
