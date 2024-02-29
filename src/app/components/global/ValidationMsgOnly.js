import React, { useEffect, useState } from 'react';

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

function ValidationMsgOnly({
  openValidation,
  validationMsg,
  handleClose,
  setOpenValidation,
  setDisableButton,
  buttonText
}) {
  return (
    <Dialog
      open={openValidation}
      // onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className=""
      classes={{
        paper: 'popUpOuter'
      }}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Validation Message</Typography>
        <IconButton
          //  onClick={(e) => setOpenValidation(false)}
          onClick={(e) => handleClose()}
          size="small"
          className="popUpCloseIcon"
        >
          <CloseIcon size={20} />
        </IconButton>
      </DialogTitle>
      <DialogContent className="popUpContentB">
        <DialogContentText id="alert-dialog-description" className="popUpBody">
          <Typography variant="subtitle1" className="popUpInnerText">
            {validationMsg}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions className="popUpFoot popUpFootCenter">
        <Button className="primaryButton" onClick={(e) => handleClose()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ValidationMsgOnly;
