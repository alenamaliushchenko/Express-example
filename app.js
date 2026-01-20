import { error, log } from 'console';
import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log('Ми отримали запит', req.method, req.url);
    // throw Error();
    next();
})
app.get('/:id/:name', (req, res) => {
    res.send('Відповідь серверає');
    console.log('id = ', req.params.id);
    console.log('name = ', req.params.name);
})
app.get('/action', (req, res) => {
    res.send('Відповідь серверає з action')
})

app.use((error, req, res, next) => {
    res.send('Щось пішло не так!')
})

// app.use(express.static('assets'));

app.listen(3000);