import {
  Box,
  Container,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Button,
  InputLabel,
  FormControl
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function ApplicantDetails() {
  const [method, setMethod] = useState('');
  const [usPerson, setUsPerson] = useState('');
  const [businessRelation, setBusinessRelation] = useState('');
   const navigate = useNavigate();
const handleNext = () => {
    navigate('/hub')
}
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" align="center"  gutterBottom>
        Applicant Details
      </Typography>
      <Typography variant="subtitle1" align="center" color="secondary" gutterBottom>
        Please confirm the details below are correct before proceeding with the application.
      </Typography>

      {/* Identification */}
      <Paper elevation={2} sx={{ p: 3, mt: 4 ,backgroundColor: "#1F2A40"}}>
        <Typography variant="h6" gutterBottom>Identification</Typography>
        <FormControl fullWidth>
          <InputLabel>Method</InputLabel>
          <Select value={method} onChange={e => setMethod(e.target.value)} label="Method">
            <MenuItem value="Passport">Passport</MenuItem>
            <MenuItem value="Driver's License">Driver's License</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      {/* Personal Information */}
      <Paper elevation={2} sx={{ p: 3, mt: 4 ,backgroundColor: "#1F2A40"}}>
        <Typography variant="h6" gutterBottom>Personal information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Legal First Name" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Legal Last Name" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Legal Middle Name (optional)" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Email" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="SIN" /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Primary #" /></Grid>
        </Grid>
      </Paper>

      {/* Address Details */}
      <Paper elevation={2} sx={{ p: 3, mt: 4,backgroundColor: "#1F2A40" }}>
        <Typography variant="h6" gutterBottom>Address details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}><TextField fullWidth label="Civic Address" /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Mailing Address (optional)" /></Grid>
        </Grid>
      </Paper>

      {/* Employment */}
      <Paper elevation={2} sx={{ p: 3, mt: 4 ,backgroundColor: "#1F2A40"}}>
        <Typography variant="h6" gutterBottom>Employment</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Employment Status" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Industry" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Occupation" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Employer Name" /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Employer Phone" /></Grid>
        </Grid>
      </Paper>

      {/* Things We Need to Ask */}
      <Paper elevation={2} sx={{ p: 3, mt: 4 ,backgroundColor: "#1F2A40"}}>
        <Typography variant="h6" gutterBottom>Things we need to ask</Typography>
        <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth select label="What is the nature of your business relationship?" value={businessRelation} onChange={e => setBusinessRelation(e.target.value)}>
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth select label="Are you a US person?" value={usPerson} onChange={e => setUsPerson(e.target.value)}>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}><TextField fullWidth label="Are you, a family member, or a close associate a politically exposed person or the head of an international organization?" /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Are you a tax resident of a jurisdiction other than the US or Canada?" /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Do you have an existing Client Consent form?" /></Grid>
        </Grid>
      </Paper>
        <Box textAlign="right" mt={2}>
                      <Button
                          variant="contained"
                          size="large"
                          onClick={handleNext}
                          sx={{ px: 5,backgroundColor:"#2e7c67" }}
                      >
                          Next
                      </Button>
                  </Box>
    </Container>
  );
}
