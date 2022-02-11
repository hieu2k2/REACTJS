function Product(props) {
    let category = props.location.state;
    return (
        <div>
            <h3>Id selected {category.categoryId} </h3>
        </div>
    );
}
export default Product;