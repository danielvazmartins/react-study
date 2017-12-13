import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import '.././css/ListaProdutosComponent.css';

class ListaProdutosComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			produtos: [
			{
				image: require('.././images/note1.jpg'),
				title: 'Surpresa de Rosas Vermelhas',
				text: 'Este arranjo especial contém dez lindas rosas nacionais vermelhas acomodadas em um elegante vaso de vidro adornada por uma fita de cetim. Surpreenda com este lindo presente!'
			},
			{
				image: require('.././images/note2.jpg'),
				title: 'Surpresa de Rosas Coloridas no Vaso',
				text: 'Surpresas de no é um arranjo bem versátil: você pode oferecê-lo como presente a alguém especial ou utilizá-lo para decorar a sua casa. Formado por dez nacionais, o toque aveludado das suas pétalas é seu diferencial.'
			},
			{
				image: require('.././images/note3.jpg'),
				title: 'Surpresa de Rosas Vermelhas',
				text: 'Este arranjo especial contém dez lindas rosas nacionais vermelhas acomodadas em um elegante vaso de vidro adornada por uma fita de cetim. Surpreenda com este lindo presente!'
			},
			{
				image: require('.././images/note4.jpg'),
				title: 'Surpresa de Rosas Vermelhas',
				text: 'Este arranjo especial contém dez lindas rosas nacionais vermelhas acomodadas em um elegante vaso de vidro adornada por uma fita de cetim. Surpreenda com este lindo presente!'
			},
			{
				image: require('.././images/note5.jpg'),
				title: 'Surpresa de Rosas Vermelhas',
				text: 'Este arranjo especial contém dez lindas rosas nacionais vermelhas acomodadas em um elegante vaso de vidro adornada por uma fita de cetim. Surpreenda com este lindo presente!'
			}
		]
		}
	}

	render() {
		var produtosItens = this.state.produtos.map( (produto, id) => {
			return(
				<ListItem key={id} className="produto">
					<Paper>
						<br />
						<img src={produto.image} alt={produto.title} />
						<div>
							<h3>{produto.title}</h3>
							<span>{produto.text}</span>
						</div>
						<br />
					</Paper>
				</ListItem>
			)
		})

		return (
			<div>
				<HeaderComponent />
				<div className="pageContent">
					<h1>Lista de Produtos</h1>
					<List>				
						{produtosItens}													
					</List>
				</div>		       
			</div>
		);
	}
}

export default ListaProdutosComponent;