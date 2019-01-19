import Todo from '../models/Todo';

export default function(req, res){
    Todo.find({}, function(err, todos){
        if(err) return console.log(err);
        res.send(todos)
    });
}