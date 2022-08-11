import { Grid, Button, Divider, Container } from '@mui/material';

import LinearProgressWithLabel from '../component/LinearProgressWithLabel'
import Img2 from '../assets/images/download.jpeg'

function Aboutus() {
    return (
        <Container maxWidth={false} sx={{ backgroundColor: 'silver', paddingBottom: '50px' }}>
            <h1 id='aboutus'>About-Us</h1>
            <Grid className='maingrid abouthead' sx={{ marginTop: 5 }} container spacing={1}>
                <Grid item xs={12} md={5}>
                    <img id="aboutimg" src={Img2} />
                </Grid>
                <Grid className='abouttext' item xs={12} md={7}>
                    <h5>UI Designer and Front-End Developer</h5>
                    <p>Welcome to my official portfolio website where I put all my work related to design and many more</p>
                    <p>I enjoy taking complex problem and turning them in to simple and beautiful interface designs I also love the logic and structure of coding</p>
                    <h5>Web Design</h5>
                    <LinearProgressWithLabel value={90} />
                    <h5>Development</h5>
                    <LinearProgressWithLabel value={75} />
                </Grid>
            </Grid>
        </Container>
    )
}
export default Aboutus;