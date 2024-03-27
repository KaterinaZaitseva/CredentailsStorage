import { InputLabel, OutlinedInput, FormControl } from '@mui/material';
import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import CopyToClipboardButton from '../CopyToClipboardButton';

export default function LoginInputForm({login, editMode}) {

    return (
        <FormControl variant="outlined" fullWidth disabled={!editMode} sx={{mb: 3, mt: 2}}> 
            <InputLabel sx={{ fontSize: '1.25rem', ml: 0.5 }}>Login</InputLabel>
            <OutlinedInput
                required
                sx={{padding: 0, fontSize: '1.25rem'}}
                label="Login"
                defaultValue={login} 
                endAdornment={
                    <InputAdornment position="end" >
                        <CopyToClipboardButton text={login} />
                    </InputAdornment>
                }/>
        </FormControl>
    );

};