export default function diamond(props) {
    return(
        <div className={"flex items-center transform rotate-"+props.rotate}>
            <div className="diamond-sm bg-green opacity-50"></div>
            <div className="diamond bg-green opacity-75"></div>
            <div className="diamond-md bg-green"></div>
        </div>
    )
}