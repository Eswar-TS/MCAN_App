import { Typography } from '@mui/material';

const TSTypography = ({ variant, text, color, ...rest }) => (
  <Typography variant={variant} color={color} {...rest}>
    {text}
  </Typography>
);

export default TSTypography;
