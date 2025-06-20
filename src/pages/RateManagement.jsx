import React from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const rateData = [
  { product: 'Short Term Registered' },
  { product: 'Short Term Non-Registered' },
  { product: 'Long Term Registered' },
  { product: 'Long Term Non-Registered' },
];


const RateManagement = () => {

        const navigate = useNavigate();
    

    const handleRowClick = (product) => {
        navigate('/rate-mgmt-table', { state: { product } });
    }
  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 4, borderRadius: 2,backgroundColor: "#1F2A40" }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Rate Management
      </Typography>

      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: "#3e4396", color: "#fff" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Product</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rateData.map((row, index) => (
              <TableRow key={index} onClick={() => handleRowClick(row.product)} sx={{ cursor: 'pointer' }}>
                <TableCell>{row.product}</TableCell>
                <TableCell>
                  <Link href="#" underline="hover" sx={{ color: '#3e4396' }}>
                    Update
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RateManagement;
