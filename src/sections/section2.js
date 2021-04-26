import Bracket from '../components/bracket'

export default function Section2() {
    const list = 
    [{icon:<span>&#xe00e;</span>,
    title:'responsive & multipurpose',
    content:'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.'},
        {icon:<span>&#xe0f9;</span>,
        title:'easy customization',
        content:'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.'},
            {icon:<span>&#xe028;</span>,
            title:'awesome friendly support',
            content:'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.'}];

    const items = list.map((list,i) =>
        <li key={i} className="text-base inline-block pb-40 md:pb-0 item">
            <div className="w-100 h-100 mb-30 rounded-full bg-black-900 flex justify-center items-center mx-auto item1">
                <p className="font-icons text-4xl font-bold text-grey-400">{list.icon}</p>
            </div>
            <h3 className="uppercase font-sans-bold text-black-600 mb-15 leading-base">{list.title}</h3>
            <p className="text-black-500 text-base inline-block mb-20">{list.content}</p>
            <a href='#' className="item2 p-10 border border-grey-600 font-sans-bold uppercase text-xs text-black-400 rounded-md hover:bg-green hover:text-grey-500">read more</a>
        </li>
    );
    return(
        <section>
            <div className="pt-60 text-center container pb-120">
                <Bracket>
                    <h2 className="mx-20 my-20 text-black-900 text-2xl lg:text-3xl font-sans-bold">
                        what we <span className="text-green">offer</span>
                    </h2>
                </Bracket>
                <p className="text-lg text-black-400 mb-50 md:leading-base">
                    We offer our customers the best services & solutions, this is our main services&nbsp;list
                </p>
                <ul className="md:grid grid-cols-3 gap-x-28">
                    {items}
                </ul>
            </div>
        </section>
    )
}