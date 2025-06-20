import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
	useTheme,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TSButton from "../atoms/TSButton/TSButton";
import { tokens } from "../theme";

const GetStartedContent = () => {
	const [accountUse, setAccountUse] = useState("");
	const [isCanadian, setIsCanadian] = useState("");
	const [isAdult, setIsAdult] = useState("");

	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const navigate = useNavigate();
	const handleNext = () => {
		navigate("/hub");
	};
	return (
		<>
			<Typography fontWeight={600} mb={2}>
				Pre-qualification
			</Typography>
			<FormControl fullWidth margin="normal">
				<InputLabel>
					Will this account be used for the benefit of, or on behalf of, anyone
					not disclosed on the application?
				</InputLabel>
				<Select
					value={accountUse}
					onChange={(e) => setAccountUse(e.target.value)}
					label="Will this account be used..."
				>
					<MenuItem value="Yes">Yes</MenuItem>
					<MenuItem value="No">No</MenuItem>
				</Select>
			</FormControl>

			<Box display="flex" gap={2} mt={2}>
				<FormControl fullWidth>
					<InputLabel>Are all applicants residents of Canada?</InputLabel>
					<Select
						value={isCanadian}
						onChange={(e) => setIsCanadian(e.target.value)}
						label="Are all applicants residents of Canada?"
					>
						<MenuItem value="Yes">Yes</MenuItem>
						<MenuItem value="No">No</MenuItem>
					</Select>
				</FormControl>

				<FormControl fullWidth>
					<InputLabel>Are all applicants 18 years of age or older?</InputLabel>
					<Select
						value={isAdult}
						onChange={(e) => setIsAdult(e.target.value)}
						label="Are all applicants 18 years of age or older?"
					>
						<MenuItem value="Yes">Yes</MenuItem>
						<MenuItem value="No">No</MenuItem>
					</Select>
				</FormControl>
			</Box>

			<Box textAlign="right" m={2}>
				<TSButton
					text="Next"
					color={colors.greenAccent[700]}
					onClick={handleNext}
				/>
			</Box>
		</>
	);
};

export default GetStartedContent;
