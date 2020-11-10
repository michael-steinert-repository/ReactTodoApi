import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {CircularProgress} from "@material-ui/core";

const Todo = () => {
    const { id } = useParams();
    const [todoDetails, setTodoDetails] = useState();
    const { id: todoId, userId, title, completed } = todoDetails || {};
    const api = axios.create({
        baseURL: `https://jsonplaceholder.typicode.com/todos/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    useEffect(() => {
        api.get('/').then((res) =>{
            const responseTodo = res.data;
            setTodoDetails(responseTodo);
        })
    }, []);
    return (
        <div>
            {todoDetails ? (
                <div>
                    <h1>{`Todo id: ${todoId}`}</h1>
                    <h1>{`Todo userId: ${userId}`}</h1>
                    <h1>{`Todo title: ${title}`}</h1>
                    <h1>{`Todo completed: ${completed}`}</h1>
                </div>

            ) : <CircularProgress/>}
        </div>
    )
}

export default Todo;