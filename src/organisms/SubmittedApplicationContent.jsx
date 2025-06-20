import React, { useState } from "react";
import {
	Box,
	Chip,
	TextField,
	MenuItem,
  Button,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
	Paper,
	TablePagination,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@mui/material";

import { useNavigate } from 'react-router-dom';
import useAppStore from "../store/appStore";


const getStatusColor = (status) => {
	switch (status) {
		case "Submitted":
			return { label: "Submitted", color: "success" };
		case "Completed":
			return { label: "Completed", color: "secondary" };
		case "Review":
			return { label: "Review", color: "warning" };
		case "Signature":
			return { label: "Signature", color: "error" };
		default:
			return { label: status, color: "default" };
	}
};

const dummyData = [
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Submitted",
		applicants: ["Bill Toews", "Steve Smith"],
		ref: "AA5464",
		amount: "$3,500.04",
		action: "Add Deposit",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Completed",
		applicants: ["Jeff Coomber"],
		ref: "AA5464",
		amount: "$3,500.59",
		action: "8823712",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Review",
		applicants: ["Albert Khawli"],
		ref: "AA5464",
		amount: "$3,500.04",
		action: "-",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Signature",
		applicants: ["Eijke Iwuh", "Mike Wojick"],
		ref: "AA5464",
		amount: "$3,500.59",
		action: "Sign Docs",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Submitted",
		applicants: ["Bill Toews", "Steve Smith"],
		ref: "AA5464",
		amount: "$3,500.04",
		action: "Add Deposit",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Completed",
		applicants: ["Jeff Coomber"],
		ref: "AA5464",
		amount: "$3,500.59",
		action: "8823712",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Review",
		applicants: ["Albert Khawli"],
		ref: "AA5464",
		amount: "$3,500.04",
		action: "-",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Signature",
		applicants: ["Eijke Iwuh", "Mike Wojick"],
		ref: "AA5464",
		amount: "$3,500.59",
		action: "Sign Docs",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Submitted",
		applicants: ["Bill Toews", "Steve Smith"],
		ref: "AA5464",
		amount: "$3,500.04",
		action: "Add Deposit",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Completed",
		applicants: ["Jeff Coomber"],
		ref: "AA5464",
		amount: "$3,500.59",
		action: "8823712",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Review",
		applicants: ["Albert Khawli"],
		ref: "AA5464",
		amount: "$3,500.04",
		action: "-",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Signature",
		applicants: ["Eijke Iwuh", "Mike Wojick"],
		ref: "AA5464",
		amount: "$3,500.59",
		action: "Sign Docs",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Submitted",
		applicants: ["Bill Toews", "Steve Smith"],
		ref: "AA5464",
		amount: "$3,500.04",
		action: "Add Deposit",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Completed",
		applicants: ["Jeff Coomber"],
		ref: "AA5464",
		amount: "$3,500.59",
		action: "8823712",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Review",
		applicants: ["Albert Khawli"],
		ref: "AA5464",
		amount: "$3,500.04",
		action: "-",
	},
	{
		submitted: "Jul 15 | 1:11 AM",
		status: "Signature",
		applicants: ["Eijke Iwuh", "Mike Wojick"],
		ref: "AA5464",
		amount: "$3,500.59",
		action: "Sign Docs",
	},
];

const SubmittedApplicationContent = () => {
	const [page, setPage] = useState(0);
	const [openUploadModal, setOpenUploadModal] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);
	const setUploadedFile = useAppStore((state) => state.setUploadedFile);
   const navigate = useNavigate();
	const rowsPerPage = 10;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

  

   const handleCloseUploadModal = () => {
        setOpenUploadModal(false);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

  
    

    const handleUploadSubmit = ()=>{
        if (!selectedFile) {
            alert('Please select a file before uploading.');
            return;
        }
        setUploadedFile(selectedFile); // Store file in Zustand
        setOpenUploadModal(false);
        navigate('/sign-doc');
        
    }

    const handleUploadSlip = (action) => {
        if (action === "Add Deposit" ||  action === "Sign Docs") {
            setOpenUploadModal(true);
        } else {
            alert("No action available for this row.");
        }
    }

	return (
		<Box p={3}>
			<Typography variant="h6" gutterBottom>
				Submitted applications
			</Typography>

			{/* Search filters */}
			<Box display="flex" gap={2} mb={2}>
				<TextField
					size="small"
					placeholder="Last Name or Reference #"
					fullWidth
				/>
				<TextField size="small" placeholder="Date Range" fullWidth />
				<TextField select size="small" label="Status" fullWidth>
					{["Submitted", "Completed", "Review", "Signature"].map((status) => (
						<MenuItem key={status} value={status}>
							{status}
						</MenuItem>
					))}
				</TextField>
			</Box>

			{/* Table */}
			<TableContainer component={Paper} sx={{ backgroundColor: "#1F2A40" }}>
				<Table>
					<TableHead sx={{ backgroundColor: "#3e4396", color: "#fff" }}>
						<TableRow>
							<TableCell>Submitted</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Applicant(s)</TableCell>
							<TableCell>Ref. #</TableCell>
							<TableCell>Amount</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dummyData
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row, index) => (
								<TableRow key={index}>
									<TableCell>{row.submitted}</TableCell>
									<TableCell>
										<Chip
											label={getStatusColor(row.status).label}
											color={getStatusColor(row.status).color}
											size="small"
										/>
									</TableCell>
									<TableCell>
										{row.applicants.map((app, idx) => (
											<div key={idx}>{app}</div>
										))}
									</TableCell>
									<TableCell>{row.ref}</TableCell>
									<TableCell>{row.amount}</TableCell>
									<TableCell>
										<Typography
											variant="body2"
											color="#5a5aad"
											sx={{ cursor: "pointer" }}
                      onClick={()=>{handleUploadSlip(row.action)}}
										>
											{row.action}
										</Typography>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
				<TablePagination
					component="div"
					count={dummyData.length}
					page={page}
					onPageChange={handleChangePage}
					rowsPerPage={rowsPerPage}
					rowsPerPageOptions={[10]}
					style={{ backgroundColor: "#3e4396", color: "#fff" }}
				/>
			</TableContainer>

			<Dialog
				open={openUploadModal}
				onClose={handleCloseUploadModal}
				maxWidth="sm"
				fullWidth
			>
				<DialogTitle sx={{ backgroundColor: "#1F2A40" }}>
					Upload Consent form.
				</DialogTitle>
				<DialogContent sx={{ backgroundColor: "#1F2A40" }}>
					{/* Place your upload form/components here */}

					{/* Example: */}
					<Box sx={{ display: "flex", gap: 2 }}>
						<Button
							variant="outlined"
							component="label"
							sx={{ color: "#fff", borderColor: "#2e7c67" }}
						>
							Select File
							<input
								type="file"
								hidden
								accept=".pdf, .jpg, .jpeg, .png,application/pdf,image/jpeg,image/png"
								onChange={handleFileChange}
							/>
						</Button>
						<Box
							sx={{
								flexGrow: 1,
								display: "flex",
								alignItems: "center",
								border: "1px solid #ccc",
								p: 1,
								borderRadius: 1,
							}}
						>
							{selectedFile ? (
								<Typography variant="body2">{selectedFile.name}</Typography>
							) : (
								<Typography variant="body2" color="text.secondary">
									Upload pdf, png or jpg.
								</Typography>
							)}
						</Box>
					</Box>
				</DialogContent>
				<DialogActions sx={{ backgroundColor: "#1F2A40" }}>
					<Button onClick={handleCloseUploadModal} sx={{ color: "#fff" }}>
						Cancel
					</Button>
					<Button
						variant="contained"
						onClick={handleUploadSubmit}
						sx={{ backgroundColor: "#2e7c67" }}
					>
						Upload
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default SubmittedApplicationContent;
