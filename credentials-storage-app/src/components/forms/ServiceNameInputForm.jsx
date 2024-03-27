import { FormControl, Input } from '@mui/material';
import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';

export default function ServiceNameInputForm({serviceName, editMode}) {

    return (
        <FormControl variant="standard" fullWidth disabled={!editMode} sx={{my: 2}}>
            <Input
                sx={{fontSize:'1.75rem'}}
                required
                disableUnderline 
                defaultValue={serviceName}
                startAdornment={
                    <InputAdornment position="start">
                        <EventNoteRoundedIcon fontSize='large' sx={{mr: 2}} />
                    </InputAdornment>
                }/>
        </FormControl>
    );

};