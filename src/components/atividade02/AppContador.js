import React, { useState } from 'react';
import Homem from '../Imagens/homem.png';
import Mulher from '../Imagens/mulher.png';
import '../menu.css';

function ContadorPessoas() {
	const [total, setTotal] = useState(0);
	const [homens, setHomens] = useState(0);
	const [mulheres, setMulheres] = useState(0);

	const incrementTotal = () => {
		setTotal((prevTotal) => prevTotal + 1);
	};

	const decrementTotal = () => {
		setTotal((prevTotal) => prevTotal - 1);
	};

	const AddPerson = (gender) => {
		if (gender === 'homens') {
			setHomens((prevHomens) => prevHomens + 1);
			incrementTotal();
		} else if (gender === 'mulheres') {
			setMulheres((prevMulheres) => prevMulheres + 1);
			incrementTotal();
		}
	};

	const RemovePerson = (gender) => {
		if (gender === 'homens' && homens > 0) {
			setHomens((prevHomens) => prevHomens - 1);
			decrementTotal();
		} else if (gender === 'mulheres' && mulheres > 0) {
			setMulheres((prevMulheres) => prevMulheres - 1);
			decrementTotal();
		}
	};

	const Refresh = () => {
		setTotal(0);
		setHomens(0);
		setMulheres(0);
	};

	const isNegative = total < 0;

	return (
		<div className='container'>
			<h1>Total: {total}</h1>
			{isNegative && <p style={{ color: 'red' }}>Número total de pessoas não pode ser negativo</p>}
			<div className='buttons-container'>
				<img className="img" src={Homem} alt={'Homem'} />
				<h2>Homens: {homens}</h2>
				<button className="botao" onClick={() => AddPerson('homens')}>+</button>
				<button className="botao" onClick={() => RemovePerson('homens')}>-</button>
			</div>
			<div className='buttons-container'>
				<img className="img" src={Mulher} alt={'Mulher'} />
				<h2>Mulheres: {mulheres}</h2>
				<button className="botao" onClick={() => AddPerson('mulheres')}>+</button>
				<button className="botao" onClick={() => RemovePerson('mulheres')}>-</button>
			</div>
			<button className='refresh-button' onClick={Refresh}>Limpar</button>
		</div>
	);
}

export default ContadorPessoas;
