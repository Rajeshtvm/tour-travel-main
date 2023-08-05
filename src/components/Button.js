import React from "react";

export default function Button({ text, styleName }) {
    return (
        <>
            <button className={styleName}>{text}</button>
        </>

    )
}