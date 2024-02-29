import { Close } from '@mui/icons-material';
import { Box, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';

function AlertDialog({ openAlertDialog, closeAlertHandler, dialogMsg, dialogTitle, styles = {} }) {
  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={openAlertDialog}
        onClose={(e) => {
          closeAlertHandler(e);
        }}
        className="alertDialogWrap"
        style={styles}
      >
        <IconButton
          onClick={(e) => closeAlertHandler()}
          size="small"
          style={{ position: 'absolute', right: '10px', top: '5px' }}
        >
          <Close />
        </IconButton>
        {/* <DialogTitle className="loader-title">{dialogTitle}</DialogTitle> */}
        <DialogContent
          className="dialog-content"
          style={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '25vh',
            alignItems: 'center',
            color: 'orangered'
          }}
        >
          <Box className="dialogMsg">{dialogMsg}</Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
export default AlertDialog;
