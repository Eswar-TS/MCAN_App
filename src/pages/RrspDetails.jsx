import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate,useLocation } from 'react-router-dom';

import { useState } from 'react';

const RrspDetails = ()=> {
  /* ──────────────── local state ──────────────── */
  const [beneficiaryType, setBeneficiaryType] = useState('');
  const [relationship, setRelationship] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const isSpouse = location.state?.isSpouse; // Check if the
    const handleNext = () => {
        navigate('/hub'); // Redirect to RSP details page
    }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* page heading */}
      <Typography variant="h4" align="center" gutterBottom>
        {isSpouse ? "Spousal" : "Non-Spousal"} RRSP Details
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        color="secondary"
      >
        Please confirm the spousal contributor details and beneficiary details
        for all Spousal RRSPs below.
      </Typography>

      {/* ───── Spouse / Partner contributor ───── */}
     { isSpouse && <Paper elevation={2} sx={{ p: 3, mt: 4,backgroundColor: "#1F2A40" }}>
        <Typography variant="h6" gutterBottom>
          Spouse or common law partner contributor
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="First Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Last Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Date of Birth"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="SIN" />
          </Grid>
        </Grid>
      </Paper>}

      {/* ───── Beneficiary details ───── */}
      <Paper elevation={2} sx={{ p: 3, mt: 4,backgroundColor: "#1F2A40" }}>
        <Typography variant="h6" gutterBottom color='secondary'>
          Beneficiary details
        </Typography>

        <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Beneficiary Type</InputLabel>
              <Select
                value={beneficiaryType}
                label="Beneficiary Type"
                onChange={(e) => setBeneficiaryType(e.target.value)}
              >
                <MenuItem value="Primary">Primary</MenuItem>
                <MenuItem value="Contingent">Contingent</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Relationship</InputLabel>
              <Select
                value={relationship}
                label="Relationship"
                onChange={(e) => setRelationship(e.target.value)}
              >
                <MenuItem value="Spouse">Spouse</MenuItem>
                <MenuItem value="Child">Child</MenuItem>
                <MenuItem value="Parent">Parent</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="First Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Last Name" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Date of Birth"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="SIN (optional)" />
          </Grid>
        </Grid>
      </Paper>

      {/* ───── footer navigation ───── */}
      <Box display="flex" justifyContent="flex-end" mt={4}>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{backgroundColor:"#2e7c67"}}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
}

export default RrspDetails;