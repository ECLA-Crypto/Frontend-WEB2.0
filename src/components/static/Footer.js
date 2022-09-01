const Footer = () => {
  return (
    <footer className="border-t border-white w-full mt-20">
        <div className="w-4/5 py-8 flex md:flex-row flex-col justify-between items-center text-white mx-auto">
            <div className="flex-col flex">
              <small className='uppercase font-semibold'>@2022. ECLA llc</small>
              <small className="uppercase font-semibold">16192 COASTAL HWY, LEWES, DELAWARE</small>
            </div>
            <div className="flex items-center gap-3 mt-3 md:mt-0">
                <a href='https://t.me/eclaecosystem' target="_blank" rel="noreferrer"><img src="/assets/icons/telegram.svg" className="h-5" alt="Telegram"/></a>
                <a href='https://twitter.com/EclaEcosystem' target="_blank" rel="noreferrer"><img src="/assets/icons/twitter.svg" className="h-5" alt="Twitter"/></a>
                <a href='https://eclaecosystem.medium.com/' target="_blank" rel="noreferrer"><img src="/assets/icons/Vector.svg" className="h-5" alt="medium"/></a>
                <a href=' https://www.linkedin.com/in/ecla-ecosystem-8b5959235/' target="_blank" rel="noreferrer"><img src="/assets/icons/linkedin.svg" className="h-5" alt="LinkedIn"/></a>
                <a href='https://reddit.com/r/eclaecosystem' target="_blank" rel="noreferrer"><img src="/assets/icons/reddit.svg" className="h-5" alt="Reddit"/></a>
                <a href='https://discord.gg/4YfWcEwkeG' target="_blank" rel="noreferrer"><img src="/assets/icons/discord.svg" className="h-5" alt="Discord"/></a>
                <a href='https://Facebook.com/eclaecosystem' target="_blank" rel="noreferrer"><img src="/assets/icons/facebook.svg" className="h-5" alt="Facebook"/></a>
                <a href='https://Instagram.com/eclaecosystem' target="_blank" rel="noreferrer"><img src="/assets/icons/instagram.svg" className="h-5" alt="Instagram"/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer