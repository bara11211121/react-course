import type { ReactNode } from "react";

interface CardProps {
    name:string;
    intro:string;
    children:ReactNode;
}
export const ProfileCard = ({name, intro, children}:CardProps)=>{
    
    return(
        <div>
            <div>{children}</div>
            <div>我的名字是{name}</div>
            <div>{intro}</div>
        </div>
    );
};