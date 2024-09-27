const express = require('express');
const app = express();
const dataObj = require('./data.json');
const port = 3000;
const fs = require('fs');
app.use(express.json());

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const key in dataObj.notes) {
    arr.push(dataObj.notes[key]);
  }
  res.status(200).send(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const notesId = req.params.id;
  if (notesId <= -1) {
    res.status(400).send({ Error: 'the id you have entered is not positive' });
  }
  if (dataObj.notes[notesId]) {
    res.status(200).send(dataObj.notes[notesId]);
  }
  if (!dataObj.notes[notesId]) {
    res.status(404).send({ Error: 'that id does not exist' });
  }

});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.send(400).send({ Error: 'content is a required field' });
  } else {
    const reqBody = req.body;
    reqBody.id = dataObj.nextId;
    dataObj.notes[dataObj.nextId] = reqBody;
    dataObj.nextId++;
    fs.writeFile('data.json', JSON.stringify(dataObj, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured' });
      } else {
        res.status(201).send(reqBody);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const num = req.params.id;
  if (num <= -1) {
    res.status(400).send({ error: 'id must be a positivie integer' });
  }
  if (!dataObj.notes[num]) {
    res.status(404).send({ error: 'id does not exist' });
  } else {
    delete dataObj.notes[num];

    fs.writeFile('data.json', JSON.stringify(dataObj, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error has occured.' });
      } else {
        res.sendStatus(204);
      }
    });
  }

});

app.put('/api/notes/:id', (req, res) => {
  const num = req.params.id;
  const bodyContent = req.body.content;
  if (num <= -1) {
    res.status(400).send({ error: `${num} must be a positive integer` });
  }
  if (!bodyContent) {
    res.status(400).send({ error: 'content is a required field' });
  }
  if (!dataObj.notes[num]) {
    res.status(404).send({ error: `${num} does not exist` });
  } else {
    dataObj.notes[num].content = bodyContent;
    fs.writeFile('data.json', JSON.stringify(dataObj, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(200);
      }
    });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}!`);

});
