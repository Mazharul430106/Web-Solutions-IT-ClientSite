import Image from "next/image";
import Img from '../../assets/banner.webp'

const Banner = () => {
    return (
        <div className="px-[5%] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 py-16 bg-[#F4F4F4]">
            <div className="w-full lg:max-w-[700px]">
                <h2 style={{ lineHeight: '80px' }} className=" text-secondary xl:text-7xl lg:text-5xl md:text-4xl text-4xl font-semibold mb-10 xl:mt-16 lg:mt-10">Your  <span className="text-primary" > Trusted Path </span> to Technological <span className="text-primary"> Success </span></h2>
                <div className="text-center lg:text-start">
                    <button className="btn btn-primary rounded-none w-[180px] ">Learn More</button>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <Image src={Img}></Image>
            </div>
        </div>
    );
};

export default Banner;