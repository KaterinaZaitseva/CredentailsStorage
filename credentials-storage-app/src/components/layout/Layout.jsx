import React from 'react';
import BottomNavbar from '../bottom-navbar/BottomNavbar';
import StoragePage from '../../pages/storage-page/StoragePage';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/home-page/HomePage';

export default function Layout() {

    return (
        <Box>
            <Routes>
                <Route value="home" path="home" element={<HomePage />} />
                <Route value="storage" path="storage" element={<StoragePage />} />
            </Routes>
            <BottomNavbar />
        </Box>
    );

};