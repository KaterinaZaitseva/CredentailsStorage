import { Card, CardContent, CardMedia } from '@mui/material';
import React, { useState } from 'react';
import CredentialForm from '../forms/CredentialForm';
import CredentailCardActions from '../CredentialCardActions';

export default function ModalCredentailCard({item, onDelete, cardContentImgUrl, onEnableEditMode}) {
    let editMode = false;

    const handleDelete = () => {
        onDelete(item);
    };

    const handleEnableEditMode = (edit) => {
        editMode = edit;
        onEnableEditMode(item);
    };
    
    return (
        <Card sx={{minWidth: 345, minHeight: 300, maxWidth: 500}}>
            <CardMedia
                component="img"
                height="140"
                image={cardContentImgUrl} />
            <CardContent sx={{px: 3}}>
                <CredentialForm item={item} editMode={editMode}/>
            </CardContent>
            <CredentailCardActions onDelete={handleDelete} onEnableEditMode={handleEnableEditMode}/>
        </Card>
    );

};