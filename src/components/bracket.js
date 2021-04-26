import BracketLeft from './bracketLeft'

export default function bracket(props) {
    return (
        <div className="relative w-full uppercase leading-base">
            <div className="flex justify-between items-center">
                <div className="h-6 bg-transparent border-t border-white border-b flex-grow"></div>
                <div className="flex sm:mx-10">
                    <BracketLeft rotate={0}/>
                    {props.children}
                    <BracketLeft rotate={180}/>
                </div>
                <div className="h-6 bg-transparent border-t border-white border-b flex-grow"></div>
            </div>
        </div>
    )
}