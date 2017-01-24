import React from 'react';
import { Jumbotron, Grid, Accordion, Button } from 'react-bootstrap';
import RecipeCard from './RecipeCard';
import AddModal from './AddModal';

var RecipeList = React.createClass({
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

	render() {
		var rows = [];
		for (let i = 0; i < this.props.recipes.length; i++) {
			rows.push(<RecipeCard bsStyle={"success"} title={this.props.recipes[i].title}
				 ingredients={this.props.recipes[i].ingredients} key={i} eventKey={i} />);
		}

		return (
			<div>
				<Jumbotron>
					<Grid className="well">
						<Accordion>
							{rows}
						</Accordion>
						<Button bsSize="large" bsStyle="primary" onClick={this.open}>Add Recipe</Button>
					</Grid>
				</Jumbotron>
				{this.state.showModal && <AddModal show={this.state.showModal} close={this.close} save={this.props.save} />}
			</div>
		)
	}
})

export default RecipeList;
