import { Grid, Container } from "@mui/material";
import BasicMenu from "./menu";


function Navbar() {
    return (
        <Container className="mnavbar1" maxWidth={false}>
            <Grid className="mnavbar"  >
                <Grid className="logoalign">
                    <h1 className='logohead' >PORTFOLIO</h1>
                </Grid>
                <Grid>
                    <BasicMenu />
                </Grid>
                <Grid className="bgnav">


                    <Grid className="bgcolnav" >
                        <a href="#Home" className="linkcol" >Home</a>
                    </Grid>
                    <Grid className="bgcolnav" >
                        <a href="#myproj" className="linkcol" >Projects</a>
                    </Grid>
                    <Grid className="bgcolnav" >
                        <a href="#aboutus" className="linkcol" >About-Us</a>
                    </Grid>
                    <Grid className="bgcolnav" >
                        <a href="#contactus" className="linkcol" >Contact-Us</a>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Navbar;