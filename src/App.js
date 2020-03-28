import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import About from "./components/pages/About";


function App() {
    const [todos, setTodos] = useState([
        {
            text: "Learn about React",
            isCompleted: false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <Router>
            <div className="app">
                {/*<Switch>*/}
                    <Header/>
                    <Route
                        exact path='/'
                        render={() => (
                            <React.Fragment>
                                <Todos todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
                                <AddTodo addTodo={addTodo}/>
                            </React.Fragment>
                        )}
                    />
                    <Route path='/about' component={About}/>
                {/*</Switch>*/}
            </div>
        </Router>
    );
}

export default App;
