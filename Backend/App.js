const express = require('express');
const app = express();
const candyRoutes = require('./routes/candyRoutes');
const expiryDateRoutes = require('./routes/expiryDateRoutes');

app.use(express.json());

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);

});

app.use('/candy', candyRoutes);
app.use('/expirydate', expiryDateRoutes);

module.exports = app;






