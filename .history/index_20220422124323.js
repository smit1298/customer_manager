const express = require('express');

const app = express();




app.get('/', (req, res) =>{
    res.send('Welcome to customer manager')
})


// GET /customers
app.get('/customers', (req, res) => {
    res.json([
        {name: 'peter', address: '25 houston texas', email: 'temitope@gmail.com'},
        {name: 'raymond', address: '2 Bode thomas', email: 'raymond@gmail.com'},
        {name: 'sandra', address: '25 sandra avenue', email: 'sandra@gmail.com'}
    ])
})


// GET /customers/id
app.get('/customers/:id', (req, res) => {
    const 
})


app.listen(3000, () => console.log('server running on port 3000'));