import "../css/app.css"
import React from "react";
import * as ReactDOM from "react-dom/client"
import TodoApp from "./TodoApp";


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("TodoApp")
        if(!container) return;
        const root = ReactDOM.createRoot(container)
        root.render(<TodoApp />);
});