import { Box, CircularProgress, Dialog, DialogContent, DialogTitle } from '@mui/material';

function Loader({ openloader, LoaderMsg, styles = {} }) {
  return (
    <Box>
      <Dialog open={openloader} className="loaderWrap" style={styles}>
        <DialogTitle className="loader-title">Please wait!</DialogTitle>
        <DialogContent className="loader-content">
          <Box className="loaderBar">
            <CircularProgress />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
export default Loader;
