import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "../pdf-worker";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import useAppStore from "../store/appStore";

const DocViewer = () => {

    const file = useAppStore((state) => state.uploadedFile);
	const [numPages, setNumPages] = useState(null);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

    
	const isPDF = file?.type === "application/pdf";
	const isImage = file?.type?.startsWith("image");

    useEffect(() => {
            if (isImage && file) {
                const imageUrl = URL.createObjectURL(file);
                return () => URL.revokeObjectURL(imageUrl);
            }
        }, [file]);
    
        if (!file)
            return (
                <Box textAlign="center" mt={10} color="text.secondary">
                    No document to review.
                </Box>
            );

    return (
        <Box
                            sx={{
                                overflow: "auto",
                                border: 1,
                                borderColor: "divider",
                                borderRadius: 2,
                                p: 2,
                                maxHeight: "80vh",
                                bgcolor: "background.paper",
                            }}
                        >
                            {isPDF && (
                                <Document
                                    file={file}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    loading={<Typography>Loading PDF...</Typography>}
                                    error={<Typography color="error">Failed to load PDF</Typography>}
                                >
                                    {Array.from(new Array(numPages), (_, index) => (
                                        <Page key={index + 1} pageNumber={index + 1} />
                                    ))}
                                </Document>
                            )}
        
                            {isImage && (
                                <Box display="flex" justifyContent="center">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt="Uploaded"
                                        style={{ width: "100%", height: "auto", borderRadius: 8 }}
                                    />
                                </Box>
                            )}
                        </Box>
    )
}

export default DocViewer;