import { useState, useEffect } from "react";
import axios from 'axios';
import Cows from "./Cows";
import NewCow from "./NewCow";
import Statistic from "./Statistic";

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

    // Bendras kieko pienas
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
    const sort = by => {
        const cowsCopy = cows.slice();
        if ('total_milk' === by) {
          cowsCopy.sort((a, b) => {
            if (a.total_milk > b.total_milk) {
              return 1
            }
            if (a.total_milk < b.total_milk) {
              return -1
            }
            return 0
          })
          setCows(cowsCopy)
        }
        if ('weight' === by) {
          cowsCopy.sort((a, b) => a.weight - b.weight)
    
    
          setCows(cowsCopy)
        }
      }



    return (
        <>
            <h1 style={{ marginTop: "10px", marginBottom: "50px", fontSize: "60px", textAlign: "center" }}>Karvi?? ferma</h1>
            <NewCow addCow={addCow}></NewCow>
            <Statistic cowsCount={cowsCount} milkCount={milkCount} sort={sort}></Statistic>
            <Cows cows={cows} deleteCow={deleteCow} editCow={editCow}></Cows>
        </>
    );
}


export default App;