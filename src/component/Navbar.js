import { Grid, Container } from "@mui/material";


function Navbar() {
    return (
        <Container maxWidth={false}>
            <Grid className="mnavbar" container spacing={1}>
                <Grid>
                    <h1 style={{ fontFamily: 'sample', color: 'white', fontSize: '40px' }}>PORTFOLIO</h1>
                    {/* <h1 style={{ color: 'white', fontFamily: 'cursive', fontSize: '40px' }}>PORTFOLIO</h1> */}
                    {/* <img className='logoimg' src={Img} /> */}
                </Grid>
                <Grid className="bgnav" >
                    <Grid className="bgcolnav">
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