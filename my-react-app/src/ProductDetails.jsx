function ProductDetails(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;