import mongoose from 'mongoose';
import express from 'express';

import getTodos from './db/getTodos';
import getTodo from './db/getTodo';
import addTodo from './db/addTodo';
import deleteTodo from './db/deleteTodo';
import updateTodo from './db/updateTodo';

const app = express();
const jsonParser = express.json();

mongoose.connect('mongodb://localhost:27017/server-app', { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log('Server is connecting...');
    });
});

app.get('/api/todos', getTodos);
app.get('/api/todos/:id', getTodo);
app.post('/api/todos', jsonParser, addTodo);
app.delete('/api/todos/:id', deleteTodo);
app.put('/api/todos', jsonParser, updateTodo);