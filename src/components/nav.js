import React,{useState} from 'react'
import Logo from '../images/logo.png'


export default function Nav() {
    const [menu, setMenu] = useState(false)
    const clicked = () => {
        setMenu(!menu)
    }
    const list = ['home','portfolio','blog','pages','features','mega menu','contact'];
    const navItems = list.map((list,i) =>
        <li key={i} className="mr-10 text-center text-black-600 text-tiny hover:bg-green hover:text-grey-400 transition-all duration-300 ease-in-out  rounded-md">
            <a href={`#${list}`}><p className="py-10 px-15">{list}</p></a></li>
    );

    return(
        <nav className="bg-grey-200 border-b border-solid border-grey-600 sticky top-0 z-50">
            <div className="h-70 lg:h-100 container flex items-center justify-between md:pl-20">
                <img src={Logo} className="w-60" alt="logo"/>
                <button className="font-icons lg:hidden text-4.5xl" onClick={clicked}>&#x61;</button>
                <div className={`${menu ? "absolute" : "hidden"} lg:flex lg:relative z-10 top-70 lg:top-0 bg-grey-200 left-0 right-0`}>
                    <ul className="uppercase lg:flex md:font-sans-bold text-tiny">
                        {navItems}
                        <li className="text-center py-10 font-icons font-bold text-green ml-5">&#x55;</li>
                    </ul>
                </div> 
            </div>
        </nav>
    )
}