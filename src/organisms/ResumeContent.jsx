import { useState, useMemo } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


/* ───────────── dummy rows ───────────── */
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
const rows = [
  { date: '2025-07-15T01:11:00', name: 'John N. Doe', sin: '545-767-535', ref: 'A0506' },
  { date: '2025-07-14T01:11:00', name: 'John N. Doe', sin: '545-767-535', ref: 'A0506' },
  { date: '2025-07-13T01:11:00', name: 'Sam N. Doe', sin: '545-767-535', ref: 'A0506' },
  { date: '2025-07-12T01:11:00', name: 'John N. Doe', sin: '545-767-535', ref: 'A0506' },
  { date: '2025-07-11T01:11:00', name: 'John N. Doe', sin: '545-767-535', ref: 'A0506' },
  { date: '2025-07-10T01:11:00', name: 'Cam N. Doe', sin: '545-767-535', ref: 'A0506' },
  { date: '2025-07-09T01:11:00', name: 'John N. Doe', sin: '545-767-535', ref: 'A0506' },
];

const ResumeContent = () => {
  const [query, setQuery] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

const navigate = useNavigate();
  
  const filtered = useMemo(() => {
    return rows.filter((r) => {
      const q = query.trim().toLowerCase();
      const dateOk =
        (!from || dayjs(r.date).isSameOrAfter(dayjs(from), 'day')) &&
        (!to || dayjs(r.date).isSameOrBefore(dayjs(to), 'day'));

      const textOk =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.sin.includes(q) ||
        r.ref.toLowerCase().includes(q);

      return dateOk && textOk;
    });
  }, [query, from, to]);

  /* ───────────── helpers ───────────── */
  const fmt = (d) => dayjs(d).format('MMM DD | h:mm A');


  const handleResumeClick = () => {
    navigate('hub',{ state: { fromResume: true } })

  }
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h6" gutterBottom>
          Search
        </Typography>

        {/* search inputs */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              placeholder="Name, SIN or Reference #"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Grid>

          <Grid item xs={6} sm={2}>
            <TextField
              fullWidth
              type="date"
              label="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={6} sm={2}>
            <TextField
              fullWidth
              type="date"
              label="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>

        {/* results table */}
        <Box mt={3}>
          <Table size="small">
            <TableHead sx={{ backgroundColor: '#3e4396', color: '#fff' }}>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>SIN</TableCell>
                <TableCell>Reference #</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered.map((r, i) => (
                <TableRow key={i}>
                  <TableCell>{fmt(r.date)}</TableCell>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.sin}</TableCell>
                  <TableCell>{r.ref}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        minWidth: 80,
                        bgcolor: '#2e7c67',
                        ':hover': { bgcolor: '#2e7c67', opacity: 0.9},
                      }}
                      onClick={handleResumeClick}

                    >
                      Resume
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {/* empty state */}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No matching records
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>
  
    </Container>
  );
}
export default ResumeContent;
