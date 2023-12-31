import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
    return (
        <Box sx={{ width: '75%', margin: '0 auto'}}>
            <LinearProgress />
        </Box>
    );
}