import express from 'express';

const app = express();
const port = 3000;
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.post('/api', (req, res, next) => {
    const {message} = req.body;
    console.log('${message}');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

















