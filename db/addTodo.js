import Todo from '../models/Todo';

export default function (req, res) {
        
    if(!req.body) return res.sendStatus(400);
        
    const name = req.body.name;
    const description = req.body.description;
    const checked = req.body.checked || false;
    const status = req.body.status || 'In progress';
    const createdDate = new Date();
    const lastModifiedDate = new Date();

    const todo = new Todo({
        name,
        description,
        checked,
        status,
        createdDate,
        lastModifiedDate,
    });
        
    todo.save(function(err){
        if(err) return console.log(err);
        res.send(todo);
    });
}