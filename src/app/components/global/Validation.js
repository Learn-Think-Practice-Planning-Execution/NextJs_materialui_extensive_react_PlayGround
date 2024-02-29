import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

function Validation({
  openValidation,
  validationMsg,
  handleClose,
  setOpenValidation,
  setDisableButton
}) {
  return (
    <Dialog
      open={openValidation}
      // onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className="popupTitle">
        <Typography variant="h6">&nbsp;</Typography>
        <IconButton
          //  onClick={(e) => setOpenValidation(false)}
          onClick={(e) => handleClose()}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box py={1} px={4} textAlign="center">
            <Typography variant="subtitle2">{validationMsg}</Typography>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" className="dialogBtn" onClick={(e) => handleClose()}>
          {setDisableButton ? 'Allow access and Reload' : 'Retry'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Validation;
