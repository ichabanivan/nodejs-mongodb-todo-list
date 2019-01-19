import Todo from '../models/Todo';

export default function(req, res){
         
    const id = req.params.id;
    Todo.findOne({_id: id}, function(err, user){
          
        if(err) return console.log(err);
        res.send(user);
    });
}