// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
    render() {
        return(
            <div className="keypad">
                <input type="password" onKeyUp={(e)=>{console.log('Entering password...')}} />
            </div>
        )
    }
}

export default Keypad