import React from 'react';


interface DuckProps {
    name: string;
    age?: number;
}

export const Duck = (props: DuckProps) => {
    return (
        <div>
            <h1>Quack: {props.name}</h1>
            <h2>Age: {props.age}</h2>
        </div>
    );
};