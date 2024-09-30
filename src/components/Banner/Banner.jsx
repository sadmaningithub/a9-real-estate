import imgone from '../../assets/img/1.png'
import imgtwo from '../../assets/img/2.png'
import imgthree from '../../assets/img/3.png'


const Banner = () => {
  return (
    <div className='z-0'>
      <swiper-container navigation="true" pagination="true" slides-per-view="1" mousewheel-invert="true" loop="true" autoplay-delay="3500" autoplay-disable-on-interaction="false"
        breakpoints={
          JSON.stringify({

            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            }
          })
        }>
        <swiper-slide>
          <div className='relative text-center bg-gradient-to-r from-slate-900 to bg-slate-500'>
            <div className=' opacity-55'>
              <img className='w-full' src={imgone} alt="" />
            </div>
            <div className='absolute flex flex-col justify-center items-center space-y-6 w-full inset-y-1/4 text-white'>
              <h1 className='text-6xl'>Welcome</h1>
              <h3 className='text-4xl text-center'>Find Your Dream Home</h3>
              <p className='text-lg max-w-4xl text-center'>Discover a wide range of properties that suit your lifestyle and budget. Let us help you find the perfect place to call home.</p>
              
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className='relative bg-gradient-to-r from-slate-900 to bg-slate-500'>
            <div className='opacity-55'>
              <img className='w-full' src={imgtwo} alt="" />
            </div>
            <div className='absolute flex flex-col justify-center items-center space-y-6 w-full inset-y-1/4 text-white'>
              <h1 className='text-6xl text-center'>Homes for Every Lifestyle</h1>
              <p className='text-lg max-w-4xl	text-center'>From cozy apartments to sprawling estates, find a home that matches your unique lifestyle. Begin your search with us. Discover beautiful neighborhoods and vibrant communities. Find a home where you will love to live and thrive.</p>
              
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className='relative bg-gradient-to-r from-slate-900 to bg-slate-500'>
            <div className='opacity-55'>
              <img className='w-full' src={imgthree} alt="" />
            </div>
            <div className='absolute flex flex-col justify-center items-center space-y-6 w-full inset-y-1/4 text-white'>
              <h1 className='text-6xl text-center'>Discover Exceptional Properties</h1>
              <p className='text-lg max-w-4xl	text-center'>Explore a collection of exceptional properties tailored to your needs. Discover the best in real estate with us. Uncover homes that bring joy and comfort to your life. Start your journey towards finding your happy place today.</p>
              
            </div>
          </div>
        </swiper-slide>

      </swiper-container>
    </div>


  );
};

export default Banner;