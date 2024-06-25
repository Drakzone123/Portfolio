import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path'; 
import { nextTick } from 'process';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/inedx.html');
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send(`<h1>Welcom</h1> <h1>${req.body.email}</h1> <h2>${req.body.user}</h2>`);
});

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Server started at http://localhost:${port}`);
});