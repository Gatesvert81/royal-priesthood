import React from 'react'

function DoCard({title}) {
    return (
        <div className='w-full h-fit flex flex-col justify-between gap-2 rounded shadow' >
            <div className='w-8 h-8 bg-blue-300 rounded-full' ></div>
            <div className="card__title text-left" >
                <p>{title}</p>
            </div>
            <div className="normal__text" >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. 
                </p>
            </div>
        </div>
    )
}

export default DoCard