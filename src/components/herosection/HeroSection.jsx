import fruitsveg from '../../assets/images/fruitsveg.png'


const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-image">
          <img src={fruitsveg} alt="fruitsveg" />
        </div>
        <div className="hero-text">
          <h3 className="welcome-message">Welcome to AgroApt</h3>
          <h1>Fresh & Healthy Organic Food</h1>
          <p className="order-message">Free shipping on all your order, we deliver, you enjoy.</p>
          <button className='purchase-message'>Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
