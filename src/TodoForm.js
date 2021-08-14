import React from 'react';
import { useForm } from 'react-hook-form';

export const TodoForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      text: todo ? todo.text : '',
      description: todo ? todo.description : '',
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">Text:</label>
        <input
          className="form-control"
          {...register('text', { required: true })}
          type="text"
          name="text"
          id="text"
        />
        <label htmlFor="description">Description:</label>
        <input
          className="form-control"
          {...register('description', { required: true })}
          type="text"
          name="description"
          id="description"
        />
      </div>
      <div className="form-group mt-2">
        <button className="btn btn-primary" type="submit">
          Save Todo
        </button>
      </div>
    </form>
  );
};
