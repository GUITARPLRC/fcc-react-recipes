import React from 'react';
import { Panel, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import EditModal from './EditModal';

var RecipeCard = React.createClass({
	getInitialState() {
		return {
			showModal: false
		}
	},

	open() {
		this.setState({showModal: true});
	},

	close() {
		this.setState({showModal: false});
	},

	edit() {
		return
	},

	delete() {
		return
	},

	render() {
		const {title, ingredients, bsStyle, ...other} = this.props;

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
					<Button bsStyle="danger">Delete Recipe</Button>
				</ButtonToolbar>
				{ this.state.showModal && <EditModal show={this.state.showModal}
				title={title} ingredients={ingredients} close={this.close} /> }
			</Panel>
		)
	}
})

export default RecipeCard;
