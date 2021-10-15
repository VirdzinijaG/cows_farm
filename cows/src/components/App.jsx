import { useState, useEffect } from "react";
import axios from 'axios';
import Cows from "./Cows";



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
            <h1>Karvių ferma</h1>
            <div className="inputForm">
                <div className="inputComponent">
                    <label>Karvės vardas</label>
                    <input type="text" name="reg" ></input>
                </div>
                <div className="inputComponent">
                    <label>Paskutinio naudojimo data</label>
                    <input type="date" name="date" ></input>
                </div>
                <div className="inputComponent">
                    <label>Rida</label>
                    <input type="number" name="km"></input>
                </div>
                <div className="inputComponent">
                    <button>Submit</button>
                </div>
            </div>
            <Cows cows={cows}></Cows>
        </>
    );
}


export default App;