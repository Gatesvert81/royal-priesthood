import Head from 'next/head'
import Image from 'next/image'
import Button from '../src/Components/Button'
import EventCard from '../src/Components/EventCard'
import worship1 from '../public/worship-1.jpg'
import worship2 from '../public/worship-2.jpg'
import DoCard from '../src/Components/DoCard'
import AudioCard from '../src/Components/AudioCard'
import { useContext, useEffect } from 'react'
import { NavContext } from '../src/Components/Context'

export default function Home() {

  const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "home") return;
    
      setPage("home")
    }, [])

  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Royal Priesthood | Home</title>
        <meta name="description" content="Worship with us and be transfromed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full h-screen bg-pastor main__bg md:bg-50vw md:bg-right md:flex md:flex-col md:justify-end ' >
        <div className="w-full md:w-1/2 h-full md:h-90vh flex flex-col justify-center md:justify-between items-start px-10 md:pl-16 md:pt-10 md:pb-10 lg:px-24 gap-10 bg-faded-white md:bg-transparent  " >
          <div className="w-full h-fit flex flex-col justify-between items-start gap-5" >
            <div className='large__text' >
              <p>Welcome to Royal</p>
              <p>Priesthood</p>
            </div>
            <div className="normal__text" >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
            <div>
              <Button style="primary" >
                Get started
              </Button>
            </div>
          </div>
          <div>
            <EventCard small={true} />
          </div>
        </div>
      </main>

      <section className="grid__items md:grid-cols-2 gap-10 md:gap-20" >
        <div className=" w-full h-72 md:h-80 lg:h-96 flex flex-row gap-2" >
          <div className=" w-4/5 h-4/5 relative self-end " >
            <Image src={worship1} layout="fill" className="object-cover" alt="worship" />
          </div>
          <div className="w-4/5 h-4/5 relative self-start" >
            <Image src={worship2} layout="fill" className="object-cover" alt="worship" />
          </div>
        </div>
        <div className='w-full h-fit md:h-full flex flex-col gap-5 md:justify-center ' >
          <div className="medium__text" >
            <p>We do worship and</p>
            <p>Goodness for God</p>
          </div>
          <div className="normal__text " >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
          <div>
            <Button style="primary" >
              Learn more
            </Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5" >
        <div>
          <div className="medium__text capitalize" >
            <p>What we do</p>
          </div>
          <div className="normal__text md:w-3/5" >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
        </div>
        <div className='grid__items md:grid-cols-4' >
          <DoCard title="Worship/Praise" />
          <DoCard title="Counseling" />
          <DoCard title="Holy Communion" />
          <DoCard title="Baptism" />
        </div>
      </section>

      <section>
        <div className='w-full flex flex-row justify-between' >
          <div className="medium__text" >
            <p>Get Better by Hearing</p>
            <p>Our Sermons</p>
          </div>
          <div>
            <Button style="small__btn bg-white" >
              &#60;
            </Button>
            <Button style="small__btn">
              &#62;
            </Button>
          </div>
        </div>
        <div className="grid__items md:grid-cols-2 " >
          <AudioCard />
          <AudioCard />
          <AudioCard />
          <AudioCard />
          <AudioCard />
          <AudioCard />
        </div>
      </section>

      <section className="bg-faded-blue grid__items md:grid-cols-2" >
        <div className='medium__text' >
          <p>Join with us, Subscribe</p>
          <p>to Our Newsletter</p>
        </div>
        <div className="w-full h-fit flex flex-row justify-start items-center self-end " >
          <input type="text" placeholder='Please enter your email' className='w-full h-8 rounded px-2 normal__text capitalize' />
          <Button style="small__btn" >
          </Button>
        </div>
      </section>

      <section className='grid__items' >
        <div className='medium__text' >
          <p>Upcoming events in </p>
          <p>Royal Priesthood</p>
        </div>
        <div className='grid__items md:grid-cols-2' >
          <EventCard small={false} />
          <EventCard small={false} />
        </div>
      </section>

    </div>
  )
}
