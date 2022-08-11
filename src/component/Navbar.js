import { Grid, Container } from "@mui/material";


function Navbar() {
    return (
        <Container className="mnavbar1" maxWidth={false}>
            <Grid className="mnavbar" container spacing={1} >
                <Grid item xs={12} sm={12} md={3}>
                    <h1 className='logohead' >PORTFOLIO</h1>
                </Grid>
                <Grid item xs={12} sm={9} md={9} className="bgnav" container spacing={1}>
                    <Grid item xs={12} sm={3} md={3} className="bgcolnav" >
                        <a href="#Home" className="linkcol" >Home</a>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} className="bgcolnav" >
                        <a href="#myproj" className="linkcol" >Projects</a>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} className="bgcolnav" >
                        <a href="#aboutus" className="linkcol" >About-Us</a>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} className="bgcolnav" >
                        <a href="#contactus" className="linkcol" >Contact-Us</a>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Navbar;