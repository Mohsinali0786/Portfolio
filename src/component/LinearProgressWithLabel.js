import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" style={{ height: '10px' }} {...props} sx={{
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: `black`,
                    }
                }} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="white">{props.value}%</Typography>
            </Box>
        </Box>
    );
}

export default LinearProgressWithLabel;
