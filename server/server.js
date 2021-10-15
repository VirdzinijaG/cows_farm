const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs123456',
    database: 'cows_farm'
})

con.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Prisijungta!!');
})


// Iraso nauja posta

app.post('/cows', (req, res) => {
    console.log(req.body.title)
    const sql = `
        INSERT INTO cows
        (name, weight, total_milk, last_milking_time)
        VALUES (?, ?, ?, ?)
        `;
    con.query(sql, [req.body.name, req.body.weight, req.body.total_milk, req.body.last_milking_time], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})







// rodo visas karves
app.get('/cows', (req, res) => {
    con.query('SELECT * FROM cows ORDER BY id DESC', (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    })
})





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})