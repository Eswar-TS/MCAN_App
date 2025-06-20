import { Button, Box, Typography, Paper, IconButton } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useNavigate } from "react-router-dom";
import DocViewer from "../organisms/DocViewer.jsx";

export default function SignDoc() {


	const navigate = useNavigate();

	
	const handleNext = () => {
		navigate("/app-submitted"); // Redirect to confirmation page
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="flex-start"
			px={4}
			py={8}
		>
			<Typography variant="h4" fontWeight={600} mb={2}>
				Sign Your Documents
			</Typography>
			<Typography variant="subtitle1" color="secondary" mb={6}>
				This is the final step! Please review the document below and sign all
				required signature fields.
			</Typography>

			<Paper
				elevation={3}
				sx={{
					width: "100%",
					maxWidth: 900,
					p: 3,
					borderRadius: 3,
					boxShadow: 3,
					backgroundColor: "#1F2A40",
				}}
			>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					mb={2}
				>
					<Typography fontWeight={500} color="text.primary">
						Signatures required
					</Typography>
					<IconButton>
						<BorderColorIcon />
					</IconButton>
				</Box>
				<DocViewer/>
			</Paper>
			<Box textAlign={"right"} mt={2} width="100%">
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
	);
}
