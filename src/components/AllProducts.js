import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CircularProgress, 
  Box,
} from "@material-ui/core";
import CustomStyles from "./customStyle";
import ProductInfo from "./ProductInfo";
import CopyRight from "./CopyRight";
import { renderPagination } from "./pagination";
import '../styles/AllProducts.css';
import StarIcon from '@material-ui/icons/Star';
import Group from "./group";
function AllProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const classes = CustomStyles();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://5ac0f813-aa9e-4010-8824-c80322e15893.mock.pstmn.io/api/products?page=${currentPage}`
      )
      .then((response) => {
        const productsArray = response.data.response.data; // access the array of products
        setProducts(productsArray);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [currentPage]);

  const handlePageClick = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const handleProductClick = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  return (
    <div className={classes.root}>
      <Group />
      {isLoading ? (
        <div className={classes.loadingContainer}>
          <CircularProgress />
          <Typography variant="h6" gutterBottom>
            Please wait...
          </Typography>
        </div>
      ) : selectedProduct ? (
        <ProductInfo isLoading={isLoading} product={selectedProduct} />
      ) : (
        <div>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card
                  className={classes.card}
                  onClick={() => handleProductClick(product)}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.images[0]}
                    title={product.name}
                    style={{ height: 0, paddingTop: "100%" }}
                  />
                  <CardContent className={classes.cardContent}>
                    <div>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography className="description">{product.description}</Typography>
                      <div className="rate">
                        <StarIcon className="rateIcon" />
                        <Typography>{product.rate}</Typography>
                      </div>
                    </div>
                    <div className="prices">
                      <Typography variant="h6" color="textSecondary">
                        ${product.price}
                      </Typography>
                      <Typography variant="h6" className="oldPrice" color="textSecondary">
                        ${(product.price * 1.2).toFixed(2)}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Box mt={3} />
          </Grid>
          <div className={classes.paginationContainer}>
            <div className="pagination">{renderPagination(currentPage, handlePageClick)}</div>
            <div className="textShow">
              Showing {products.length} items out of 16 items
            </div>
          </div>
        </div>
      )}
      <CopyRight isLoading={isLoading} />
    </div>
  );
}

export default AllProducts;