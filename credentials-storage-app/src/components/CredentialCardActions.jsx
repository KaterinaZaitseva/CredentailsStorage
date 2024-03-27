import { CardActions, IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

export default function CredentailCardActions({item, onDelete, onEnableEditMode}) {
    const [editMode, setEditMode] = useState(false);

    const handleDelete = () => {
        onDelete(item);
    };

    const handleEnableEditMode = () => {
        setEditMode((edit) => !edit);
        onEnableEditMode(editMode);
    };
    
    return (
        <CardActions sx={{display: 'flex', justifyContent: 'space-between', px: 3, pb: 3}}>
            {!editMode ? 
                <Tooltip title="Edit" arrow >
                    <IconButton color="primary" onClick={handleEnableEditMode}>
                        <EditRoundedIcon sx={{fontSize: 30}}/>
                    </IconButton>
                </Tooltip>
                :
                <div></div>
            }
            {!editMode ? 
                <Tooltip title="Delete" arrow >
                    <IconButton color="primary" onClick={handleDelete} sx={{marginLeft: 0}}>
                        <DeleteOutlineRoundedIcon sx={{fontSize: 30}} htmlColor="crimson"/>
                    </IconButton>
                </Tooltip>
                :
                <Tooltip title="Done" arrow >
                    <IconButton color="primary" onClick={handleEnableEditMode} sx={{marginLeft: 0}}>
                        <DoneOutlineRoundedIcon sx={{fontSize: 30}} htmlColor="green"/>
                    </IconButton>
                </Tooltip>
            }
        </CardActions>
    );

};