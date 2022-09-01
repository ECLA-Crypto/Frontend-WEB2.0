import { createClient } from "contentful"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../static/Loader"
import AboutSection from "../static/PubblesSection/AboutSection"
import HeroSection from "../static/PubblesSection/HeroSection"
import Navbar from "../static/PubblesSection/Navbar"

const Pubble = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        const getInfo = async () => {
            const client = createClient({
                space: process.env.REACT_APP_ECLA_CONTENTFUL_SPACE_ID,
                accessToken: process.env.REACT_APP_ECLA_CONTENTFUL_ACCESS_TOKEN
              });
            const herosection = await client.getEntries({ content_type: "pubbleHeroContent" })
            const aboutContent = await client.getEntries({ content_type: "pubbleAboutContent" })
            const aboutImages = await client.getEntries({ content_type: "pubbleAboutImages" })
            dispatch({type: "SET_PUBBLE_HERO_SECTION", payload:herosection.items})
            dispatch({type: "SET_PUBBLE_ABOUT_CONTENT", payload:aboutContent.items})
            dispatch({type: "SET_PUBBLE_ABOUT_IMAGES", payload:aboutImages.items})
            setLoading(true)
        }
        getInfo()
    }, [dispatch])
  return (
    <div className="w-full bg-gradient-to-b from-eclablue to-eclaLightBlue">
        {!loading&&<Loader/>}
        <div className="hero_Section flex-col h-fit">
            <div className="min-h-screen">
              <Navbar/>
              <HeroSection/>
            </div>
        </div>
        <AboutSection/>
    </div>
  )
}

export default Pubble