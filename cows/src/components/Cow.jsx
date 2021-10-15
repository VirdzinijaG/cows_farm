function Cow({ cow }) {
    return (<>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Karvės vardas</th>
                    <th scope="col">Karvės svoris</th>
                    <th scope="col">Pieno kiekis</th>
                    <th scope="col">Paskutinė melžimo dena</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{cow.name}</td>
                    <td>{cow.weight} kg</td>
                    <td>{cow.total_milk} l</td>
                    <td>{cow.last_milking_time}</td>
                </tr>
            </tbody>
        </table>
    </>
    )
}

export default Cow;