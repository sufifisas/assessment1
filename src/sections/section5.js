import {useState} from 'react'

export default function Section5() {
    
    const details = [<span>&#xe093;</span>,<span>&#xe094;</span>,<span>&#xe096;</span>,<span>&#xe09c;</span>,<span>&#xe09b;</span>]
    const list = 
    [{name:'alexis simpson',pos:'CEO & Developer',email:'a.simpson@unique.com',contact:'+1 911 (77) 222-1111'},
    {name:'steven cole',pos:'User Interface Designer',email:'s.cole@unique.com',contact:'+1 911 (77) 222-1111'},
    {name:'Frank piener',pos:'Sales Manager',email:'f.piener@unique.com',contact:'+1 911 (77) 222-1111'},
    {name:'ashley lennon',pos:'IT Specialist',email:'a.lennon@unique.com',contact:'+1 911 (77) 222-1111'},];

    const[hover,setHover] = useState('')
    
    const items = list.map((list,i) =>
        <li key={i}>
            <div className="person">
                <div className=" h-160 lg:h-200 xl:h-270 flex justify-center items-center relative w-full rounded-md rounded-b-none bg-black-400 link">
                    <div className="relative h-40 w-160" >
                        {details.map((detail,j)=>
                            <div className={`lg:hidden stack stack-${j}`} key={j}>
                                <p onMouseEnter={ (e)=>setHover(i + 'and' +  j) } onMouseLeave={ (e)=>setHover('') } className="text-lg cursor-pointer hover:text-grey-400 text-green absolute inset-0 m-auto font-bold font-icons flex justify-center items-center z-10 transition-all duration-300 ease-in-out"> 
                                    {detail}
                                </p>
                                <svg className='relative' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 53.281 53.28">
                                    <path className="transition-all duration-300 ease-in-out" fill={`${hover === i + 'and' +  j ? '#383838' : '#e4e4e4' } `} d="M960.828,1384.54l22.628,22.63a4,4,0,0,1,0,5.66l-22.628,22.62a3.986,3.986,0,0,1-5.657,0l-22.627-22.62a4,4,0,0,1,0-5.66l22.627-22.63A4,4,0,0,1,960.828,1384.54Z" transform="translate(-931.375 -1383.38)"/>
                                </svg>
                            </div>
                        )}
                        
                    </div>
                </div>
                <div className="relative h-140 w-full bottom-0 border-grey-600 border border-t-0 rounded-md rounded-t-none">
                    <div className="absolute -top-20 left-0 right-0 mx-auto">
                        <div className="relative text-center">
                        <p className="btn text-grey-400 bg-green name">{list.name}</p>
                        </div>
                    </div>
                    <div className="absolute bottom-15 left-0 right-0 mx-auto leading-fit text-center">
                        <p className="border-b border-grey-300 inline-block pb-15 text-black-600 text-sm">{list.pos}</p>
                        <p className="mt-15 text-sm text-grey-900 email"><span className="text-grey-900 font-icons text-bold mr-5 mb:mr-15 mt-15 text-lg">&#xe076;</span>{list.email}</p>
                        <p className="mt-15 text-sm text-grey-900"><span className="font-icons text-bold mr-5 mb:mr-15 mt-15 text-lg">&#xe090;</span>{list.contact}</p>
                    </div>
                </div>
            </div>
        </li>
    );
    return(
        <section className="bg-black-900">
            <div className="container pt-60 pb-140">
                <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-x-40 lg:gap-x-30">
                    {items}
                </ul>
                <a href="#"><p className="btn mt-50 w-full bg-green text-grey-400">view all works</p></a>
            </div>
        </section>
    )
}