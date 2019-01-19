import Todo from '../models/Todo';

export default function(req, res){
         
    const id = req.params.id;
    Todo.findByIdAndDelete(id, function(err, todo){
                
        if(err) return console.log(err);
        res.send(todo);
    });
}