import { useSelector } from "react-redux"
const HeroSection = () => {
    const hero = useSelector(state=>state.pubbleHeroSection)
  return (
    <div className="w-full flex min:h-screen py-10">
        {hero&&(
            <div className="md_max_size my-auto h-full md:h-fit flex flex-col">
                {hero.map((item,index)=>{
                    return (
                        <div key={index} className="my-auto flex md:flex-row md:justify-between items-center flex-col gap-3 md:gap-5 lg:gap-5">
                            <div className="md:w-6/12 lg:w-5/12 flex flex-col gap-3">
                                <h1 className="xl:text-5xl md:text-4xl sm:text-5xl text-4xl text-white font-bold w-full tracking-wider">{item.fields.title}</h1>
                                <p className="text-white text-base md:text-base">{item.fields.subContent}</p>
                                <button className="md:text-base w-fit outline-none text-white flex items-center private_btn py-2.5 rounded px-4">Connect Wallet</button>
                            </div>
                            <div className="md:w-6/12 lg:w-5/12 w-full">
                                <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} />
                            </div>
                        </div>
                    )
                })}
            </div>
        )}
    </div>
  )
}

export default HeroSection