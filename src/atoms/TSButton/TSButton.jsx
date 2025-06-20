import { Button } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const TSButton = ({ onClick, text, icon, color, ...rest }) => (
  <Button
    sx={{
      backgroundColor: color || 'blue',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 'bold',
      padding: '10px 20px',
      '&:hover': {
        backgroundColor: color || 'blue',
        opacity: 0.9,
      },
    }}
    onClick={onClick}
    {...rest}
  >
    {icon && <DownloadOutlinedIcon sx={{ mr: '10px' }} />}
    {text}
  </Button>
);

export default TSButton;