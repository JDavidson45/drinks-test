import React from 'react'
import {addProductToCart} from '../store/cart'
import {connect} from 'react-redux'

class AddToCart extends React.Component {
  addProduct(product) {
    console.log('clicked')
    this.props.addItem(product)
  }
  render() {
    // const productId = this.props.id
    // const product = this.props.product
    return (
      <button
        type="submit"
        onClick={() => this.addProduct({productId: 1, quantity: 3, price: 12})}
      >
        Add To Cart
      </button>
    )
  }
}

// const mapState = (state) => ({
//   product: state.product,
// })

const mapDispatch = dispatch => ({
  addItem: product => dispatch(addProductToCart(product))
})

export default connect(null, mapDispatch)(AddToCart)
