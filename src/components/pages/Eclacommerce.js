import CommerceHero from "../static/CommerceSection/CommerceHero"
import CommerceNav from "../static/CommerceSection/CommerceNav"
import { createClient } from "contentful";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import InvestmentSection from "../static/CommerceSection/InvestmentSection";
import Footer from "../static/Footer";

const Eclacommerce = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getInfo = async () => {
            const client = createClient({
                space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
                accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
              });
            const herosection = await client.getEntries({ content_type: "heroSection" })
            const investmentTopSection = await client.getEntries({ content_type: "investmentTopSection" })
            const investmentPlans = await client.getEntries({ content_type: "investmentPlans" })
            dispatch({type: "SET_HERO_SECTION", payload:herosection.items})
            dispatch({type: "SET_INVESTMENT_TOP_SECTION", payload:investmentTopSection.items})
            dispatch({type: "SET_INVESTMENT_PLANS_SECTION", payload:investmentPlans.items})
        }
        getInfo()
    }, [dispatch])
    
  return (
    <div className="w-full">
        <div className="hero_Section flex-col ecosys_hero h-screen">
            <CommerceNav/>
            <CommerceHero/>
        </div>
        <InvestmentSection/>
        <Footer/>
    </div>
  )
}

export default Eclacommerce