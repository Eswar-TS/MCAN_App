import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const SubmittedPage = ()=> {
    const navigate = useNavigate();
  const steps = [
    {
      title: 'Add the deposit slip & cheque image',
      description:
        'You can either upload the deposit slip & cheque image now using the upload button below or later from the Submitted page. The application will be in a Submitted status until the deposit slip & cheque image is uploaded.',
      button: true,
    },
    {
      title: 'Review status',
      description:
        'Until the payment is received by MCAN the application will be in a Review status. You can always see the application on the Submitted page.',
    },
    {
      title: 'Sign documents',
      description:
        'Once the payment has been received you’ll get a notification that your signature is required. The application will be displayed on the Submitted page with a Signature status.',
    },
    {
      title: 'Download the certificate',
      description:
        'Once the signatures are captured the application will change to a Completed status and you will be able to download the certificate from the Submitted page. Once this has been downloaded and shared with the client you are all done!',
    },
  ];

  const handleHome = () => {

    navigate('/')
  }
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Title */}
      <Typography variant="h4" align="center"  gutterBottom>
        Your GIC Application Was Submitted
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="secondary"
        gutterBottom
      >
        Next steps are outlined below. Please make sure the client understands what to expect.
      </Typography>

      {/* Steps */}
      <Box mt={4} display="flex" flexDirection="column" gap={3}>
        {steps.map((step, index) => (
          <Paper key={index} elevation={2} sx={{ p: 3,backgroundColor: "#1F2A40" }}>
            <Box display="flex" gap={2}>
              <Typography variant="h5" >
                {index + 1}
              </Typography>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {step.title}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {step.description}
                </Typography>
                {step.button && (
                  <Button
                    variant="contained"
                    sx={{ mt: 2, bgcolor: '#2e7c67', ':hover': { bgcolor: '#2e7c67' } }}
                  >
                    Upload
                  </Button>
                )}
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Footer Button */}
      <Box display="flex" justifyContent="flex-end" mt={5}>
        <Button
          variant="contained"
          sx={{
            px: 6,
            bgcolor: '#2e7c67',
            ':hover': { bgcolor: '#2e7c67' },
          }}

          onClick={handleHome} // Redirect to home page
        >
          Home
        </Button>
      </Box>
    </Container>
  );
}

export default SubmittedPage;