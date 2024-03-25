import React from 'react'
import PropTypes from 'prop-types'

export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
	const [carrinho, setCarrinho] = React.useState([])
  
	return (
		<CartContext.Provider value={{ carrinho, setCarrinho }}>
			{children}
		</CartContext.Provider>
	)
}

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
