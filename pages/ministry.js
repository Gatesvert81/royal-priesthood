import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import whitePreach from '../public/white-preach.jpg'
import Image from 'next/image'
import VideoCard from '../src/Components/VideoCard'
import AudioCard from '../src/Components/AudioCard'
import { NavContext } from '../src/Components/Context'


function Ministry() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "ministry") return;
    
      setPage("ministry")
    }, [])

    return (
        <div className='w-full min-h-screen' >
            <Head>
                <title>Royal Priesthood | Ministry</title>
                <meta name="description" content="Join and worship with us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='w-full h-40vh md:h-60vh p-10 md:px-16' >
                <div className='w-full h-full relative ' >
                    <Image src={whitePreach} layout="fill" className="object-cover" alt="Preaching" />
                </div>
            </main>
            <section className='grid__items' >
                <div className='medium__text' >
                    <p>Get Access to Powerful</p>
                    <p>Ministrations</p>
                </div>
                <div className='' >
                    <div className='text-lg font-semibold' >
                        Video
                    </div>
                    <div className='grid__items md:grid-cols-3' >
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                    </div>
                    <div className='text-lg font-semibold' >
                        Audio
                    </div>
                    <div className="grid__items md:grid-cols-2" >
                        <AudioCard />
                        <AudioCard />
                        <AudioCard />
                        <AudioCard />
                        <AudioCard />
                        <AudioCard />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Ministry