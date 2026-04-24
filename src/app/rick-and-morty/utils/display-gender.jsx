import { Mars, Minus, ShieldQuestionMark, Venus } from "lucide-react"
import React from "react"

export const DisplayGender = ({ gender }) => {

    if(gender === "Female"){
        return <Venus className="text-pink-500" />;
    }
    if(gender === "Male"){
        return <Mars className="text-blue-500" />;
    }
    if(gender === "Genderless"){
        return <Minus className="text-black" />;
    }
    if(gender === "unknown"){
        return <ShieldQuestionMark className="text-gray-500" />
    }

    
    return <ShieldQuestionMark className="text-gray-500" />
        
    
};