import Slider from './Shared/Slider';
import ServiceAdvertisement from './Shared/ServiceAdvertisement';
import CustomerReviews from './Shared/CustomerReviews';
import FeaturedProducts from './Shared/FeaturedProducts';
import TopFeaturedBrands from './Shared/TopFeaturedBrands';
import MechanicalKeyboardsInfo from './Shared/MechanicalKeyboardsInfo';

const Home = () => {
    return (
        <div>
            <Slider/>
            <ServiceAdvertisement/>
            <FeaturedProducts/>
            <CustomerReviews/>
            <TopFeaturedBrands/>
            <MechanicalKeyboardsInfo/>
        </div>
    );
};

export default Home;