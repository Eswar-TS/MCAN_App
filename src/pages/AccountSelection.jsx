import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

export default function AccountSelection() {
  const [accountType, setAccountType] = useState('');
  const [term, setTerm] = useState('');
  const [intended, setIntended] = useState('');
  const [interestFrequency, setInterestFrequency] = useState('');
  const [sourceOfFunds, setSourceOfFunds] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

    const navigate = useNavigate();
  const handleNext = () => {
      navigate('/rrsp-details',{ state: { isSpouse: true } }); // Redirect to RSP details page
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" align="center"  gutterBottom>
        Account Selection
      </Typography>
      <Typography variant="subtitle1" align="center" color="secondary" gutterBottom>
        Please confirm the details below are correct before proceeding with the application.
      </Typography>

      {/* GIC Selection */}
      <Paper elevation={2} sx={{ p: 3, mt: 4,backgroundColor: "#1F2A40" }}>
        <Typography variant="h6" gutterBottom>GIC selection</Typography>
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Account Type</InputLabel>
              <Select value={accountType} label="Account Type" onChange={e => setAccountType(e.target.value)}>
                <MenuItem value="GIC">GIC</MenuItem>
                <MenuItem value="TFSA">TFSA</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Term</InputLabel>
              <Select value={term} label="Term" onChange={e => setTerm(e.target.value)}>
                <MenuItem value="1 Year">1 Year</MenuItem>
                <MenuItem value="3 Years">3 Years</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Info box */}
        <Box sx={{ mt: 3, p: 2, bgcolor: '#1F2A40', borderRadius: 2 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Guaranteed Investment Certificates (GICs)</strong>
          </Typography>
          <Typography variant="body2" gutterBottom>A GIC, or Term Deposit is a secure investment and a great option if you’re seeking predictable interest income.</Typography>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>Flexible investment term lengths of up to 5 years.</li>
            <li>Available for non-registered accounts.</li>
            <li>Competitive interest rates are for the full term of your investment.</li>
            <li>All deposits with MCAN are eligible for Canadian Deposit Insurance Corporation (CDIC) protection</li>
            <li>Check our GIC Rates Here</li>
          </ul>
          <Typography variant="body2" color="primary" sx={{ mt: 1 }}><a href="#">Learn More</a></Typography>
        </Box>
      </Paper>

      {/* Registered GIC Details */}
      <Paper elevation={2} sx={{ p: 3, mt: 4,backgroundColor: "#1F2A40" }}>
        <Typography variant="h6" gutterBottom>Registered GIC details</Typography>
        <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Purchase Amount"
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Intended</InputLabel>
              <Select value={intended} label="Intended" onChange={e => setIntended(e.target.value)}>
                <MenuItem value="Growth">Growth</MenuItem>
                <MenuItem value="Income">Income</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Interest Frequency</InputLabel>
              <Select value={interestFrequency} label="Interest Frequency" onChange={e => setInterestFrequency(e.target.value)}>
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Annually">Annually</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Issue Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Source of Funds</InputLabel>
              <Select value={sourceOfFunds} label="Source of Funds" onChange={e => setSourceOfFunds(e.target.value)}>
                <MenuItem value="Savings">Savings</MenuItem>
                <MenuItem value="Salary">Salary</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Payment Method</InputLabel>
              <Select value={paymentMethod} label="Payment Method" onChange={e => setPaymentMethod(e.target.value)}>
                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                <MenuItem value="Cheque">Cheque</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* Footer Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
        <Button variant="contained" sx={{backgroundColor:"#2e7c67"}} onClick={handleNext}>Next</Button>
      </Box>
    </Container>
  );
}
