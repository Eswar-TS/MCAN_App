// RateManagementTable.js
import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Link
} from '@mui/material';
import { useLocation } from 'react-router-dom';


const rows = [
  { term: '30-59 days', amount: '$10,000 - $24,999', currentRate: '2.00%', newRate: '2.07%', effectiveDate: 'May 22/25' },
  { term: '30-59 days', amount: '$25,000 - $89,999', currentRate: '2.05%', newRate: '-', effectiveDate: '-' },
  { term: '30-59 days', amount: '$90,000 +', currentRate: '2.10%', newRate: '-', effectiveDate: '-' },
  { term: '60-89 days', amount: '$10,000 - $24,999', currentRate: '2.15%', newRate: '-', effectiveDate: '-' },
  { term: '60-89 days', amount: '$25,000 - $89,999', currentRate: '2.20%', newRate: '2.15%', effectiveDate: 'May 11/25' },
  { term: '60-89 days', amount: '$90,000 +', currentRate: '2.25%', newRate: '2.35%', effectiveDate: 'Jun 12/25' },
  // Add more rows as needed...
];

const RateManagementTable = () => {
    const location = useLocation();
    const { product } = location.state || {};
  return (
    <TableContainer component={Paper} sx={{ padding: 2,backgroundColor: "#1F2A40" }}>
      <Typography variant="h6" gutterBottom>
        {product}
      </Typography>
      <Table>
        <TableHead sx={{ backgroundColor: "#3e4396", color: "#fff" }}>
          <TableRow>
            <TableCell><strong>Term</strong></TableCell>
            <TableCell><strong>Amount</strong></TableCell>
            <TableCell><strong>Current Rate</strong></TableCell>
            <TableCell><strong>New Rate</strong></TableCell>
            <TableCell><strong>Effective Date</strong></TableCell>
            <TableCell><strong>Action</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.term}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.currentRate}</TableCell>
              <TableCell>{row.newRate}</TableCell>
              <TableCell>{row.effectiveDate}</TableCell>
              <TableCell>
                <Link href="#" underline="hover" sx={{ color: '#3e4396' }}>Update</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RateManagementTable;
