import React, { useState } from "react";
import {
	Button,
	Typography,
	Card,
	TextField,
	CircularProgress,
	Stack,
    List,
    ListItem,
    ListItemText,
    LinearProgress,
    Box
} from "@mui/material";

const BulkUploadContent = () => {
	const [files, setFiles] = useState([]);
	const [uploading, setUploading] = useState(false);

	const handleFileChange = (event) => {
		const selectedFiles = Array.from(event.target.files);
		const newFiles = selectedFiles.map((file) => ({
			file,
			status: "pending", // pending | uploading | uploaded
		}));
		setFiles(newFiles);
	};

	const handleUpload = () => {
		const updatedFiles = [...files];
		setUploading(true);

		updatedFiles.forEach((f, index) => {
			f.status = "uploading";
			setFiles([...updatedFiles]);

			// Simulate async upload
			setTimeout(() => {
				updatedFiles[index].status = "uploaded";
				setFiles([...updatedFiles]);

				// If all uploaded
				if (updatedFiles.every((file) => file.status === "uploaded")) {
					setUploading(false);
				}
			}, 1000 * (index + 1)); // stagger uploads
		});
	};

	return (
		<Card sx={{ p: 2 ,backgroundColor: "#1F2A40"}}>
			<Typography variant="subtitle1" gutterBottom>
				Bulk Upload
			</Typography>

			<Stack direction="row" spacing={2} alignItems="center">
				<Button variant="contained" component="label" disabled={uploading} sx={{backgroundColor:"#2e7c67"}}>
					Browse Files
					<input hidden type="file" multiple onChange={handleFileChange} />
				</Button>

				<TextField
					size="small"
					disabled
					value={files.length > 0 ? `${files.length} file(s) selected` : ""}
					placeholder="No file selected"
					sx={{ flexGrow: 1 }}
				/>

				<Button
					variant="contained"
					onClick={handleUpload}
					sx={{backgroundColor:"#2e7c67"}}
					disabled={
						files.length === 0 ||
						uploading ||
						files.every((f) => f.status === "uploaded")
					}
				>
					{uploading ? (
						<CircularProgress size={24} color="inherit" />
					) : (
						"Upload"
					)}
				</Button>
			</Stack>

			{files.length > 0 && (
				<List dense>
					{files.map((f, index) => (
						<ListItem key={index}>
							<ListItemText
								primary={f.file.name}
								secondary={
									f.status === "pending"
										? "Ready to upload"
										: f.status === "uploading"
										? "Uploading..."
										: "Uploaded ✅"
								}
							/>
							{f.status === "uploading" && (
								<Box sx={{ width: 100 }}>
									<LinearProgress />
								</Box>
							)}
						</ListItem>
					))}
				</List>
			)}
		</Card>
	);
};

export default BulkUploadContent;
