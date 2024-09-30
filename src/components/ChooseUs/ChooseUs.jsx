import banner from '../../assets/img/fam-1.png'
import bannerFam from '../../assets/img/fam-2.png'
import img from '../../assets/img/13.png'

const ChooseUs = () => {
    return (
        <section className="space-y-7">
            <div className='text-center'>
                <h1 className='font-bold text-4xl'>Why Choose Us?</h1>
            </div>
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md lg:flex-row w-full">
                    <img src={banner} alt="" className="h-80  aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-[#F5F5F5]	">
                        <h3 className="text-3xl font-bold">Join us for free</h3>
                        <p className="my-6 font-normal">You only have to pay for the property there is not any other charges. No hidden charges, No hassle.</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
                    <img src={img} alt="" className="h-80  aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-[#F5F5F5]">
                        
                        <h3 className="text-3xl font-bold">Best Properties within your budget</h3>
                        <p className="my-6 font-normal ">We assure you the best budget range. From medium to high we have everything.</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
                    <img src={bannerFam} alt="" className="h-80  aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-[#F5F5F5]	">
                        <h3 className="text-3xl font-bold">Our clients are everywhere</h3>
                        <p className="my-6 font-normal">We have more than a thousand of customers who chose us. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;