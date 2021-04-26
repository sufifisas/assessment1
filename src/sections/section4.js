import Tag from '../images/tag.png'

export default function Section4() {
    const list = 
    [{icon:<span>&#xe00e;</span>,name:'responsive & multipurpose',desc:'Desktops, Tablets & Phones',content:'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'},
    {icon:<span>&#xe0f9;</span>,name:'easy customization',desc:'One Click Demo Content Installation',content:'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'},
    {icon:<span>&#xe033;</span>,name:'unlimited features',desc:'Shortcodes, Typography & Different Layouts',content:'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'},
    {icon:<span>&#xe056;</span>,name:'clean & modular coding',desc:'100% Clean, Valid & Well-Commented Coding',content:'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'},
    {icon:<span>&#xe07a;</span>,name:'the best e-commerce solutions',desc:'WooCommerce Fully Integration',content:'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'},
    {icon:<span>&#xe028;</span>,name:'awesome friendly support',desc:'Free Lifetime Support & Updates',content:'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'},];
    const items = list.map((list,i) =>
        <li className="flex mb-20 md:mb-0" key={i}>
            <div className="relative inline-block text-center mr-20 flex-shrink-0">
                <img src={Tag} alt="tag" className=""/>
                <p className="font-icons font-bold text-2xl text-grey-300 absolute leading-fit top-15 left-0 right-0 mx-auto">{list.icon}</p>
            </div>
            <div className="text-base leading-base">
                <h4 className="font-sans-bold text-black-600 uppercase">{list.name}</h4>
                <p className="text-sm text-grey-900 mt-10 mb-20">{list.desc}</p>
                <p className="text-black-500 leading-text">{list.content}</p>
            </div>
        </li>
    );

    return(
        <section>
            <div className="container pt-70 pb-90">
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-30 lg:gap-x-20 xl:gap-x-40 xl:gap-y-50">
                    {items}
                </ul>
            </div>
        </section>
    )
}