import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Img from '../images/images-rm.png'


function Navbar() {
    return (
        <Grid  container spacing={1}>
            <Grid item xs={3}>
                <img className='logoimg' src={Img} />
            </Grid>
            <Grid  item xs={9}className="bgnav" >
                <Grid className="bgcolnav" item xs={3}>
                    <Link className="linkcol" to="/">Home</Link>
                </Grid>
                <Grid className="bgcolnav" item xs={3}>
                    <Link className="linkcol" to="/about">About</Link>
                </Grid>
                <Grid className="bgcolnav" item xs={3}>
                    <Link className="linkcol" to="/">Contact-Us</Link>
                </Grid>
                {/* <Grid className="bgcolnav" item xs={3}>
                    <Link className="linkcol" to="/about">About</Link>
                </Grid> */}
            </Grid>
        </Grid>
    )
}
export default Navbar;