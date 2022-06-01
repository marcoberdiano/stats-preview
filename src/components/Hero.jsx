import heroimg from '../images/image-header-desktop.jpg';
import heroimgmobile from '../images/image-header-mobile.jpg';

const Hero = () => {
    return ( 
        <div className="hero-container">
            <div className="hero-left">
                <h1 className="hero-title">Get <span className='insights'>insights</span> that help your business grow.</h1>
                <p className="hero-subtitle">
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                    experience, and overall efficiency.
                </p>
                <div className="hero-stats">

                    <div className="hero-stat">
                        <h2>10k+</h2>
                        <p className='hero-category'>companies</p>
                    </div>

                    <div className="hero-stat">
                        <h2>314</h2>
                        <p className='hero-category'>templates</p>
                    </div>

                    <div className="hero-stat">
                        <h2>12M+</h2>
                        <p className='hero-category'>queries</p>
                    </div>

                </div>
            </div>

            <div className="hero-right">
                <img className='hero-img' src={heroimg} alt=''></img>
                <img className='hero-img-mobile' src={heroimgmobile} alt=''></img>
            </div>
        </div>
     );
}
 
export default Hero;