const express = require('express');
const app = express();

app.use(express.json());

app.get('/evaluate', (req, res) => {
    res.send('Checklist evaluation endpoint');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
