import React from 'react'

function ValueCard() {
    return (
        <div className='w-full h-fit flex flex-row justify-between items-center gap-3' >
            <div className='text-7xl font-semibold' >
                <p>01</p>
            </div>
            <div className='w-full h-full flex flex-col justify-between items-start '>
                <p className='card__title uppercase text-left' >
                    Jesus is the message
                </p>
                <p className='small__text' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
    )
}

export default ValueCard