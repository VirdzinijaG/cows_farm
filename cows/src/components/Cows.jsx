import Cow from "./Cow";


function Cows({ cows }) {
    return (
        <>
            {cows.map((cow) => (<Cow key={cow.id} cow={cow} />))}
        </>
    )
}

export default Cows;