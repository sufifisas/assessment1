import Scent from '../images/scent.png'
import Vivid from '../images/vivid.png'
import Hobnob from '../images/hobnob.png'
import Burnabox from '../images/burnaboy.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Section8() {
    const list = [Scent,Vivid,Hobnob,Burnabox];
    const items = list.map((list,i) =>
        <div key={i} className="w-full md:w-270 h-160 opacity-30 bg-black-800 rounded-md inline-flex justify-center items-center hover:opacity-100 cursor-pointer">
            <img src={list}/>
        </div>
    );
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1170 },
          items: 4,
        },
        laptop: {
            breakpoint: { max: 1169.99, min: 1024 },
            items: 3,
          },
        tablet: {
          breakpoint: { max: 1023.99, min: 464 },
          items: 2,
          partialVisibilityGutter: 10
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          
        }
      };
    const CustomButtonGroupAsArrows = ({ next, previous }) => {
        return (
          <div className="hidden md:block absolute inset-0 m-auto">
            <div className="relative w-full h-full z-0">
            <button onClick={previous} className="custom-left-arrow font-icons w-30 h-30 bg-grey-400 rounded-md text-green text-2.5xl leading-base absolute md:-left-45 lg:-left-60 md:top-0 bottom-0 m-auto">&#x44;</button>
            <button onClick={next} className="custom-right-arrow font-icons w-30 h-30  rounded-md bg-green text-grey-400 text-2.5xl leading-base absolute md:-right-45 lg:-right-60 md:top-0 bottom-0 m-auto ">&#x45;</button>
            </div>
          </div>
        );
      };
      
      
    return(
        <section className="bg-black-900">
            {/* <div className="container-c mx-auto py-50 relative flex items-center">
            <button className="font-icons w-30 h-30 bg-grey-400 rounded-md text-green text-2.5xl leading-base mr-5 absolute -left-60 ">&#x44;</button>
                <ul className="flex ">
                    {items}   
                </ul>
                <button className="font-icons w-30 h-30  rounded-md bg-green text-grey-400 text-2.5xl leading-base mr-5 absolute -right-60 ">&#x45;</button>
            </div> */}
            <div className="relative container py-50">
            <Carousel
            ssr
            partialVisible
            deviceType="mobile"
            itemClass="image-item"
            responsive={responsive}
            arrows={false}  
            renderButtonGroupOutside={true}
            customButtonGroup={<CustomButtonGroupAsArrows />}
            containerClass="md:w-600 lg:w-900 xl:w-1200 z-20"
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            >
            {items}
            </Carousel>
            </div>
        </section>
    )
}