import React, { useState } from "react";
import "./App.css";
import { Task } from "./pages/taskPage/TaskPage";

export default function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "make a report",
            description: "check in, check out",
            status: "active"
        },
        {
            id: 2,
            title: "Go to the theatre",
            description: "Philharmonic Hall, Saturday night",
            status: "completed"
        },
        {
            id: 3,
            title: "Make skin routine",
            description: "spread the cream and serum",
            status: "active"
        },
        {
            id: 4,
            title: "book a ticket",
            description: "Italy, Milan",
            status: "completed"
        }
    ]);

    const [filter, setFilter] = useState("all");
    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") {
            return true;
        } else if (filter === "active") {
            return task.status === "active";
        } else if (filter === "completed") {
            return task.status === "completed";
        }
    });

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleResetFilter = () => {
        setFilter("all");
    };

    return (
        <div className="App">
            <h1>To do list</h1>

            <div className="filter-container">
                <button
                    className={`filter-button ${filter === "all" ? "active" : ""}`}
                    onClick={() => handleFilterChange("all")}
                >
                    all tasks
                </button>
                <button
                    className={`filter-button ${filter === "all" ? "active" : ""}`}
                    onClick={() => handleFilterChange("active")}
                >
                    active tasks
                </button>
                <button
                    className={`filter-button ${filter === "all" ? "active" : ""}`}
                    onClick={() => handleFilterChange("completed")}
                >
                    completed tasks
                </button>
                <button className="reset-button" onClick={handleResetFilter}>
                   reset
                </button>
            </div>

            <ul className="task-list">
                {filteredTasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}