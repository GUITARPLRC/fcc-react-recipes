import React from 'react';
import { Panel, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import Modal from './Modal';

var RecipeCard = React.createClass({
	getInitialState() {
		return {
			showModal: false,
			index: this.props.id
		}
	},

	open() {
		this.setState({showModal: true});
	},

	close() {
		this.setState({showModal: false});
	},

	render() {
		const {title, ingredients, bsStyle, handleClick, ...other} = this.props;

		var list = [];
		for (let i = 0; i < ingredients.length; i++) {
			list.push( <ListGroupItem key={i}>{ingredients[i]}</ListGroupItem> );
		}

		return (
			<Panel bsStyle={bsStyle} header={title} {...other}>
				<h4>Ingredients</h4>
				<ListGroup>
					{list}
				</ListGroup>
				<ButtonToolbar>
					<Button bsStyle="default" onClick={this.open}>Edit Recipe</Button>
					<Button bsStyle="danger" onClick={el => handleClick(el.target.parentNode.parentNode.parentNode.id)}>Delete Recipe</Button>
				</ButtonToolbar>
				{ this.state.showModal && <Modal show={this.state.showModal}
				title={title} ingredients={ingredients} close={this.close} save={this.save} /> }
			</Panel>
		)
	}
})

export default RecipeCard;
