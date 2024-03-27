import React from 'react';
import LoginInputForm from './LoginInputForm';
import ServiceNameInputForm from './ServiceNameInputForm';
import PasswordInputForm from './PasswordInputForm';
import { Box } from '@mui/material';

export default function CredentailForm({item, editMode}) {
    
    return (
        <Box>
            <ServiceNameInputForm editMode={editMode} serviceName={item.serviceName} />
            <LoginInputForm editMode={editMode} login={item.login} />
            <PasswordInputForm editMode={editMode} password={item.password}/>
        </Box>
    );

};