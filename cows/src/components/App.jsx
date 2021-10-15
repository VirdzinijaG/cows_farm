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

    const addCow = (cow) => {
        axios.post("http://localhost:3003/cows", cow).then(() => {
            setLastUpdate(Date.now());
        });
    };

    const deleteCow = (id) => {
        axios.delete("http://localhost:3003/cows/" + id).then(() => {
            setLastUpdate(Date.now());
        });
    };

    const editCow = (id, cow) => {
        axios.put("http://localhost:3003/cows/" + id, cow).then(() => {
            setLastUpdate(Date.now());
        });
    };




    return (
        <>
            <h1 style={{ marginTop: "10px", marginBottom: "50px", fontSize: "60px", textAlign: "center" }}>Karvių ferma</h1>
            <NewCow addCow={addCow}></NewCow>
            <Cows cows={cows} deleteCow={deleteCow} editCow={editCow}></Cows>
        </>
    );
}


export default App;