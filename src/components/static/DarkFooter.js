
const DarkFooter = () => {
  return (
    <footer className="bg-white w-full">
        <div className="w-4/5 py-8 flex md:flex-row flex-col justify-between items-center text-gray-900 mx-auto">
            <small>@2022. All Right Reserved</small>
            <div className="flex items-center gap-5 mt-3 md:mt-0">
                <a href='https://t.me/eclaecosystem'><img src="/assets/icons/darkTelegram.svg" className="h-6" alt="Telegram"/></a>
                <a href='https://twitter.com/EclaEcosystem'><img src="/assets/icons/darkTwitter.svg" className="h-6" alt="Twitter"/></a>
                <a href='https://eclaecosystem.medium.com/'><img src="/assets/icons/darkMedium.svg" className="h-6" alt="Medium"/></a>
                <a href='https://www.linkedin.com/in/ecla-ecosystem-8b5959235/'><img src="/assets/icons/darkLinkedin.svg" className="h-6" alt="LinkedIn"/></a>
                <a href='https://reddit.com/r/eclaecosystem'><img src="/assets/icons/darkReddit.svg" className="h-6" alt="Reddit"/></a>
                <a href='https://discord.gg/4YfWcEwkeG'><img src="/assets/icons/darkDiscord.svg" className="h-6" alt="Discord"/></a>
                <a href='https://Facebook.com/eclaecosystem'><img src="/assets/icons/darkFacebook.svg" className="h-6" alt="Facebook"/></a>
                <a href='https://Instagram.com/eclaecosystem'><img src="/assets/icons/darkInstagram.svg" className="h-6" alt="Instagram"/></a>
            </div>
        </div>
    </footer>
  )
}

export default DarkFooter