import React, {useState} from "react"

const MyCounter = (props) => {
    const [currentCount, setCurrentCount] = useState(0) // assign start value and setter name

    const handleClick = () => {
        setCurrentCount(currentCount + props.incBy)
    }

    return (
        <>
            <div>{currentCount}</div>
            <button onClick={handleClick}>+{props.incBy}</button>
        </>

    )

};

export default MyCounter;