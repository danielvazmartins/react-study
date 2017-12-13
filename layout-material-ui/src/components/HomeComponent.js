import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class HomeComponent extends Component {
	render() {
		return (
			<div>
				<HeaderComponent />
				<div className="pageContent">
					<Card>
						<CardHeader 
							title="Card"
							subtitle="Material UI"
						/>
						<CardMedia
							overlay={<CardTitle title="Team Travel" subtitle="Escolha um destino..." />}>
							<img src={require('.././images/mapa.jpg')} alt="Mapa" />
						</CardMedia>
						<CardText>
							Há 19 anos no mercado de viagens, a Team Travel é uma agência especializada em desenvolver roteiros de acordo com a necessidade de cada cliente. Seja para uma viagem a lazer ou corporativa a excelência do atendimento personalizado está sempre presente.
						</CardText>
					</Card>
				</div> 
			</div>
		);
	}
}

export default HomeComponent;