import './styles.css';

function Ecommer () {

const inputQuantity:any = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

// Funciones Click

btnIncrement?.addEventListener('click', () => {
    valueByDefault += 1;
    inputQuantity.value = valueByDefault;
});

btnDecrement?.addEventListener('click', () => {
    if (valueByDefault === 1) {
        return;
    }
    valueByDefault -= 1;
    inputQuantity.value = valueByDefault;
});

// Toggle
// Constantes Toggle Titles
const toggleDescription = document.querySelector(
    '.title-description'
);
const toggleAdditionalInformation = document.querySelector(
    '.title-additional-information'
);
const toggleReviews = document.querySelector('.title-reviews');

// Constantes Contenido Texto
const contentDescription = document.querySelector(
    '.text-description'
);
const contentAdditionalInformation = document.querySelector(
    '.text-additional-information'
);
const contentReviews = document.querySelector('.text-reviews');

// Funciones Toggle
toggleDescription?.addEventListener('click', () => {
    contentDescription?.classList.toggle('hidden');
});

toggleAdditionalInformation?.addEventListener('click', () => {
    contentAdditionalInformation?.classList.toggle('hidden');
});

toggleReviews?.addEventListener('click', () => {
    contentReviews?.classList.toggle('hidden');
});



    return (

        <>
        
<body>

    <header>
        <img src="https://i.imgur.com/cJZoTPj.png" width="200" height="200" alt="logo" />
    </header>

        <div className="container-img">
            <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="imagen-producto" />
        </div>
        <div className="container-info-product">
            <div className="container-price">
                <span>$95.00</span>
                <i className="fa-solid fa-angle-right"></i>
            </div>

            <div className="container-details-product">
                <div className="form-group">
                    <label htmlFor="colour">Color</label>
                   
                </div>
                <div className="form-group">
                    <label htmlFor="size">Size</label>
                   
                </div>
                <button className="btn-clean">Clear</button>
            </div>

            <div className="container-add-cart">
                <div className="container-quantity">
                    <input type="number" placeholder="1"  min="1" className="input-quantity" />
                    <div className="btn-increment-decrement">
                        <i className="fa-solid fa-chevron-up" id="increment"></i>
                        <i className="fa-solid fa-chevron-down" id="decrement"></i>
                    </div>
                </div>
                <button className="btn-add-to-cart">
						<i className="fa-solid fa-plus"></i>
						Add to cart
					</button>

            
                  <button className="btn-nft" >      
						NFT Holder
					</button>
            </div>


            <div className="container-description">
                <div className="title-description">
                    <h4>Description</h4>
                    <i className="fa-solid fa-chevron-down"></i>
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
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="text-additional-information hidden">
                    <p>-----------</p>
                </div>
            </div>

            <div className="container-reviews">
                <div className="title-reviews">
                    <h4>Reviews</h4>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="text-reviews hidden">
                    <p>-----------</p>
                </div>
            </div>

            <div className="container-social">
                <span>Shared</span>
                <div className="container-buttons-social">
                    <a href="#"><i className="fa-solid fa-envelope"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                </div>
            </div>
        </div>

    

    </body>

    </>

    )
}

export { Ecommer };