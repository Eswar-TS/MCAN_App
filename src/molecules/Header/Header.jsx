import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import TSTypography from '../../atoms/TSTypography/TSTypography';

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <TSTypography variant="h2" text={title} color={colors.grey[100]} fontWeight="bold" />
      <TSTypography variant="h5" text={subtitle} color={colors.greenAccent[400]} />
    </Box>
  );
};

export default Header;
