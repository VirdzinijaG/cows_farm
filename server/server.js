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

// Trina posta

app.delete('/cows/:id', (req, res) => {
    const sql = `
        DELETE FROM cows
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})


//Redagavimas
app.put('/cows/:id', (req, res) => {
    const sql = `
        UPDATE cows
        SET weight = ?, total_milk = ?, last_milking_time = ? 
        WHERE id = ?
        `;
    con.query(sql, [req.body.weight, req.body.total_milk, req.body.last_milking_time, req.params.id], (err, result) => {
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

// skaiciuoja karve
// SELECT COUNT(ProductID) AS NumberOfProducts FROM Products;
app.get('/cows/count', (req, res) => {
    con.query('SELECT COUNT(id) AS cowsCount FROM cows', (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    })
})

// skaiciuoja pieno kieki
app.get('/cows/milk-count', (req, res) => {
    con.query(
        "SELECT SUM(total_milk) AS total_milk FROM cows",
        (err, results) => {
            if (err) {
                throw err;
            }
            res.json(results);
        }
    );
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})