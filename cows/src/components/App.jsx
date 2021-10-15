import { useState, useEffect } from "react";
import axios from 'axios';
import Cows from "./Cows";
import NewCow from "./NewCow";



function App() {

    const [cows, setCows] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now());



    useEffect(() => {
        axios.get("http://localhost:3003/cows").then((response) => {
            setCows(response.data);
        });
    }, [lastUpdate]);






    return (
        <>
            <h1 style={{ marginTop: "10px", marginBottom: "50px", fontSize: "60px", textAlign:"center" }}>Karvių ferma</h1>
            <NewCow></NewCow>
            <Cows cows={cows}></Cows>
        </>
    );
}


export default App;