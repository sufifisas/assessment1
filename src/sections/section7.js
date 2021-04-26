import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Section7() {
    const list = ['home','portfolio','blog','1','1','2','2','1'];
    const items = list.map((list,i) =>
        <span key={i}>
        <p className="btn bg-grey-400 text-green inline-flex">alexis simpson &nbsp;<span className="italic font-sans text-sm text-grey-900 capitalize">- CEO & Developer</span></p>
                <p className="pt-20 pb-30 text-xl lg:text-2xl text-grey-400 leading-text quote relative">Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.</p>
        </span>
    );
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          
        }
      };
      const CustomButtonGroupAsArrows = ({ next, previous }) => {
        return (
          <div className="absolute left-0 right-0 mx-auto">
            <button onClick={previous} className="custom-left-arrow font-icons w-30 h-30 bg-grey-400 rounded-md text-green text-2.5xl leading-base mr-5">&#x44;</button>
            <button onClick={next} className="custom-right-arrow font-icons w-30 h-30  rounded-md bg-black-900 text-grey-400 text-2.5xl leading-base">&#x45;</button>
          </div>
        );
      };
    return(
        <section className="bg-green relative">
            <div className="absolute -top-25 left-0 right-0 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 53.281 53.28">
                        <path fill="#383838"  d="M960.828,1384.54l22.628,22.63a4,4,0,0,1,0,5.66l-22.628,22.62a3.986,3.986,0,0,1-5.657,0l-22.627-22.62a4,4,0,0,1,0-5.66l22.627-22.63A4,4,0,0,1,960.828,1384.54Z" transform="translate(-931.375 -1383.38)"/>
                    </svg>
                    <div className="absolute inset-0 m-auto font-icons text-grey-400 text-2xl flex items-center justify-center leading-fit">
                        <p className="transform rotate-180">&#x7b;</p>
                    </div>
                </div>
            <div className="container pt-80 pb-80 text-center relative">
                <Carousel
                    ssr
                    deviceType="mobile"
                    itemClass="image-item"
                    responsive={responsive}
                    arrows={false}  
                    renderButtonGroupOutside={true}
                    customButtonGroup={<CustomButtonGroupAsArrows />}
                    containerClass=""
                    itemClass=""
                    sliderClass=""
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    infinite={true}
                    >
                    {items}
                    </Carousel>
            </div>
        </section>
    )
}