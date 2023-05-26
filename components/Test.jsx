import React, { useState, useEffect } from 'react'

function Test() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Inutialisation');
    }, []);

    useEffect(() => {
        console.log('updated');
    }, [count]);

    useEffect(() => {
        return () => {
            console.log('Destruction');
        }
    }, []);

    return (
        <>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Clicked {count} times
            </button>
        </>
    );
}

export default Test