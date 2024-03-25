import React from 'react'
import { CartContext } from '../contexts/CartContext'

export const useCartContext = () => {

	const { carrinho, setCarrinho } = React.useContext(CartContext)

	const changeAmount = (id, amount) => {
		return carrinho.map((item) => {
			if(item.id === id) item.quantidade += amount
			return item
		})
	}

	const adicionarProduto = (product) => {
		const hasItem = carrinho.some((item) => (
			item.id === product.id
		))

		if (!hasItem) {
			product.quantidade = 1

			setCarrinho((previousCart) => [...previousCart, product])
		} else {
			const newCart = changeAmount(product.id, 1)
			setCarrinho([...newCart])
		}
	}

	const removerProduto = (id) => {
		const product = carrinho.find((item) => item.id === id)
		const isLastItem = product.quantidade === 1
		
		if (isLastItem) {
			return setCarrinho((previousCart) =>
				previousCart.filter((item) => item.id !== id)
			)
		}
		const newCart = changeAmount(id, -1)
		setCarrinho([...newCart])
	}


	return { carrinho, setCarrinho, adicionarProduto, removerProduto }
}


