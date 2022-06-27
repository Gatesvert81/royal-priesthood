import React, { useContext, useEffect, useState } from 'react'
import AnchorLink from './AnchorLink'
import Button from './Button'
import { NavContext } from './Context'

function Navigation() {

    const [show, handleShow] = useState(false)

    const [page, setPage] = useContext(NavContext)


    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc)
        return () => {
            window.removeEventListener("scroll", myFunc)
        }
    }, [])

    return (
        <nav className={`w-full h-fit fixed top-0 left-0 py-3 px-10 md:px-16 lg:px-24 z-10 flex flex-row justify-between items-center ${show ? "bg-faded-white backdrop-blur" : null} `} >
            <div>
                logo
            </div>
            <div className='flex flex-row justify-between items-center gap-2 md:gap-5' >
                <AnchorLink route="/" >
                    <Button 
                        style={`nav__btn ${page === "home" ? "selected" : null}`}
                        click={() => setPage("home")} >
                        Home
                    </Button>
                </AnchorLink>
                <AnchorLink route="/about" >
                    <Button 
                        style={`nav__btn ${page === "about" ? "selected" : null}`}
                        click={() => setPage("about")}
                         >
                        About
                    </Button>
                </AnchorLink>
                <AnchorLink route="/ministry" >
                    <Button 
                        style={`nav__btn ${page === "ministry" ? "selected" : null}`} 
                        click={() => setPage("ministry")}
                        >
                        Ministry
                    </Button>
                </AnchorLink>
                <AnchorLink route="/events" >
                    <Button 
                        style={`nav__btn ${page === "events" ? "selected" : null}`}
                        click={() => setPage("events")}
                         >
                        Events
                    </Button>
                </AnchorLink>
            </div>
        </nav>
    )
}

export default Navigation