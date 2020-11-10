import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const TodoCard = (props) => {
    const {id, title, completed} = props.todo;
    const useStyles = makeStyles({
        todoCard: {
            background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
            border: 0,
            marginBottom: 15,
            borderRadius: 15,
            color: 'white',
            padding: '5px 30px',
            margin: '15px',
            width: '150px'
        }
    });
    let history = useHistory();
    return (
        <div className={useStyles().todoCard} onClick={() => history.push(`/todo/${id}`)}>
            <h4>{title}</h4>
            <h6>{`Completed: ${completed}`}</h6>
        </div>
    )
}

export default TodoCard;