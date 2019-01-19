import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todosScheme = new Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    description: String,
    createdDate: Date,
    lastModifiedDate: Date,
    checked: Boolean,
    status: {
      type: String,
      enum: ['Todo', 'In progress', 'Done'],
      required: true,
    },
  }, {
    versionKey: false
  });

const Todo = mongoose.model("Todos", todosScheme);

export default Todo;