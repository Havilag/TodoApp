import { useState } from "react"

export const TodoInput = ({ onAdd }) => {
    const [inputValue, SetInputValue] = useState("");

    const handleClick = () => {
        if (inputValue.trim() === "") return;
        onAdd(inputValue);
        setIpuntValue("");
    };


    return (
        <><div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => SetInputValue(e.target.value)}
                placeholder="Agregar un todo"
                className="border px-2" />
        </div>
            <button onClick={handleClick}
                className="bg-black text-white p-2 round-2xl w-exs">
                Agregar Todo
            </button></>
    );
};