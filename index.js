const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express());

const port = 5000;

app.get('/user', (req, res) => {
    res.send({id: 1, name: 'Ashikur Rahman Munna'})
})


app.listen(port, () => {
    console.log('server is running at port', port);
})