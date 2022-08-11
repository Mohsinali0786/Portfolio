import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuIcon from '../assets/images/menuicon.png';
import { Grid } from '@mui/material';



function BasicMenu() {
    var menuicon = <img style={{ width: '30%', marginTop: '60' }} src={MenuIcon} />
    return (

        <Grid container spacing={1} >
            <Grid item xs={12}>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='me-auto mynavbar'>
                                <NavDropdown title={menuicon} id="collasible-nav-dropdown">
                                    <NavDropdown.Item className='linkcolors' href="#home">Home</NavDropdown.Item><br />
                                    <NavDropdown.Item className='linkcolors' href="#myproj">services</NavDropdown.Item><br />
                                    <NavDropdown.Item className='linkcolors' href="#aboutus">Aboutus</NavDropdown.Item><br />
                                    <NavDropdown.Item className='linkcolors' href="#contactus">contactus</NavDropdown.Item><br />
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Grid>

        </Grid>



    )
}
export default BasicMenu;