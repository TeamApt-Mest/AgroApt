import apple from '../assets/images/apple.jpg';
import mango from '../assets/images/mango.png';
import greenpepper from '../assets/images/greenpepper.png';
import fruity from '../assets/images/fruity.png';
import mushroom from '../assets/images/mushroom.png'
import Broccoli from '../assets/images/Broccoli.png';
import garlic from '../assets/images/garlic.png';
import carrot from '../assets/images/carrot.png';

const Features = () => {
    return (
        <div className='products'>
            <div className='feature-heading'>
                <h2>Featured Products</h2>
            </div>

            <div className='featured-products'>
                <div className='featured-item'>
                    <img
                        src={apple} alt="fresh apple" />
                    <div>Green Apple<br />$5.99</div>
                </div>
                <div className='featured-item'>
                    <img
                        src={mango} alt="mango" />
                    <div>Mango <br />$6.99</div>
                </div>
                <div className='featured-item'>
                    <img
                        src={carrot} alt="corn" />
                    <div>Carrot <br />$3.99</div>
                </div>
                <div className='featured-item'>
                    <img
                        src={Broccoli} alt="Broccoli" />
                    <div>Broccoli <br />$4.99</div>
                </div>
                <div className='featured-item'>
                    <img
                        src={greenpepper} alt="Green pepper" />
                    <div>Green Pepper <br />$7.99</div>
                </div>
                <div className='featured-item'>
                    <img
                        src={garlic} alt="garlic" />
                    <div>Garlic <br />$8.00</div>
                </div>
                <div className='featured-item'>
                    <img
                        src={fruity} alt="Green Chili" />
                    <div>Fruity <br />$8.50</div>
                </div>
                <div className='featured-item'>
                    <img
                        src={mushroom} alt="Green Chili" />
                    <div>Mushroom <br />$9.00</div>
                </div>
            </div>
        </div>)
}

export default Features