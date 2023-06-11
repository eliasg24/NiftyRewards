import { useAccount } from '@gear-js/react-hooks';
import { useState } from 'react';
import './styles.css';

function Ecommerce () {
    const {account} = useAccount();

    const [ price, setPrice]=useState(0);
    const myVariable: number = 42;

  
  
    return (

      
        
<body>

    <header>
        <img src="https://i.imgur.com/cJZoTPj.png" width="200" height="200" alt="logo" />
    </header>

    <div className="container">
        <center>
        <div className="left">

            <div className="container-img">
                <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="imagen-producto" />
            </div>

        </div>
        </center>

        <div className="right">  
            <div className="container-info-product">
                <div className="container-price">

                   
                    <span id="myVariable">{("5GLH7cs1UQZzms87XeJkYPeR8ANhxPUtnpTqgjE2v7SLSBsh" === account?.address) ? myVariable/2 : myVariable} $</span>
                    
                        <i className="fa-solid fa-angle-right"/>
                </div>
            </div>
        

        
                <div className="container-details-product">
                    <div className="form-group">
                        <label htmlFor="colour"> Color </label>
                        <select name="colour" id="colour">
                                <option disabled selected value="">
                                    Select an option
                                </option>
                                <option value="rojo">Red</option>
                                <option value="blanco">White</option>
                                <option value="beige">Beige</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="size">Size</label>
                        <select name="size" id="size">
                                <option disabled selected value="">
                                    Select and option
                                </option>
                                <option value="40">40</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                            </select>
                    </div>
                    <button className="btn-clean">Clear</button>
                </div>

                <div className="container-add-cart">
                    <div className="container-quantity">
                        <input type="number" placeholder="1" value="1" min="1" className="input-quantity" />
                        <div className="btn-increment-decrement">
                            <i className="fa-solid fa-chevron-up" id="increment"/>
                            <i className="fa-solid fa-chevron-down" id="decrement"/>
                        </div>
                    </div>
                    <button className="btn-add-to-cart">
                            <i className="fa-solid fa-plus"/>
                            Add to cart
                    </button>   
                </div>


                <div className="container-description">
                    <div className="title-description">
                        <h4>Description</h4>
                        <i className="fa-solid fa-chevron-down"/>
                    </div>
                    <div className="text-description">
                        <p>
                            Introducing our high-end shoe, a pinnacle of elegance, craftsmanship, and luxury. Meticulously designed with meticulous attention to detail, this shoe embodies sophistication and refined taste. From the finest materials to the impeccable stitching, every
                            element is thoughtfully curated to create a footwear masterpiece.
                        </p>
                    </div>
                </div>

                <div className="container-additional-information">
                    <div className="title-additional-information">
                        <h4>Additional Information</h4>
                        <i className="fa-solid fa-chevron-down"/>
                    </div>
                    <div className="text-additional-information hidden">
                        <p>-----------</p>
                    </div>
                </div>

                <div className="container-reviews">
                    <div className="title-reviews">
                        <h4>Reviews</h4>
                        <i className="fa-solid fa-chevron-down"/>
                    </div>
                    <div className="text-reviews hidden">
                        <p>-----------</p>
                    </div>
                </div>

               
        </div>
    </div>


    </body>



    )
}

export { Ecommerce };