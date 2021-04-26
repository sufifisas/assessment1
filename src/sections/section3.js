import Bracket from '../components/bracket'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from "../AnimatedProgressProvider";

export default function Section3() {
    const list = 
    [{value:75,name:'web design'},
    {value:92,name:'web development'},
    {value:68,name:'speed optimization'},
    {value:100,name:'customer support'},
    {value:83,name:'marketing'},
    {value:50,name:'advertisement'}];
    
    const items = list.map((list,i) =>
    <li className="font-sans-bold flex flex-col items-center" key={i}>
    <div className="lg:w-120">
        <AnimatedProgressProvider
            valueStart={0}
            valueEnd={list.value}
            duration={1.4}
            easingFunction={easeQuadInOut}
        >
            {value => {
            const roundedValue = Math.round(value);
            return (
                <CircularProgressbarWithChildren
                value={value}
                strokeWidth= {3}
                text={<tspan className="text-green pt-20 text-2xl md:text-3.5xl" dy={0}>{roundedValue}<tspan className="text-sm md:text-lg">%</tspan></tspan>}
                styles={buildStyles({ 
                    pathTransition: "none",
                    strokeLinecap: "butt",
                    pathColor: "#00a99d",
                    textColor: "#e4e4e4",
                    rotation: 0.75,
                })}
                >
                </CircularProgressbarWithChildren>
            );
            }}
        </AnimatedProgressProvider>
    </div>
    <p className="font-sans-bold pt-20 text-black-400 text-base uppercase leading-base">{list.name}</p>
</li>
    );
    return(
        <section className="bg-black-900 relative">
                <div className="absolute -top-25 left-0 right-0 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 53.281 53.28">
                        <path fill="#00a99d" d="M960.828,1384.54l22.628,22.63a4,4,0,0,1,0,5.66l-22.628,22.62a3.986,3.986,0,0,1-5.657,0l-22.627-22.62a4,4,0,0,1,0-5.66l22.627-22.63A4,4,0,0,1,960.828,1384.54Z" transform="translate(-931.375 -1383.38)"/>
                    </svg>
                    <div className="absolute inset-0 m-auto font-icons text-grey-400 text-2xl flex items-center justify-center leading-fit">
                        <p>&#xe085;</p>
                    </div>
                </div>
            <div className="container pt-60 text-center pb-70">
                <Bracket>
                    <h2 className="mx-20 my-20 text-grey-400 text-2xl lg:text-3xl font-sans-bold">our powerful <span className="text-green">skills</span></h2>
                </Bracket>
                <p className="text-lg text-black-600 mb-50 md:leading-base">We’re good and experienced at different things and areas and we promise about qulity of our works</p>
                <ul className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-40 md:gap-x-60 lg:flex justify-between px-15 md:px-0">
                    {items}
                </ul>
            </div>

        </section>
    )
}