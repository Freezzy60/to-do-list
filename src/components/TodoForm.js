import React, { useState, useEffect, useRef } from 'react'

function TodoForm(probs) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    {/* function that the site when click on button don´t refresh */ }
    const handleSubmit = e => {
        e.preventDefault();

        {/*genarirt eine random id bis 1000 */ }
        probs.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');
    };



    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {probs.edit ? (
                    <>
                        <input
                            placeholder="Add a todo"
                            value={input}
                            name="text"
                            className="todo-input edit"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="todo-button">Add todo</button>
                        </>
                        ) : (
                        <>
                            <input
                                placeholder="Add a todo"
                                value={input}
                                name="text"
                                className="todo-input"
                                onChange={handleChange}
                                ref={inputRef}
                            />
                            <button className="todo-button">Add todo</button>
                            </>
                 )}
                        </form>
                    </div>
                )
}

                export default TodoForm
