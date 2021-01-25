import React from 'react'
import Product from '../Product/index'
import { Grid, Container } from '@material-ui/core'
import Banner from '../Banner/index.jsx'
import './style.css'

const Products = ({ products, addProduct }) => {
    return (
        <div>
            <Banner/>
            <Container id="products">
                <Grid container spacing={4}>
                    {
                        products.map((prod) => {
                            return (
                                
                                    <Grid key={prod.id} item xs={12} sm={6} md={4}>
                                        <Product product={prod} addProduct={addProduct} />
                                    </Grid>

                                
                            );
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
}
export default Products;

