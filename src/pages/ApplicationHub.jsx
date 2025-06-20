import React, { useState } from "react";
import {
	Box,
	Typography,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	IconButton,
	Checkbox,
	Button,
	FormControlLabel,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import DeleteConfirmationDialog from "../molecules/DeleteConfirmationDialog";

const ApplicationHub = () => {
	const [applicants, setApplicants] = useState([
		{ name: "John Doe" },
		{ name: "Alice Smith" },
		{ name: "Zachary Lee" },
	]);
	const [accounts, setAccounts] = useState([
		{ name: "1 Year GIC - 9.00%" },
		{ name: "2 Year GIC - 8.50%" },
	]);
	const [applicantSortAsc, setApplicantSortAsc] = useState(true);
	const [accountSortAsc, setAccountSortAsc] = useState(true);
	const [open, setOpen] = useState(false);

	const location = useLocation();
	const hideAddButtons = location.state?.fromResume === true;

	const navigate = useNavigate();

	const handleNext = () => {
		navigate("/confirmation"); // Redirect to confirmation page
	};

	const handleSortApplicants = () => {
		const sorted = [...applicants].sort((a, b) =>
			applicantSortAsc
				? b.name.localeCompare(a.name)
				: a.name.localeCompare(b.name)
		);
		setApplicants(sorted);
		setApplicantSortAsc(!applicantSortAsc);
	};

	const handleSortAccounts = () => {
		const sorted = [...accounts].sort((a, b) =>
			accountSortAsc
				? b.name.localeCompare(a.name)
				: a.name.localeCompare(b.name)
		);
		setAccounts(sorted);
		setAccountSortAsc(!accountSortAsc);
	};

	const handleAddCustomer = () => {
		// Logic to add a new customer
		// This could open a modal or redirect to a form page
		console.log("Add customer clicked");
		navigate("/customer-search"); // Redirect to details page for adding a new customer
	};

	const handleAddAccount = () => {
		navigate("/account-selection"); // Redirect to details page for adding a new account
	};

	const handleDelete = () => {
		console.log("Deleted!");
		setOpen(false);
	};
	return (
		<>
			<Box
				sx={{
					p: 4,
					mx: "auto",
					width: "100%",
					maxWidth: 900, // Set a max width for the content
					boxSizing: "border-box",
				}}
			>
				<Typography variant="h4" textAlign="center" gutterBottom>
					Application Hub
				</Typography>
				<Typography textAlign="center" mb={4} color="secondary">
					A listing of applicants and accounts currently added to this
					application.
				</Typography>

				{/* === Applicants Section === */}

				<Paper elevation={1} sx={{ p: 3, mb: 4, backgroundColor: "#1F2A40" }}>
					<Typography variant="h6" gutterBottom>
						Applicant(s)
					</Typography>
					<TableContainer sx={{ width: "100%", overflowX: "auto" }}>
						<Table sx={{ width: "100%" }}>
							<TableHead>
								<TableRow>
									<TableCell sx={{ fontWeight: "bold" }}>
										Name
										<IconButton size="small" onClick={handleSortApplicants}>
											{applicantSortAsc ? (
												<ArrowDownward fontSize="small" />
											) : (
												<ArrowUpward fontSize="small" />
											)}
										</IconButton>
									</TableCell>
									<TableCell align="right" sx={{ fontWeight: "bold" }}>
										Action
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{applicants.map((applicant, index) => (
									<TableRow key={index}>
										<TableCell>{applicant.name}</TableCell>
										<TableCell align="right">
											<Button
												size="small"
												variant="outlined"
												sx={{ mr: 1, borderColor: "#2e7c67", color: "#fff" }}
											>
												Edit
											</Button>
											<Button
												size="small"
												variant="outlined"
												sx={{ mr: 1, borderColor: "#2e7c67", color: "#fff" }}
												onClick={() => setOpen(true)}
											>
												Delete
											</Button>
										</TableCell>
									</TableRow>
								))}
								{!hideAddButtons && (
									<TableRow>
										<TableCell>
											<i>Add applicant</i>
										</TableCell>
										<TableCell align="right">
											<Button
												variant="contained"
												size="small"
												onClick={handleAddCustomer}
												sx={{ backgroundColor: "#2e7c67" }}
											>
												Add
											</Button>
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
					<Box mt={2}>
						<FormControlLabel
							control={
								<Checkbox
									sx={{
										color: "#2e7c67",
										"&.Mui-checked": {
											color: "#2e7c67",
										},
									}}
								/>
							}
							label="All applicants have provided consent to perform fraud, identity verification and credit checks with our trusted partners"
						/>
					</Box>
				</Paper>

				{/* === Accounts Section === */}
				<Paper elevation={1} sx={{ p: 3, mb: 4, backgroundColor: "#1F2A40" }}>
					<Typography variant="h6" gutterBottom>
						Account(s)
					</Typography>
					<TableContainer sx={{ width: "100%", overflowX: "auto" }}>
						<Table sx={{ width: "100%" }}>
							<TableHead>
								<TableRow>
									<TableCell sx={{ fontWeight: "bold" }}>
										Name
										<IconButton size="small" onClick={handleSortAccounts}>
											{accountSortAsc ? (
												<ArrowDownward fontSize="small" />
											) : (
												<ArrowUpward fontSize="small" />
											)}
										</IconButton>
									</TableCell>
									<TableCell align="right" sx={{ fontWeight: "bold" }}>
										Action
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{accounts.map((account, index) => (
									<TableRow key={index}>
										<TableCell>{account.name}</TableCell>
										<TableCell align="right">
											<Button
												size="small"
												variant="outlined"
												sx={{ mr: 1, borderColor: "#2e7c67", color: "#fff" }}
											>
												Edit
											</Button>
											<Button
												size="small"
												variant="outlined"
												sx={{ mr: 1, borderColor: "#2e7c67", color: "#fff" }}
												onClick={() => setOpen(true)}
											>
												Delete
											</Button>
										</TableCell>
									</TableRow>
								))}
								{!hideAddButtons && (
									<TableRow>
										<TableCell>
											<i>Add account</i>
										</TableCell>
										<TableCell align="right">
											<Button
												variant="contained"
												size="small"
												onClick={handleAddAccount}
												sx={{ backgroundColor: "#2e7c67" }}
											>
												Add
											</Button>
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>

				<Box textAlign="right">
					<Button
						variant="contained"
						size="large"
						onClick={handleNext}
						sx={{ px: 5, backgroundColor: "#2e7c67" }}
					>
						Next
					</Button>
				</Box>
			</Box>

			<DeleteConfirmationDialog
				open={open}
				onClose={() => setOpen(false)}
				onDelete={handleDelete}
			/>
		</>
	);
};

export default ApplicationHub;
