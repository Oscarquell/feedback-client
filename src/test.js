import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

export default function LoadingButtonsTransition() {
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }

    return (
        <Box>
            <FormControlLabel
                sx={{
                    display: 'block',
                }}
                control={
                    <Switch
                        checked={loading}
                        onChange={() => setLoading(!loading)}
                        name="Отправить"
                        color="primary"
                    />
                }
                label="Loading"
            />

                <LoadingButton
                    onClick={handleClick}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    <span>Отправить</span>
                </LoadingButton>
        </Box>
    );
}