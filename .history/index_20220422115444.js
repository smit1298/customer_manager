const express = requrie('express');
const app = express();

app.get('/customers', (req, res) => {
    res.json([
        {name: 'peter', address: ''}
    ])
})


app.listen(3000, () => console.log('server running on port 3000');)