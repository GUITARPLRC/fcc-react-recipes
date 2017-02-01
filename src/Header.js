import React, { Component } from 'react';
import { Navbar, Grid } from 'react-bootstrap';

export default class Header extends Component {
	render() {
		return (
			<div>
				<Navbar inverse fixedTop>
					<Grid>
						<Navbar.Header>
							<Navbar.Brand>
								<a href="/">React Recipes</a>
							</Navbar.Brand>
						</Navbar.Header>
					</Grid>
				</Navbar>
			</div>
		)
	}
}
