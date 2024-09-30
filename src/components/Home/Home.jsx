import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChooseUs from "../ChooseUs/ChooseUs";
import FeatureProperties from "../FeatureProperties/FeatureProperties";
import Leaflet from "../Leaflet/Leaflet";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureProperties></FeatureProperties>
            <Category></Category>
            <Leaflet></Leaflet>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;