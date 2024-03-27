import { CardActionArea, Card, CardContent, Typography, CardMedia } from '@mui/material';
import React from 'react';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';

export default function CredentailCard({item, onOpenCardModal, cardContentImgUrl}) {
    const handleOpenCardModal = () => onOpenCardModal(item);

    return (
        <Card sx={{maxWidth: 345, minWidth: 345}}>
            <CardActionArea onClick={handleOpenCardModal}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardContentImgUrl} />
                <CardContent >
                    <Typography gutterBottom variant="h5" sx={{display: 'flex', alignItems: 'center'}}>
                        <EventNoteRoundedIcon fontSize='large' sx={{mr: 2}} />
                        {item.serviceName}
                    </Typography>
                    <Typography variant='body1' color="text.secondary">
                        Login: {item.login}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );

};