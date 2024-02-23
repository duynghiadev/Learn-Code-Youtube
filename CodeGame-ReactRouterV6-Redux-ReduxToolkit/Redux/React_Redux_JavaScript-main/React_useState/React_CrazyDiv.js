import React, {useState} from 'react'

const CrazyDiv = () => {

    const [div, setDiv] = useState({
        left: 0,
        top: 0
    });

    const changeDiv = (min, max) => {
        setDiv({
            left: Math.floor(Math.random() *(max - min) + min),
            top: Math.floor(Math.random() *(max - min) + min)
        })
    }

    return (
        <div>
            <div onMouseEnter={() => changeDiv(0, 1000)} style={
                {
                    backgroundColor: "red",
                    height: 100,
                    width: 100,
                    position: 'absolute',
                    ...div
                }
            }>
            </div>
        </div>
    )
}

export default CrazyDiv;
