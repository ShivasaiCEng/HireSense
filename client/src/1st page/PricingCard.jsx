import  './PricingCard.css'
export default function PricingCard(){
    return(
        <> 
        <div className="PricingCard-container">  
        <div className="PricingCard">
        <h1>Simple</h1>
        <h1>One Time Purchase.</h1>
        <h3>Product key will be activated after you purchase the product</h3>
        </div>
        <div className="PricingCard2">
          <h3 style={{lineHeight:"10px"}}> <i class="fa-solid fa-indian-rupee-sign"></i>1,500</h3> 
            <h2>One Time Purchase</h2>
            <button className="BuyNow">Buy Now</button>
            <ul className='FeaturesList'>
                <li>No monthly fees. Pay once, use forever.</li>
                <li>Access to all features and updates.</li>
                <li>24/7 customer support.</li>
            </ul>
            </div>
            </div>

        </>
    )
       
}