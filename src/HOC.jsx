import React, { useState } from 'react';

const HOC = (OriginalComponent) => {
    const NewComponent = () => {
        const [count, setCount] = useState(0);
        const IncrementCount = () =>{
            setCount(count + 1) 
        }
        return (
            <div className='hoc'>
                {count}
                <br/>
                <OriginalComponent increment={IncrementCount}/>
            </div>
        )
    }
    return NewComponent
}

export default HOC