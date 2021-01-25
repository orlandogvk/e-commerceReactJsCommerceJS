import { Container, Typography, Button, Grid } from "@material-ui/core";
import logo from "./e-commerce.jpg";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h3">
              Bienvenido a DevOffice Shop
            </Typography>
            <Button className="shopping-button" href="#products">
              Compras
            </Button>
          </Grid>
          <Grid className="brand" item sm={6}>
            <img src={logo} alt="Brand-tv" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
