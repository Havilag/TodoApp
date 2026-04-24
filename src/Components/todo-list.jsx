export const todoList = ({todos}) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return <li>{todo.text}</li>
                })
            }
        </ul>
    );
};