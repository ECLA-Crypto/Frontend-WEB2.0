const Footer = () => {
  return (
    <footer className="border-t border-white w-full mt-20">
        <div className="w-4/5 py-8 flex md:flex-row flex-col justify-between items-center text-white mx-auto">
            <small>@2022. All Right Reserved</small>
            <div className="flex items-center gap-3 mt-3 md:mt-0">
                <a href='https://t.me/eclaecosystem'><img src="/assets/icons/telegram.svg" className="h-5" alt="Telegram"/></a>
                <a href='https://twitter.com/EclaEcosystem'><img src="/assets/icons/twitter.svg" className="h-5" alt="Twitter"/></a>
                <a href='https://eclaecosystem.medium.com/'><img src="/assets/icons/Vector.svg" className="h-5" alt="medium"/></a>
                <a href=' https://www.linkedin.com/in/ecla-ecosystem-8b5959235/'><img src="/assets/icons/linkedin.svg" className="h-5" alt="LinkedIn"/></a>
                <a href='https://reddit.com/r/eclaecosystem'><img src="/assets/icons/reddit.svg" className="h-5" alt="Reddit"/></a>
                <a href='https://discord.gg/4YfWcEwkeG'><img src="/assets/icons/discord.svg" className="h-5" alt="Discord"/></a>
                <a href='https://Facebook.com/eclaecosystem'><img src="/assets/icons/facebook.svg" className="h-5" alt="Facebook"/></a>
                <a href='https://Instagram.com/eclaecosystem'><img src="/assets/icons/instagram.svg" className="h-5" alt="Instagram"/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer