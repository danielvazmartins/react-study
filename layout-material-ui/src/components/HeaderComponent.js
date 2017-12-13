import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import { withRouter } from 'react-router-dom';

class HeaderComponent extends Component {

	constructor(props) {
		super(props)

		this.state = {
			showMenu: false
		}
	}

	handleToggleMenu = () => {
		this.setState({
			showMenu: !this.state.showMenu
		});
	}

	handleHideMenu = () => {
		this.setState({
			showMenu: false
		})
	}

	handleHomeMenu = () => {
		this.props.history.push('/');
		this.handleHideMenu();
	}

	handleListaProdutosMenu = () => {
		this.props.history.push('/produtos');
		this.handleHideMenu();
	}

	handleNotificacoesMenu = () => {
		this.props.history.push('/notificacoes');
		this.handleHideMenu();
	}

	render() {
		return(
			<div>
				<AppBar
					title="React - Material UI"
				    onClick={this.handleToggleMenu}
				/>
				<Drawer open={this.state.showMenu}
						docked={false}
						onRequestChange={this.handleHideMenu}>
					<AppBar title="Menu" 
							iconElementLeft={<IconButton><NavigationClose /></IconButton>}
							onLeftIconButtonClick={this.handleHideMenu} />
					<MenuItem onClick={this.handleHomeMenu}>Home</MenuItem>
					<Divider />
					<MenuItem onClick={this.handleListaProdutosMenu}>Lista de Produtos</MenuItem>
					<Divider />
					<MenuItem onClick={this.handleNotificacoesMenu}>Notificações</MenuItem>
					<Divider />
				</Drawer>
			</div>
		);
	}
}

export default withRouter(HeaderComponent);