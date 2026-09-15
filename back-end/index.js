// imports
const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());

let notes = [
    { text: "Reminder to complete homework..." },
    { text: "Meeting scheduled tomorrow..." },
];

app.get('/', (req, res) => {
    res.send('Note Project Running')
});

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.post('/submit', (req, res) => {
    const { text } = req.body;

    if (!text || !text.trim()) {
        return res.status(400).json({ error: "Note cannot be empty" })
    }

    const newNote = { text };
    notes.push(newNote);

    console.log('Added:', newNote);

    res.json({ message: "Note Added", notes });
});

app.listen(4000, () => {
    console.log('Server running !!');
    
})
