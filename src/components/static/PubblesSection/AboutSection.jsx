import { useSelector } from "react-redux"

const AboutSection = () => {
    const images  = useSelector(state=>state.pubbleAboutImages)
    const content  = useSelector(state=>state.pubbleAboutContent)
  return (
    <div className="w-full flex py-10">
        <div className="md_max_size my-auto h-full md:h-fit flex">
            <div className="flex w-full h-fit flex-col md:flex-row justify-between categories_Section items-center">
                {images&&(
                    <div className="w-full md:w-6/12 flex flex-wrap">
                        {images.map((item,index)=>{
                            return(
                                <div className="w-1/2 p-3 md:p-5">
                                    <div className="h-full md:w-40 lg:w-52 lg:h-52 w-full md:h-40 rounded-full">
                                        <img key={index} src={item.fields.image.fields.file.url} className='w-full h-full rounded-full' alt={item.fields.image.fields.title}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
                {content&&(
                    <div className="w-full md:w-5/12">
                        {content.map((item,index)=>{
                            return (
                                <div className="flex flex-col gap-4 bg-eclaLightSkyBlue p-5 lg:p-10 rounded">
                                    <h4 className="font-semibold lg:text-4xl text-2xl text-white">{item.fields.title}</h4>
                                    <div className="flex flex-col  gap-3 lg:gap-4">
                                        {item.fields.contents.map((item,index)=>{
                                            return(
                                                <p key={index} className="text-white lg:text-base text-sm">{item.content}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default AboutSection