import React, { Component } from 'react';

class ListItem extends Component {

	removeItem(e) {
		e.preventDefault();
		console.log("removeItem", e.target.id);
	}

	render() {
		var StyleImg = {
			width: "40px",
			height: "40px",
			margin: "10px"
		}
		var StyleIcon = {
			position: "absolute",
			right: "10px",
			top: "10px"
		}

		return (
			<li className="list-group-item">
				<a href={this.props.href}>
					<img src={this.props.src} style={StyleImg} alt="Flor" />
					{this.props.children}
					<span onClick={this.removeItem} id={this.props.id} className="glyphicon glyphicon-remove text-right" style={StyleIcon} />
				</a>
			</li>
		)		
	}
}

export default ListItem;