import React, {useState} from "react"

const Counter = (props) => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + 1)
    }

    return (
        <>
            <p>
               This is my <a href="https://github.com/NichoNaps/basicmern/tree/main/day4/my-app">Github Link</a>
            </p>
        </>

    )

};

export default Counter;