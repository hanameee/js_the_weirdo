import React from "react";
import "../styles/hello.css";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => (
    <>
        <h1>
            Hello from {props.compiler} and {props.framework}{" "}
        </h1>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Test
        </button>
    </>
);
