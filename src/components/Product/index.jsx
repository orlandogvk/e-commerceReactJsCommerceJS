import "./style.css"
import CustomCard from "../CustomCard";

const Product = ({ product, addProduct }) => {
    return (
        <CustomCard
            product={product}
            addProduct={addProduct}
        />
    )

}

export default Product
