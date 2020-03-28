import React,{ useState } from "react";


function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
              <h1 className="text-grey-darkest">Todo List</h1>
              <div className="flex mt-4">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                         placeholder="Add Todo"
                         type="text"

                         value={value}
                         onChange={e => setValue(e.target.value)}/>
                      <button
                          type={"submit"}
                          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add
                      </button>
              </div>
          </div>
      </form>
  );
}

export default AddTodo;
