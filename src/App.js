
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeA: "Vegetables",

      veg1: "Capsicum",
      veg1Img:
        
        "https://tracidmitchell.com/wp-content/uploads/2011/09/bell-peppers.jpg",
      CapsicumQuantity: 20,
      
      CapsicumPrice: 50,
      CapsicumType: "Vegetable",
      

      veg2: "Green beans",
      veg2Img:
        
       "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/285/285753/beans.jpg?w=1155&h=1541",
      GreenBeansQuantity: 80,
      GreenBeansPrice: 50,

      veg3: "RootVeges",
      veg3Img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRehobfGOG6C8XZmcN5wYuC_iC-ge6QY_otIg&usqp=CAU",
      RootVegesQuantity: 80,
      RootVegesPrice: 100,

    

      typeB: "Fruits",

      fruit1: " Strawberry",
      fruit1Img:
        "https://qph.fs.quoracdn.net/main-qimg-9ccc1a65898798235ab3c6e9eb2bc036-c",
      StrawberryQuantity: 40,
      StrawberryPrice: 120,

      fruit2: " Guavas",
      fruit2Img:
        "https://i.pinimg.com/originals/a9/b3/30/a9b330800675bfa11265cdc831ffb282.jpg",
      GuavasQuantity: 40,
      GuavasPrice: 80,

      fruit3:"Mango",
      fruit3Img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT56wNNkAh9kSoj-hasT1PUN3CEwWRh_fC_BA&usqp=CAU",
      MangoQuantity: 50,
      MangoPrice: 100,
  
    
    };
  
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>GROCERY DEALS</h2>
        <h>  {this.state.type} </h>

        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg1Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Capsicum</h5>
              <p> Kes: {this.state.CapsicumPrice}</p>
              <p> Quantity: {this.state.CapsicumQuantity}</p>
              <p>Type:{this.state.CapsicumType}</p>
              
              <button className="add-to-cart-btn" onClick="saveItem()">
              Add to cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Green beans</h5>
              <p> kes {this.state.GreenBeansPrice}</p>
              <p> Quantity {this.state.GreenBeansQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add to cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg3Img} alt="" />
            </div>
            <div className="product-info">
              <h5>RootVeges</h5>
              <p> Kes {this.state.RootVegesPrice}</p>
              <p> Quantity {this.state.RootVegesQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add to cart
              </button>
            </div>
          </div>

          
    
          <div style={{ textAlign: "center" }}></div>
          <h3></h3>
        <h>  {this.state.type} </h>
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.fruit1Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Strawberry</h5>
              <p> Kes {this.state.StrawberryPrice}</p>
              <p> Quantity {this.state.StrawberryQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add to cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.fruit2Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Guavas</h5>
              <p> Kes {this.state.GuavasPrice}</p>
              <p> Quantity {this.state.GuavasQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add to cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.fruit3Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Mango</h5>
              <p> Kes {this.state.MangoPrice}</p>
              <p> Quantity {this.state.MangoQuantity} </p>
              
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add to cart
              </button>
            </div>
          </div>

</section>
      </div>
     );
     
  }
}
 

export default App