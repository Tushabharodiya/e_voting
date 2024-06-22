import React from 'react'

const Card = ({name,count}) => {
    return (
        <>
            <div className="cardd">
                <h2>{name}</h2>
                <span>{count}</span>
                <span>inc : 2 sets</span>
            </div>
        </>
    )
}

export default Card