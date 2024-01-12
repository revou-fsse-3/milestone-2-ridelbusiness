import { ReactNode } from "react";

interface Props{
    
    children: ReactNode;
}

const Card = ({children}: Props) => {
    return(
        <div className="flex justify-center items-center rounded overflow-hidden shadow-lg p-5 bg-blue-100">
            {children}
        </div>
        
        
    )
}
export default Card