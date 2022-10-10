//PRODUCTS FETCH FROM JSON

//Declared where in the HTML file we wanted our json file code to be send to.
/* The Document method querySelector() returns the first element 
within the document that matches the specified selector, or group of selectors. */
let productsHTML = document.querySelector(".product-container"); //section in shop.html

//Used the Fetch API method:
/* This function fetches the file from the path where it is
saved and then returns the file as the response into the shop.html */
fetch("products.json")
  .then((x) => x.json()) //The fetch() method returns a Promise so you can use the then() methods
  .then((x) => {
    const apparel = x.Products.Apparel; //Stating the location of the json files we want
    apparel.forEach((y) => {
      //give parameter of "y" so we can call it back later
      //With productsHTML.innerHTML we arrange our data how we wanted to be displayed in the HTML
      productsHTML.innerHTML += `  
      <div class="product">
    <div class="card">
      <!--PRODUCT IMAGE-->
      <div class="card-img" id="thumbnail-img"><img class="card-img" src="${y.imgSrc}"/></div>
      <!--PRODUCT DETAILS-->
      <div class="card-body" >
        <div class="card-header">
        <!--PRODUCT NAME-->
          <a href="#" class="card-title">${y.name}</a>
        </div>
        <!--PRODUCT SIZE-->
        <div class="product-data">
          <span class="product-size"><strong>Size: </strong>${y.size} </span>
          <!--PRODUCT DESCRIPTION-->
          <span class="product-description">${y.description} </span>
        </div>
        <!--PRODUCT PRICE-->
        <div class="product-footer">
          <span class="product-price">
            $${y.price}
          </span>
          <!--ADD TO CART BUTTON-->
          <span class="card-btn">
            Add to Cart 
          </span>
        </div>
      </div>
    </div>
      </div>
      `;
    });
  });
