import Head from "next/head";
import Image from "next/image";
import AboutImg from '../../assets/about.PNG';

const About = () => {
    return (
        <div className="px-[5%] py-12 ">
            <Head>
                <title>About</title>
            </Head>
            <div className="text-center">
                <div className="w-full mx-auto xl:max-w-[600px] lg:max-w-[600px]">
                    <h2 className="text-3xl font-semibold mb-5 text-secondary">About Us</h2>
                    <p>IT services encompass a broad range of activities related to information technology, including hardware, software, networks, and systems. </p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mb-14 mt-12 ">
                <div className=" ">
                    <Image className="w-full" src={AboutImg}></Image>
                </div>
                <div className="mt-10">
                    <div>
                        <p className="mb-5">IT services encompass a broad range of activities related to information technology, including hardware, software, networks, and systems. IT service providers offer technical support, consulting, and solutions to help businesses and individuals manage their IT infrastructure and optimize their technology resources. Here are some common areas of IT services</p>
                        <p className="mb-5">Technical Support: IT service providers offer help desk support to address technical issues and provide assistance to users with hardware, software, and network problems. This can be done remotely or on-site.</p>


                        <p className="mb-5">Security Services: IT service providers offer cybersecurity solutions to protect organizations from threats such as malware, hacking, data breaches, and phishing attacks. They may perform vulnerability assessments, implement security measures, and provide incident response services.</p>

                        <p>Software Development and Integration: IT service providers can develop custom software applications tailored to specific business needs or integrate existing software systems to enhance productivity and efficiency.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;