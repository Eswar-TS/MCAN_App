import {
	Box,
	Typography,
	ToggleButton,
	ToggleButtonGroup,
	FormControl,
	MenuItem,
	Select,
	InputLabel,
	Paper,
} from "@mui/material";
import { useState } from "react";
import GetStartedContent from "../organisms/GetStartedContent";
import ResumeContent from "../organisms/ResumeContent";
import BulkUploadContent from "../organisms/BulkUploadContent";
import SubmittedApplicationContent from "../organisms/SubmittedApplicationContent";
import Header from "../molecules/Header/Header";
const GetStarted = () => {
	const [appType, setAppType] = useState("New");

	// Example content for each tab
	const renderContent = () => {
		switch (appType) {
			case "New":
				return <GetStartedContent />;
			case "Bulk Upload":
				return (
					<Typography>
						<BulkUploadContent />
					</Typography>
				);
			case "Resume":
				return (
					<Typography>
						<ResumeContent />
					</Typography>
				);
			case "Submitted":
				return (
					<Typography>
						<SubmittedApplicationContent />
					</Typography>
				);
			default:
				return null;
		}
	};

	return (
		<Box sx={{ p: 4, mx: "auto" }}>
			<Header title="Get Started" subtitle="" />

			{/* Application Type */}
			<Paper elevation={1} sx={{ p: 3, mb: 4 ,backgroundColor: "#1F2A40"}}>
				<Header title="" subtitle="Please select the type of application" />

				<ToggleButtonGroup
					color="primary"
					value={appType}
					exclusive
					onChange={(e, val) => val && setAppType(val)}
				>
					{["New", "Bulk Upload", "Resume", "Submitted"].map((label) => (
						<ToggleButton
							className="tabs"
							key={label}
							value={label}
							sx={{
								border: "1px solid #ccc",
								fontFamily: "Lato, sans-serif",
								fontWeight: 500,
								textTransform: "none",
								px: 3,
								py: 1,

								"&.Mui-selected": {
									backgroundColor: "#e8f0f2",
									fontWeight: 700,
								},
							}}
						>
							{label}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Paper>

			{/* Pre-Qualification */}
			<Paper elevation={1} sx={{ p: 3, mb: 4,backgroundColor: "#1F2A40" }}>
				{renderContent()}
			</Paper>
		</Box>
	);
};

export default GetStarted;
