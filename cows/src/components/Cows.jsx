import Cow from "./Cow";


function Cows({ cows, deleteCow, editCow }) {
    return (
        <>
            {cows.map((cow) => (<Cow key={cow.id} cow={cow} deleteCow={deleteCow} editCow={editCow} />))}
        </>
    )
}

export default Cows;