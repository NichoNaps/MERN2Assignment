import React, {useState} from "react"

const MyCounter = (props) => {
    const [currentCount, setCurrentCount] = useState(props.startVal) // assign start value and setter name

    const handleClick = () => {
        setCurrentCount(currentCount + props.incBy)
    }
//*style={{rotate: currentCount + "deg"}}*/

    return (
        <div >
            <div>{currentCount}</div>
            <button className="button" onClick={handleClick}>+{props.incBy}</button>
        </div>

    )

};

export default MyCounter;