import React from "react";

export const Task = ({ task }) => {
    return (
        <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Статус: {task.status}</p>
        </li>
    );
};