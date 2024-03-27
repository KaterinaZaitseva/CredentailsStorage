import React  from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CredentialCard from '../../components/credential-card/CredentialCard';
import { Snackbar, Alert, Box, Pagination, Modal } from '@mui/material';
import Grid from '@mui/material/Grid';
import ModalCredentailCard from '../../components/credential-card/ModalCredentialCard';
import CredentialService from '../../services/CredentialService'

export default function StoragePage() {  
  const successSnackbar = "success";
  const infoSnackbar = "info";
  // const warningSnackbar = "warning";
  const errorSnackbar = "error";

  const cardContentImgUrl = "https://w0.peakpx.com/wallpaper/988/565/HD-wallpaper-fantasy-landscape-dragon-river-sky.jpg"

  const [credentials, setCredentials] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState(infoSnackbar);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const [openCardModal, setOpenCardModal] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  const itemsPerPage = 10; 
  const pageCount = Math.ceil(credentials.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = credentials.slice(indexOfFirstItem, indexOfLastItem);
 
  const handleOpenSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleDelete = async (item) => {
    const response = await CredentialService.getCredentials();
    if(response.status === 200){
      setCredentials(credentials.filter((element) => {
        return element !== item; 
      }));
      handleOpenSnackbar(successSnackbar, "The credential successfully deleted.");
      setOpenCardModal(false);
    }
    else {
      handleOpenSnackbar(errorSnackbar, "Error deleting the credential.");
    };
  }

  const handleEdit = async (item) => {

  };

  useEffect(() => {
    const getCredentials = async () => {
      const response = await CredentialService.getCredentials();
      if(response.status === 200) {
        setCredentials(response.data);
      }
      else {
        handleOpenSnackbar(errorSnackbar, "Error getting credentials.");
      }
    }; 

    getCredentials();
  }, []);

  const handleChangePage = (event, value) => setCurrentPage(value);

  const handleOpenCardModal = (item) => {
    setOpenCardModal(true);
    setCurrentItem(item);
  }

  const handleCloseCardModal = () => setOpenCardModal(false);
  
  return (
    <Box >
      <Grid display="flex" justifyContent="center" alignItems="center" sx={{width: '100%', pb: 2}} container>
        {currentItems &&
          currentItems.map((item, index) => {
          return (
            <Grid sx={{margin: 3}} item key={index} >
              <CredentialCard key={index} item={item} onOpenCardModal={handleOpenCardModal} cardContentImgUrl={cardContentImgUrl}/>
            </Grid>
          );
        })}
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar} >
          <Alert 
            sx={{ bgcolor: 'background.paper' }}
            variant="outlined" 
            severity={snackbarSeverity} 
            onClose={handleCloseSnackbar} >
              {snackbarMessage}
          </Alert>
        </Snackbar>
        <Pagination variant="outlined" color="primary" 
          count={pageCount}
          page={currentPage}
          onChange={handleChangePage}
          sx={{ display: 'flex', justifyContent: 'center', pb: 12 }}
        />
        <Modal open={openCardModal} onClose={handleCloseCardModal} >
            <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: 24}}>
              <ModalCredentailCard item={currentItem} onDelete={handleDelete} cardContentImgUrl={cardContentImgUrl} onEnableEditMode={handleEdit}/>
            </Box>
        </Modal>
      </Box>
  );

};