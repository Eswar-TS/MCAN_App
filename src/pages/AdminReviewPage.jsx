import React from "react";
import {
	Box,
	Typography,
	Tabs,
	Tab,
	Grid,
	Paper,
	Divider,
	Button,
	TextField,
	Link,
} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate,useLocation } from "react-router-dom";

const AdminReviewPage = () => {
	const [tab, setTab] = React.useState(1); // Assume Non-Registered GIC by default

	const handleTabChange = (event, newValue) => setTab(newValue);
    const navigate = useNavigate();

    const location = useLocation();

	return (
		<Box p={3}>
			<Box
				display="flex"
				alignItems="center"
				sx={{ cursor: "pointer", mb: 2 }}
				onClick={() => navigate("/")}
			>
				<ArrowBackIosNewIcon
					fontSize="small"
					sx={{ mr: 1,  }}
				/>
				<Typography variant="body2" sx={{  fontWeight: 500 }}>
					Back to Applications
				</Typography>
			</Box>
			{/* Header */}
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Typography variant="h6">
					<strong style={{ color: "#1976d2" }}>{location.state.ref}</strong>{" "}
					<span
						style={{
							backgroundColor: "#ffe082",
							padding: "2px 8px",
							borderRadius: 4,
						}}
					>
						Review
					</span>
				</Typography>
				<Typography variant="body2">
					Submitted April 12, 2024 at 4:12 PM
				</Typography>
			</Box>

			{/* Tabs */}
			<Tabs
				value={tab}
				onChange={handleTabChange}
				sx={{
					borderBottom: 1,
					borderColor: "divider",
					mt: 2,
					mb: 2,
					".MuiTabs-indicator": {
						backgroundColor: "#1976d2",
						height: "3px",
					},
					".Mui-selected": {
						color: "#fff !important",
						border: "none",
					},
				}}
			>
				<Tab label="Registered Spousal TD" />
				<Tab label="Non-Registered GIC" />
				<Tab label="Registered Non-Spousal GIC" />
			</Tabs>

			{/* Application Info Section */}
			<Paper elevation={1} sx={{ p: 2, mt: 2, backgroundColor: "#1F2A40" }}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Typography>
							<strong>Account Name:</strong> Non-Registered GIC
						</Typography>
						<Typography>
							<strong>Certificate #:</strong> EDU1234567890
						</Typography>
						<Typography>
							<strong>Intended Use:</strong> Investment
						</Typography>
						<Typography>
							<strong>Term:</strong> 291 days
						</Typography>
						<Typography>
							<strong>Purchase Amount:</strong> <Link href="#">$4,222.88</Link>
						</Typography>
						<Typography>
							<strong>Payment Method:</strong> Cheque to MCAN
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography>
							<strong>Interest Rate:</strong> 5.2%
						</Typography>
						<Typography>
							<strong>Interest Frequency:</strong> Paid at Term
						</Typography>
						<Typography>
							<strong>Source of Funds:</strong> Personal Cheque
						</Typography>
						<Typography>
							<strong>Issue Date:</strong>{" "}
							<Link href="#">January 22, 2025</Link>
						</Typography>
						<Typography>
							<strong>Interest Instructions:</strong> Cheque to Broker
						</Typography>
						<Typography>
							<strong>Maturity Instructions:</strong> Cheque to Broker
						</Typography>
					</Grid>
				</Grid>
			</Paper>

			{/* Applicant Section */}
			<Section
				title="Applicant"
				content={[
					["First Name", "Jeff"],
					["Last Name", "Coomber"],
					["Date of Birth", "April 20, 1956"],
					["Email", "jeff@thinkdream.ca"],
					["Home Phone #", "403-546-9956"],
					["Mobile Phone #", "403-546-9956"],
					["Social Insurance Number", "000-000-117"],
					["CIF #", <Link href="#">Add Number</Link>],
					["Marketing Consent", "Yes"],
				]}
			/>

			{/* Address */}
			<Section
				title="Address"
				color="primary"
				content={[
					["Civic Address", "131 Franklin Dr SE Calgary, AB T1J0J3"],
					["Mailing Address", "123 Fake St NW Calgary, AB T1G5A1"],
				]}
			/>

			{/* Employment */}
			<Section
				title="Current Employment"
				content={[
					["Status", "Employed"],
					["Industry", "Architecture and Engineering"],
					["Occupation", "Architect"],
					["Employer", "Urbdstream"],
					["Employer Phone", "403 598 8856"],
					["Employer Address", "123 Fake St NW Calgary, AB T1G5A1"],
				]}
			/>

			{/* Compliance */}
			<Section
				title="Compliance"
				content={[
					["Are you a US person?", "No"],
					["PEP/HIO", "No"],
					[
						"Are you a tax resident of a jurisdiction other than the US or Canada?",
						"No",
					],
				]}
			/>

			{/* Documents */}
			<Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: "#1F2A40" }}>
				<Typography variant="h6" mb={1}>
					Documents
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<strong>Consent Form:</strong> <Link href="#">View</Link>
					</Grid>
					<Grid item xs={6}>
						<strong>PEP Form:</strong> <Link href="#">View</Link>
					</Grid>
					<Grid item xs={6}>
						<strong>Non-Reg Application Form:</strong>{" "}
						<Link href="#">View</Link>
					</Grid>
					<Grid item xs={6}>
						<strong>CDIC Acknowledgement:</strong> <Link href="#">View</Link>
					</Grid>
				</Grid>
			</Paper>

			{/* Comments */}
			<Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: "#1F2A40" }}>
				<Typography variant="h6">Comments</Typography>
				<TextField
					multiline
					fullWidth
					rows={3}
					placeholder="Add Comment"
					variant="outlined"
					sx={{ mt: 2, mb: 2 }}
				/>
				<Button variant="contained" sx={{ backgroundColor: "#2e7c67" }}>
					Post Comment
				</Button>
			</Paper>

			{/* Complete Review Button */}
			<Box textAlign="right" mt={3}>
				<Button variant="contained" sx={{ backgroundColor: "#2e7c67" }} onClick={() => navigate("/")}>
					Complete Review
				</Button>
			</Box>
		</Box>
	);
};

// Reusable Section Renderer
const Section = ({ title, content }) => (
	<Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: "#1F2A40" }}>
		<Typography variant="h6" mb={1}>
			{title}
		</Typography>
		<Grid container spacing={2}>
			{content.map(([label, value], index) => (
				<Grid item xs={6} key={index}>
					<strong>{label}:</strong> {value}
				</Grid>
			))}
		</Grid>
	</Paper>
);

export default AdminReviewPage;
