import React from 'react'

const Alert = (props) => {
    return (
        props.alert !== null &&
        (
        
            <div><span className='text-white flex items-center justify-center mt-1 px-3 py-2 bg-red-500'>{props.alert.mesaj}</span></div>
        
        )
    )
}
export default Alert