const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vaijah@1',
    database: 'bannerDB'
});

app.get('/banner', (req, res) => {
    db.query('SELECT * FROM banners WHERE id = 1', (err, result) => {
        if (err) throw err;
        res.send(result[0]);
    });
});

app.post('/banner', (req, res) => {
    const { description, timer, link, isVisible } = req.body;
    db.query('UPDATE banners SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1',
        [description, timer, link, isVisible],
        (err, result) => {
            if (err) throw err;
            res.send('Banner updated');
        }
    );
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
