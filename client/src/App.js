import './App.css';
import ListOfCards from "./components/listOfCards/ListOfCards";
import FavButton from "./components/UI/addToFavButton/FavButton";

function App() {

    return (
        <div className="App">
            <ListOfCards/>
            <FavButton/>
        </div>
    );
}

export default App;
