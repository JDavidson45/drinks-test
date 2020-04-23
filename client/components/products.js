import React from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../store/products'
import {Link} from 'react-router-dom'
import AddToCart from './addToCart'

class Products extends React.Component {
  componentDidMount() {
    this.props.getProducts()
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <div>
          {this.props.products.map(product => {
            return (
              <div className="drinks" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} />
                  <h3>Title: </h3>
                  <p>{product.title}</p>
                </Link>
                <h3>Description: </h3>
                <p>{product.description}</p>
                <h3>Price: </h3>
                <p>{product.price}</p>
                <h3>Quantity: </h3>
                <p>{product.quantity}</p>
                <h3>Type: </h3>
                <p>{product.category ? product.category.name : 'null'}</p>
                <AddToCart />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
//hello
const mapState = state => {
  return {
    products: state.products
  }
}
const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(getAllProducts())
  }
}
export default connect(mapState, mapDispatch)(Products)
