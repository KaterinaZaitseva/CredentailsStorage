import { IconButton, Tooltip, InputLabel, OutlinedInput, FormControl, Input, Popper } from '@mui/material';
import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CopyToClipboardButton from '../CopyToClipboardButton';

export default function PasswordInputForm({password, editMode}) {
    const [showPassword, setShowPassword] = useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl variant="outlined" fullWidth disabled={!editMode} >
            <InputLabel sx={{ fontSize: '1.25rem', ml: 0.5 }}>Password</InputLabel>
            <OutlinedInput 
                required 
                sx={{padding: 0, fontSize: '1.25rem'}}
                type={showPassword ? 'text' : 'password'}
                label="Password"
                defaultValue={password}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end" >
                            <Tooltip arrow title="Hide/Unhide">
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </Tooltip>
                        </IconButton>
                        <CopyToClipboardButton text={password} />
                    </InputAdornment>
                }/>
        </FormControl>
    );

};