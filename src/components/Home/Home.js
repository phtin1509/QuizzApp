import videoHomepage from '../../assets/video-homepage.mp4';
import '../../App.scss';
const Home = (props) => {
    return (
        <div className='homepage-contain'>
            <video loop muted autoPlay controls=''>
                <source src={videoHomepage} type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='content-main'>Get to know your customers with forms worth filling out</div>
                <div className='content-sub'>Collect all the data you need to understand customers with forms designed to be refreshingly different.</div>
                <div className='content-small'>
                    <button className='btn btn-dark'>Get Started!</button>
                </div>

            </div>
        </div>
    );
}

export default Home;