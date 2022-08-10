import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import TvIcon from '@mui/icons-material/Tv';
function Myservices() {
    return (
        <Container sx={{ backgroundColor: 'silver', paddingBottom: '50px' }} maxWidth={false}>
            <h1 id='myservices'>Our Services</h1>
            <Grid className='servicebox' container spacing={1}>
                <Grid className='serbox' item xs={5}>
                    <WebAssetIcon className="icons" fontSize="large" />
                    <h2>Web Design</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </Grid>
                <Grid className='serbox' item xs={5}>
                    <DeveloperModeIcon fontSize="large" className="icons" />
                    <h2>Development</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </Grid>
                <Grid sx={{ marginTop: '20px' }} className='serbox' item xs={5}>
                    <TvIcon fontSize="large" className="icons" />
                    <h2>Responsiveness</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Myservices