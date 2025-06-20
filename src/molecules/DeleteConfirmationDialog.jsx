// DeleteConfirmationDialog.js
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  Box
} from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const DeleteConfirmationDialog = ({ open, onClose, onDelete }) => {
  return (
    <Dialog open={open} onClose={onClose} >
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ px: 2, pt: 2,backgroundColor: "#1F2A40" }}>
        <Box display="flex" alignItems="center" sx={{backgroundColor: "#1F2A40"}}>
          <WarningAmberRoundedIcon  sx={{ mr: 1 }} />
          <Typography variant="h6">Delete confirmation</Typography>
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{backgroundColor: "#1F2A40"}}>
        <DialogContentText>
          Are you sure you want to delete this Applicant?
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2,backgroundColor: "#1F2A40" }}>
        <Button
          onClick={onDelete}
          variant="contained"
          sx={{ backgroundColor: '#002E2E', '&:hover': { backgroundColor: '#004F4F' } }}
        >
          Delete
        </Button>
        <Button onClick={onClose} variant="outlined" sx={{ mr: 1, borderColor: "#2e7c67", color: "#fff" }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
