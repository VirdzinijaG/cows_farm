import "../style.css";

function Statistic({ cowsCount, milkCount }) {
    return (
        <>
            <div className="statistic row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Statistika</h5>
                            <p className="card-text"><h6>Bendras karvių skaičius</h6> {cowsCount}</p>
                            <p className="card-text"><h6>Bendras pieno kiekis</h6> {milkCount}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistic