import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    CardActionArea,
    Button,
  } from "@material-ui/core";
  import { ShoppingCart } from "@material-ui/icons";
  import "./style.css";
  
  const CustomCard = ({
    basket,
    product,
    addProduct,
    updateProduct,
    RemoveItemFromBasket,
  }) => {
    return (
      <Card className="custom-card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"

            className="card-image"
            image={product.media.source}
            title="Contemplative Reptile"
          />
          <CardContent className="content">
            <Typography
              className="title"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {product.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        {basket && (
          <CardActions>
            <Typography
              className="basket-item-price"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {product.line_total.formatted_with_symbol}
            </Typography>
          </CardActions>
        )}
        <CardActions className="actions-content">
          {!basket && (
            <>
              <Typography
                className="price"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {product.price.formatted_with_symbol}
              </Typography>
              <Button
                size="large"
                className="custom-button"
                onClick={() => {
                  addProduct(product.id, 1);
                }}
              >
                <ShoppingCart /> Agrega al carrito
              </Button>
            </>
          )}
          {basket && (
            <>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => {
                  RemoveItemFromBasket(product.id);
                }}
              >
                Quitar
              </Button>
              <>
                <Button
                  size="small"
                  variant="outlined"
                  className="increase-product-quantity"
                  onClick={() => {
                    updateProduct(product.id, product.quantity + 1);
                  }}
                >
                  +
                </Button>
                <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  onClick={() => {
                    updateProduct(product.id, product.quantity - 1);
                  }}
                >
                  -
                </Button>
              </>
            </>
          )}
        </CardActions>
      </Card>
    );
  };
  export default CustomCard;