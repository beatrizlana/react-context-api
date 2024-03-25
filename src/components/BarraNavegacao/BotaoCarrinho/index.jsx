import React from 'react'
import PropTypes from 'prop-types'

import imagemCarrinho from '/assets/cart.svg'

const BotaoCarrinho = ({ className, quantidadeProdutos }) => {
	const classesComuns = 'btn ms-3'

	return (
		<button
			className={`${classesComuns} ${className}`}
			type="button"
			data-bs-toggle="offcanvas"
			data-bs-target="#modalCarrinhoSuspenso"
			aria-controls="modalCarrinhoSuspenso"
		>
			<img src={imagemCarrinho} alt="ícone de um carrinho de supermercado" />
			{quantidadeProdutos !== 0 && (
				<span className="badge verde-limao">{quantidadeProdutos}</span>
			)}
		</button>
	)
}


BotaoCarrinho.propTypes = {
	className: PropTypes.string,
	quantidadeProdutos: PropTypes.number,
}

export default BotaoCarrinho
