import React, { useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';

export default function BottomNavbar() {
    const [value, setValue] = useState('');
    let navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(newValue)
    };

    useEffect(() => {
        setValue(location.pathname.replace('/', ''));
    }, [location]);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={10}>
            <BottomNavigation sx={{bgcolor: 'GrayText'}} value={value} onChange={handleChange}>
                <BottomNavigationAction 
                    label="Home"
                    value="home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    label="Storage"
                    value="storage"
                    icon={<BackupTableIcon />}
                />
                <BottomNavigationAction
                    label="Profile"
                    value="profile"
                    icon={<AccountCircleIcon />}
                />
            </BottomNavigation>
        </Paper>
    );
    
};