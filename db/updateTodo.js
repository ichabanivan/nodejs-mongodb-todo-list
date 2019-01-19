import Todo from '../models/Todo';

export default function(req, res){
         
    if(!req.body) return res.sendStatus(400);

    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const checked = req.body.checked || false;
    const status = req.body.status || 'In progress';
    const lastModifiedDate = new Date();

    const todo = {
      name,
      description,
      checked,
      status,
      lastModifiedDate,
    };
     
    Todo.findOneAndUpdate({_id: id}, todo, {new: true}, function(err, user){
        if(err) return console.log(err); 
        res.send(user);
    });
}