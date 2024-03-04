import "./Home.sass";
import SideBar from "../../components/side-bar/SideBar";
import Cards from "../../components/cards/Cards";

const Home = () => {
    const cards = [
        {
            image: 'https://www.bottega7.com/media/filer_public_thumbnails/filer_public/f5/98/f5986e4f-b733-4ab8-aa3b-0d474d257464/copertina_img-theme-park_v2.jpg__1200x700_q100_crop_subsampling-2_upscale.jpg',
            title: 'Paracetamol'
        },
        {
            image: 'https://www.bottega7.com/media/filer_public_thumbnails/filer_public/f5/98/f5986e4f-b733-4ab8-aa3b-0d474d257464/copertina_img-theme-park_v2.jpg__1200x700_q100_crop_subsampling-2_upscale.jpg',
            title: 'Paracetamol'
        },
        {
            image: 'https://www.bottega7.com/media/filer_public_thumbnails/filer_public/f5/98/f5986e4f-b733-4ab8-aa3b-0d474d257464/copertina_img-theme-park_v2.jpg__1200x700_q100_crop_subsampling-2_upscale.jpg',
            title: 'Paracetamol'
        }
    ]
    return (
        <div className='home'>
            <div className='home__sidebar'>
                <SideBar />
            </div>
            <div className='home__cards'>
                <Cards cards={cards} />
            </div>
        </div>
    );
};

export default Home;
