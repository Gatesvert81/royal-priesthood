import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import pastor from '../public/pastor.jpg'
import Image from 'next/image'
import ValueCard from '../src/Components/ValueCard'
import { NavContext } from '../src/Components/Context'


function About() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "about") return;
    
      setPage("about")
    }, [])
    

    return (
        <div>
            <Head>
                <title>Royal Priesthood | About</title>
                <meta name="description" content="Get to know Christ Jesus through us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <section className='h-40vh md:h-50vh grid__items items-center ' >
                <div className=' w-full flex justify-center text-6xl font-bold uppercase text-center' >
                    <p>shout gloraaay</p>
                </div>
                <div className='w-full normal__text font-bold text-center' >
                    <p>You cannot touch on the greatness of God</p>
                    <p>without His Glory manifesting. This is your Time.</p>
                </div>
            </section>

            <section className='grid__items' >
                <div className="medium__text" >
                    <p>Our</p>
                    <p>Journey</p>
                </div>
                <div>
                    <div className='w-full md:w-40 h-40 relative md:float-left md:mr-5 md:mb-5 ' >
                        <Image src={pastor} layout="fill" className="object-cover" alt="pastor" />
                    </div>
                    <p className="normal__text text-justify" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                    <p className="normal__text text-justify" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                </div>
            </section>

            <section className='grid__items' >
                <div className="medium__text" >
                    <p>Our</p>
                    <p>Values</p>
                </div>
                <div className='grid__items md:grid-cols-3'>
                    <ValueCard />
                    <ValueCard />
                    <ValueCard />
                </div>
            </section>

            <section className='grid__items' >
                <div className="medium__text" >
                    <p>Our</p>
                    <p>Family</p>
                </div>
                <div className='grid__items md:grid-cols-3'>
                    <div className='w-full h-40 relative ' >
                        <Image src={pastor} layout="fill" className="object-cover float-left m-5 " alt="pastor" />
                    </div>
                    <div className='w-full h-40 relative ' >
                        <Image src={pastor} layout="fill" className="object-cover float-left m-5 " alt="pastor" />
                    </div>
                    <div className='w-full h-40 relative ' >
                        <Image src={pastor} layout="fill" className="object-cover float-left m-5 " alt="pastor" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About