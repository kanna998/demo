import React from "react";
import { Link, Redirect } from "react-router-dom";
import { getProductList } from "./productActions";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const productList = await getProductList();
    this.setState({products:productList});
  }


  displayProducts = () => {
    return this.state.products.map((product) => {
      return (
        <div className="row" key={product.id}>
          <div className="col-4">
              <Link to={`/product?id:${product.id}`}> 
            <div className="card" style={{width:"18rem"}}>
              <img src={product.image} className="card-img-top" alt="product" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description}
                </p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="container-fluid">{this.displayProducts()}</div>;
  }
}
