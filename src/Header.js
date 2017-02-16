import React from 'react';
import { Navbar, Grid } from 'react-bootstrap';

const Header = () => {
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
};

export default Header;
