import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from '../component/navbar';
function Aboutus() {
    return (
        <Container maxWidth={false}>
            <Grid className='maingrid' sx={{ marginTop: 5 }} container spacing={1}>
                {/* <Navbar/> */}
                <Grid item xs={12}>
                    <Grid className='abouthead' item xs={12}>
                        <h1>About-Us</h1>
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    )
}
export default Aboutus;