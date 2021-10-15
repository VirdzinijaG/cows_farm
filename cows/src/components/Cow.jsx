function Cow({ cow, deleteCow }) {
    return (<>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Karvės vardas</th>
                    <th scope="col">Karvės svoris</th>
                    <th scope="col">Pieno kiekis</th>
                    <th scope="col">Paskutinė melžimo diena</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{cow.name}</td>
                    <td>{cow.weight} kg</td>
                    <td>{cow.total_milk} l</td>
                    <td>{cow.last_milking_time}</td>
                    <td><button type="button" className="btn btn-danger" style={{ width: '70px', borderRadius: "10px" }} onClick={() => deleteCow(cow.id)}>
                        Ištrinti
                    </button></td>
                </tr>
            </tbody>
        </table>
    </>
    )
}

export default Cow;