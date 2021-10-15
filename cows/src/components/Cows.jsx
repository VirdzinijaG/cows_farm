import Cow from "./Cow";


function Cows({ cows, deleteCow }) {
    return (
        <>
            {cows.map((cow) => (<Cow key={cow.id} cow={cow} deleteCow={deleteCow} />))}
        </>
    )
}

export default Cows;