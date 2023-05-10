import React, { useState } from "react";
import {
  Grid,
  Typography,
  CardMedia,
  Button,
  IconButton,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons"; // Import the Favorite icon
import "../styles/ProductInfo.css";
import CopyRight from "./CopyRight";
import QuantitySelector from "./QuantitySelector";

function ProductInfo({ product, isLoading }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlistSelected, setIsWishlistSelected] = useState(false); // Add a state to track the wishlist button

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCartClick = () => {
    // Add code to add the selected product to the cart
  };

  const handleWishlistClick = () => {
    setIsWishlistSelected(!isWishlistSelected);
  };

  return (
    <div className="productInfoContainer">
      <Grid container spacing={3}>
        <div className="productImageList">
          {product.images.map((image) => (
            <IconButton
              key={image}
              onClick={() => handleImageClick(image)}
              className={
                selectedImage === image ? "" : ""
              }
            >
              <img src={image} alt={product.name} />
            </IconButton>
          ))}
        </div>
        <CardMedia
          className="productImage"
          image={selectedImage}
          title={product.name}
        />
        <div className="productDetails">
          <Typography variant="h4" gutterBottom className="productName">
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            gutterBottom
            className="productDescription"
          >
            {product.description}
          </Typography>
          <div className="prices">
            <Typography
              variant="h5"
              color="primary"
              gutterBottom
              className="productPrice"
            >
              ${product.price.toFixed(2)}
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              gutterBottom
              className="productCrossPrice"
            >
              ${(product.price * 1.2).toFixed(2)}
            </Typography>
          </div>

          <Typography
            variant="h6"
            gutterBottom
            className="sizeTitle"
          >
            Sizes:
          </Typography>
          <div className="sizeList">
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant={
                  selectedSize === size ? "contained" : "outlined"
                }
                color="primary"
                onClick={() => handleSizeClick(size)}
                className="sizeButton"
              >
                {size}
              </Button>
            ))}
          </div>
          <div className="quantityContainer">
            <Typography
              variant="h6"
              gutterBottom
              className="quantityTitle"
            >
              Quantity:
            </Typography>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
          <div className="addButtons">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="addToCartButton"
              onClick={handleAddToCartClick}
            >
              Add to Bag
            </Button>
            <Button
              variant="contained"
              color="outline-primary"
              size="large"
              className="addToWishlistButton"
              onClick={handleWishlistClick}
            >
              Add to Wishlist
              {isWishlistSelected ? (
                <Favorite className="favoriteIcon" />
              ) : (
                <Favorite className="favoriteIcon" color="disabled" />
              )}
            </Button>
          </div>
        </div>
      </Grid>
      <CopyRight isLoading={isLoading} />
    </div>
  );
}

export default ProductInfo;