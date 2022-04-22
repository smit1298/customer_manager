const express = requrie('express');
const app = express();

app.get('/customers', (req, res) => {
    res.json([
        {name: 'peter', address: '25 houston texas', email}
    ])
})


app.listen(3000, () => console.log('server running on port 3000');)