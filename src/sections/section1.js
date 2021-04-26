import Bracket from '../components/bracket'

export default function Section1() {
    return(
        <section className="h-screen w-full bg-home">
            <div className="container lg:leading-base">
                <div className="flex justify-center md:justify-start items-center min-h-screen">
                    <div className="inline-block text-center uppercase">
                        <h4 className="text-black-900 text-base lg:text-lg xl:text-xl">what are you waiting for ?</h4>
                        <h1 className="mb-10 lg:mt-10 lg:mb-20 text-black-900 uppercase font-sans-bold text-3xl sm:text-4xl lg:text-4.5xl xl:text-6xl">let’s be creative !</h1>
                        <h4 className="p-10 text-left bg-black-800 text-white rounded-md myriad italic">lorem ipsum dolor si amet</h4>
                        <Bracket>
                            <h2 className="mx-20 my-30 lg:my-50 text-black-900 lg:text-3xl font-sans-bold text-2xl"><span className="text-green">start</span> doing that</h2>
                        </Bracket>
                        <div className="font-icons text-green animate-bounce text-4xl lg:text-4.5xl xl:text-6xl">&#x3b;</div>
                    </div>
                </div>
            </div>      
        </section>
    )
}
