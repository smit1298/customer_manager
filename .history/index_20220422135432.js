const express = require('express');
const mongoose = require('mongoose');
const Customer = require('./models/customer')

mongoose.connect('mongodb://localhost/customer_manader_db')

const app = express();

app.use(express.json())


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
    const _id = req.params.id;
    res.send(`Getting customer ${_id}`)
})

// POST /customers
app.post('/customers', async (req, res) => {
    const customer = new Customer(req.body);
})

// POST /customers/id
app.post('/customers', (req, res) => {
    const customer = req.body;
    res.json(customer)
})

// PATCH /customers/id
app.patch('/customers/:id', (req, res) => {
    const _id = req.params.id;
    const customer = req.body;

    res.json({ _id, ...customer})
})

// DELETE /customers/id
app.delete('/customers/:id', (req, res) => {
    const _id = req.params.id;
    const customer = req.body;

    res.send(`Deleting customer ${_id}`)
})

app.listen(3000, () => console.log('server running on port 3000'));