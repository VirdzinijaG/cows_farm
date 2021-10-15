import { useState, useEffect } from "react";
import axios from 'axios';
import Cows from "./Cows";
import NewCow from "./NewCow";

function App() {

    const [cows, setCows] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [cowsCount, setCowsCount] = useState(0);
    const [milkCount, setMilkCount] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3003/cows").then((response) => {
            setCows(response.data);
        });
    }, [lastUpdate]);



    // Statistika
    // Visos karves
    useEffect(() => {
        axios.get('http://localhost:3003/cows/count')
            .then((response) => {
                setCowsCount(response.data[0].cowsCount);
            })
    }, [lastUpdate])

    // Visas pieno kiekis
    useEffect(() => {
        axios.get('http://localhost:3003/cows/milk-count')
            .then((response) => {
                console.log(response.data);
                setMilkCount(response.data[0].total_milk);
            })
    }, [lastUpdate])

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



    // rusiavimas
    // const sort = by => {
    //     const cowsCopy = cows.slice();
    //     if ('total_ride_kilometres' === by) {
    //         cowsCopy.sort((a, b) => {
    //             if (a.total_ride_kilometres > b.total_ride_kilometres) {
    //                 return 1
    //             }
    //             if (a.total_ride_kilometres < b.total_ride_kilometres) {
    //                 return -1
    //             }
    //             return 0
    //         })
    //         setCows(cowsCopy)
    //     }
    //     if ("last_use_time" === by) {
    //         cowsCopy.sort((a, b) => {
    //             if (a.last_use_time > b.last_use_time) {
    //                 return 1;
    //             }
    //             if (a.last_use_time < b.last_use_time) {
    //                 return -1;
    //             }
    //             return 0;
    //         });
    //         setCows(cowsCopy);
    //     }
    // }

    return (
        <>
            <h1 style={{ marginTop: "10px", marginBottom: "50px", fontSize: "60px", textAlign: "center" }}>Karvių ferma</h1>
            <NewCow addCow={addCow}></NewCow>
            <Cows cows={cows} deleteCow={deleteCow} editCow={editCow}></Cows>
        </>
    );
}


export default App;