import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TablePagination,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';


// Dummy data
const data = [
  { date: "Jul 15 1:11 AM", status: "Submitted", applicant: "Jeff Coomber", ref: "AA5463", account: "Non-Registered GIC", registered:false },
  { date: "Jul 15 1:11 AM", status: "Review", applicant: "Jeff Coomber", ref: "AA5464", account: "Registered Non-Spousal GIC" ,registered:true},
  { date: "Jul 15 1:11 AM", status: "Submitted", applicant: "Jeff Coomber", ref: "AA5465", account: "Non-Registered TD",registered:false },
  { date: "Jul 15 1:11 AM", status: "Approved", applicant: "Jeff Coomber", ref: "AA5464", account: "Registered Spousal GIC",registered:true },
  { date: "Jul 15 1:11 AM", status: "Declined", applicant: "Jeff Coomber", ref: "AA5466", account: "Registered Spousal TD",registered:false },
  { date: "Jul 15 1:11 AM", status: "Review", applicant: "Jeff Coomber", ref: "AA5467", account: "Registered Spousal TD",registered:true },
  { date: "Jul 15 1:11 AM", status: "Completed", applicant: "Jeff Coomber", ref: "AA5464", account: "Non-Registered GIC",registered:false },
  { date: "Jul 15 1:11 AM", status: "Approved", applicant: "Jeff Coomber", ref: "AA5464", account: "Non-Registered TD",registered:true },
  { date: "Jul 15 1:11 AM", status: "Completed", applicant: "Jeff Coomber", ref: "AA5464", account: "Registered Non-Spousal GIC",registered:false },
  { date: "Jul 15 1:11 AM", status: "Completed", applicant: "Jeff Coomber", ref: "AA5464", account: "Registered Non-Spousal TD",registered:false },
];

// Status colors
const statusColors = {
  Submitted: "#B39DDB", // Purple
  Review: "#FFB74D",    // Orange
  Approved: "#4DB6AC",  // Teal
  Declined: "#EF9A9A",  // Red
  Completed: "#81C784", // Green
};

const AdminHomePage = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredData = data.filter(
    (row) =>
      (statusFilter === "" || row.status === statusFilter) &&
      (search === "" || row.applicant.toLowerCase().includes(search.toLowerCase()) || row.ref.toLowerCase().includes(search.toLowerCase()))
  );

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

   const handleRowClick = (row) => {
    navigate('/admin-review',{ state: { registrationStatus: row.registered, ref: row.ref } });
  };

  return (
    <Box p={3}>
      <Typography variant="h6" fontWeight="bold"  mb={2}>
        Submitted Applications
      </Typography>

      {/* Filters */}
      <Box display="flex" gap={2} mb={2}>
        <TextField
          size="small"
          fullWidth
          placeholder="Last Name or Ref. #"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TextField
          select
          size="small"
          fullWidth
          label="Date Range"
          defaultValue=""
        >
          <MenuItem value="">All Dates</MenuItem>
          <MenuItem value="today">Today</MenuItem>
          <MenuItem value="thisWeek">This Week</MenuItem>
        </TextField>
        <TextField
          select
          size="small"
          fullWidth
          label="Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          {Object.keys(statusColors).map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{backgroundColor: "#1F2A40"}}>
        <Table>
          <TableHead sx={{ backgroundColor: "#3e4396", color: "#fff" }}>
            <TableRow>
              <TableCell>Submitted</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Applicant(s)</TableCell>
              <TableCell>Ref. #</TableCell>
              <TableCell>Account</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
              <TableRow key={i} onClick={() => handleRowClick(row)} sx={{ cursor: "pointer" }}>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    size="small"
                    sx={{ backgroundColor: statusColors[row.status], color: "white" }}
                  />
                </TableCell>
                <TableCell>{row.applicant}</TableCell>
                <TableCell>{row.ref}</TableCell>
                <TableCell>{row.account}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={filteredData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10]}
          style={{ backgroundColor: "#3e4396", color: "#fff" }}
        />
      </TableContainer>
    </Box>
  );
};

export default AdminHomePage;
