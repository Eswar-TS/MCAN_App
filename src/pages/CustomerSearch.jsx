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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";

export default function CustomerSearch() {
	const [cif, setCif] = useState("");
	const [dob1, setDob1] = useState("");
	const [sin, setSin] = useState("");
	const [dob2, setDob2] = useState("");
	const [results] = useState([
		{
			name: "John N. Doe",
			sin: "545-767-531",
			cif: "245-767-535",
			dob: "May 20, 2000",
			isNew: false,
		},
		{ name: "New Member", sin: "", cif: "", dob: "", isNew: true },
	]);

	const navigate = useNavigate();

	const handleSelect = () => {
		navigate("/applicant-details"); // Redirect to applicant details page
	};
	return (
		<Container maxWidth="md" sx={{ py: 6 }}>
			<Typography variant="h4" align="center"  gutterBottom>
				Customer Search
			</Typography>
			<Typography
				variant="subtitle1"
				align="center"
				color="secondary"
				gutterBottom
			>
				Please search by CIF # or SIN & Date of Birth.
			</Typography>

			{/* Search Panel */}
			<Paper elevation={3} sx={{ p: 3, mt: 4, backgroundColor: "#1F2A40" }}>
				<Typography variant="h6">Search</Typography>
				<Grid
					container
					spacing={2}
					alignItems="center"
					justifyContent={"space-between"}
					sx={{ mb: 2 }}
				>
					<Grid item xs={12} sm={5}>
						<TextField
							fullWidth
							label="CIF"
							value={cif}
							onChange={(e) => setCif(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={5}>
						<TextField
							fullWidth
							label="Date of Birth"
							type="date"
							value={dob1}
							onChange={(e) => setDob1(e.target.value)}
							InputLabelProps={{ shrink: true }}
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<Button
							fullWidth
							variant="contained"
							sx={{ backgroundColor: "#2e7c67" }}
							startIcon={<SearchIcon />}
						>
							Search
						</Button>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={2}
					alignItems="center"
					justifyContent={"space-between"}
					sx={{ mt: 2 }}
				>
					<Grid item xs={12} sm={5}>
						<TextField
							fullWidth
							label="SIN"
							value={sin}
							onChange={(e) => setSin(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={5}>
						<TextField
							fullWidth
							label="Date of Birth"
							type="date"
							value={dob2}
							onChange={(e) => setDob2(e.target.value)}
							InputLabelProps={{ shrink: true }}
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<Button
							fullWidth
							variant="contained"
							sx={{ backgroundColor: "#2e7c67" }}
							startIcon={<SearchIcon />}
						>
							Search
						</Button>
					</Grid>
				</Grid>
			</Paper>

			{/* Results Table */}
			<Paper elevation={3} sx={{ mt: 4, backgroundColor: "#1F2A40" }}>
				<Typography variant="h6" sx={{ p: 2 }}>
					Search results
				</Typography>
				<Table>
					<TableHead sx={{ backgroundColor: "#3e4396", color: "#fff" }}>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>SIN</TableCell>
							<TableCell>CIF #</TableCell>
							<TableCell>Date of Birth</TableCell>
							<TableCell align="right">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{results.map((row, idx) => (
							<TableRow key={idx}>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.sin}</TableCell>
								<TableCell>{row.cif}</TableCell>
								<TableCell>{row.dob}</TableCell>
								<TableCell align="right">
									<Button
										variant={row.isNew ? "contained" : "outlined"}
										color={row.isNew ? "primary" : "inherit"}
										size="small"
										onClick={handleSelect}
                    sx={{backgroundColor:"#2e7c67"}}
									>
										{row.isNew ? "Add" : "Select"}
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		</Container>
	);
}
