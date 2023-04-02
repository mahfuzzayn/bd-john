import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";

function App() {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch("https://bdplayers.free.beeceptor.com")
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);
    return (
        <div className="App">
            <Header></Header>
            {players.map((player) => (
                <Player key={player.id} player={player}></Player>
            ))}
        </div>
    );
}

export default App;