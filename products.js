//PRODUCTS FETCH FROM JSON
let productsHTML = document.querySelector(".product-container");

fetch("products.json")
  .then((x) => x.json())
  .then((x) => {
    const apparel = x.Products.Apparel;
    apparel.forEach((y) => {
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
