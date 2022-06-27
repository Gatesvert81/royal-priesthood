import React from 'react'
import Image from 'next/image'
import worship from '../../public/worship-1.jpg'
import calender from '../../public/calender.png'
import location from '../../public/location.png'
import Button from './Button'

function EventCard({ small }) {
    return (
        <div className={`w-full h-fit grid ${small ? "grid-cols-1fr-2fr" : "grid-cols-1"} gap-1 bg-white rounded overflow-hidden`}>
            <div className={`relative ${small ? null : "w-full h-40 md:h-52 lg:h-60"} `} >
                <Image src={worship} layout="fill" className='object-cover' />
            </div>
            <div className="w-full flex flex-col justify-between items-start gap-3 p-1 " >
                <div className="w-full h-fit md:gap-1 flex flex-col justify-between items-start" >
                    <div className="card__title" >Fire Service</div>
                    <div className="w-full flex flex-row h-fit items-center" >
                        <div className="relative w-6 h-6" >
                            <Image src={calender} layout="fill" alt="calender" className="object-contain" />
                        </div>
                        <p className='small__text' >Thursday 29 June 2021 GMT 07:30 PM</p>
                    </div>
                    <div className="w-full flex flex-row items-center h-fit" >
                        <div className="relative w-6 h-6" >
                            <Image src={location} layout="fill" alt="calender" className="object-contain" />
                        </div>
                        <p className='small__text' >Elizabeth Sey - University of Ghana, Legon</p>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-between items-center' >
                    <div className='w-fit h-fit flex flex-col justify-center items-center' >
                        <p className='text-sm font-bold text-main-blue' >06</p>
                        <p className='small__text uppercase'>Day</p>
                    </div>
                    <div className='w-fit h-fit flex flex-col justify-center items-center' >
                        <p className='text-sm font-bold text-main-blue' >12</p>
                        <p className='small__text uppercase'>hour</p>
                    </div>
                    <div className='w-fit h-fit flex flex-col justify-center items-center' >
                        <p className='text-sm font-bold text-main-blue' >54</p>
                        <p className='small__text uppercase'>minute</p>
                    </div>
                    <div className='w-fit h-fit flex flex-col justify-center items-center' >
                        <p className='text-sm font-bold text-main-blue' >13</p>
                        <p className='small__text uppercase'>second</p>
                    </div>
                </div>
                <div>
                    <Button style={`primary ${small ? null : "hidden"} `} >
                        Save a Sit
                    </Button>
                    <p className={`normal__text ${small ? "hidden" : null} `} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EventCard