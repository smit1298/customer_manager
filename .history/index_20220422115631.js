const express = requrie('express');
const app = express();

app.get('/customers', (req, res) => {
    res.json([
        {name: 'peter', address: '25 houston texas', email: 'temitope@gmail.com'}
        {name: 'sandra', address: '2 Bode thomas', email: 'raymond@gmail.com'}
        {name: 'peter', address: '25 houston texas', email: 'sandra@gmail.com'}
    ])
})


app.listen(3000, () => console.log('server running on port 3000');)