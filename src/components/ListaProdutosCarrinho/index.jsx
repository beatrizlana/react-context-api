import React from 'react'
import PropTypes from 'prop-types'
import ItemCarrinhoSuspenso from '@/components/CarrinhoSuspenso/ItemCarrinhoSuspenso'
import ItemCarrinho from '@/components/ItemCarrinho'
import { useLocation } from 'react-router-dom'

const ListaProdutosCarrinho = ({ carrinho }) => {

	const location = useLocation()

	return (
		<ul className="list-unstyled">
			{carrinho.length === 0 ? (
				<p className="text-center my-5">Não há produtos no carrinho</p>
			) : (
				carrinho.map((itemCarrinho) => {
					return location.pathname === '/carrinho' ? (
						<ItemCarrinho
							key={itemCarrinho.id}
							itemCarrinho={itemCarrinho}
						/>
					) : (
						<ItemCarrinhoSuspenso
							key={itemCarrinho.id}
							itemCarrinho={itemCarrinho}
						/>
					)
				})
			)}
		</ul>
	)
}

ListaProdutosCarrinho.propTypes = {
	carrinho: PropTypes.array.isRequired
}

export default ListaProdutosCarrinho
