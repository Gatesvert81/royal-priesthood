import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import EventCard from '../src/Components/EventCard'
import { NavContext } from '../src/Components/Context'


function Events() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "events") return;
    
      setPage("events")
    }, [])

    return (
        <div className='w-full min-h-screen' >
            <Head>
                <title>Royal Priesthood | Events</title>
                <meta name="description" content="Join and worship with us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='w-full h-40vh md:h-screen bg-worship-1 main__bg ' />

            <section className='grid__items' >
                <div className='medium__text' >
                    <p>Upcoming events in </p>
                    <p>Royal Priesthood</p>
                </div>
                <div className='grid__items md:grid-cols-2' >
                    <EventCard small={false} />
                    <EventCard small={false} />
                    <EventCard small={false} />
                    <EventCard small={false} />
                </div>
            </section>

        </div>
    )
}

export default Events