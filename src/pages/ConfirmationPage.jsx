import React, { useState } from 'react';
import {
    Box, Typography, Paper, IconButton, TextField, Table, TableBody, TableCell, TableRow,
    Button, Backdrop, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import { Edit, Save, Cached } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../store/appStore';


const initialAccountData = {
    type: 'Registered Non-Spousal GIC (Long Term)',
    term: '31 months',
    amount: '$30,500',
    use: 'Investing',
    frequency: 'Compound Annually',
    rate: '3.23%',
    date: 'April 20, 2025',
    source: 'New Contribution',
    method: 'Cheque to MCAN',
    beneficiary: 'Fred Smith',
    dob: 'April 20, 1980',
    relationship: 'Cousin'
};

const initialApplicantData = {
    name: 'Jane Doe',
    birth: 'April 30, 1966',
    sin: '000-000-117',
    email: 'john@doe.com',
    homePhone: '555-564-8434',
    cellPhone: '555-564-8434',
    civicAddress: '131 Franklin Dr SE, Calgary, AB  T1J 4J9',
    mailingAddress: '313 Franklin Dr SE, Calgary, AB  T1J 4J9',
    idType: 'BC Drivers License',
    idNumber: '604-403-903',
    expiry: 'April 20, 2030',
    employment: 'Employed',
    industry: 'Oil & Gas',
    occupation: 'Manager',
    employer: 'Thirdstream',
    employerPhone: '555-846-8846',
    employerAddress: '484 Franklin Dr SE, Calgary, AB  T1J 4J9',
    sourceOfFunds: 'Savings',
    usPerson: 'Yes (545464401)',
    otherTaxResident: 'No',
    pep: 'No',
    consent: 'No'
};


const ConfirmationPage = () => {
    const [isAccountEditing, setIsAccountEditing] = useState(false);
    const [isApplicantEditing, setIsApplicantEditing] = useState(false);
    const [accountFormData, setAccountFormData] = useState(initialAccountData);
    const [applicantFormData, setApplicantFormData] = useState(initialApplicantData);
    // const [loading, setLoading] = useState(false);
    const [openUploadModal, setOpenUploadModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const setUploadedFile = useAppStore((state) => state.setUploadedFile);



    const navigate = useNavigate();


    const handleAccountEditToggle = () => setIsAccountEditing((prev) => !prev);
    const handleApplicantEditToggle = () => setIsApplicantEditing((prev) => !prev);

    const handleAccountChange = (field) => (event) => {
        setAccountFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const handleApplicantChange = (field) => (event) => {
        setApplicantFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const handleBack = () => {

        navigate('/hub');
    };

    const handleCloseUploadModal = () => {
        setOpenUploadModal(false);
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
    // Handler for file selection
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        // Combine both account and applicant data
        setSelectedFile(null)
        // const formData = {
        //     account: accountFormData,
        //     applicant: applicantFormData,
        // };

        // setLoading(true);
        setOpenUploadModal(true);

        // Example: Send to API endpoint
        // try {
        //     const response = await fetch('/api/submit', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(formData),
        //     });
        //     if (response.ok) {
        //         // Success: navigate or show a message
        //         navigate('/success');
        //         setLoading(false);
        //     } else {
        //         // Handle error

        //         setLoading(false);
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    };

    // ...in your JSX:
    <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        sx={{ px: 5 }}
    >
        Submit
    </Button>
    const accountFields = [
        ['Type', 'type'],
        ['Term', 'term'],
        ['Purchase Amount', 'amount'],
        ['Intended Use', 'use'],
        ['Interest Frequency', 'frequency'],
        ['Interest Rate', 'rate'],
        ['Effective Date', 'date'],
        ['Source of Funds', 'source'],
        ['Payment Method', 'method'],
        ['Beneficiary', 'beneficiary'],
        ['Beneficiary Date of Birth', 'dob'],
        ['Beneficiary Relationship', 'relationship']
    ];

    const applicantFields = [
        ['Name', 'name'],
        ['Date of Birth', 'birth'],
        ['Social Insurance Number', 'sin'],
        ['Email', 'email'],
        ['Home Phone', 'homePhone'],
        ['Cell Phone', 'cellPhone'],
        ['Civic Address', 'civicAddress'],
        ['Mailing Address', 'mailingAddress'],
        ['ID Type', 'idType'],
        ['ID Number', 'idNumber'],
        ['Expiry Date', 'expiry'],
        ['Employment Status', 'employment'],
        ['Industry', 'industry'],
        ['Occupation', 'occupation'],
        ['Employer', 'employer'],
        ['Employer Phone', 'employerPhone'],
        ['Employer Address', 'employerAddress'],
        ['What is the source of funds?', 'sourceOfFunds'],
        ['Are you a US person?', 'usPerson'],
        ['Are you a tax resident of a jurisdiction other than the US or Canada?', 'otherTaxResident'],
        ['PEP/HIO?', 'pep'],
        ['Consent form?', 'consent']
    ];

    return (
        <Box textAlign="center" mt={5} sx={{ m: 2 }}>
            <Typography variant="h4" >
                Confirmation
            </Typography>
            <Typography mt={1} color="secondary">
                Please confirm the details below are correct before submitting your application.
            </Typography>

            <Paper elevation={3} sx={{ m: 2, p: 3, maxWidth: 800, mx: 'auto',backgroundColor: "#1F2A40" }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Account(s):</Typography>
                    <IconButton onClick={handleAccountEditToggle}>
                        {isAccountEditing ? <Save /> : <Edit />}
                    </IconButton>
                </Box>

                <Table sx={{ mt: 2 }}>
                    <TableBody>
                        {accountFields.map(([label, key]) => (
                            <TableRow key={key}>
                                <TableCell sx={{ fontWeight: 600 }}>{label}</TableCell>
                                <TableCell>
                                    {isAccountEditing ? (
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            value={accountFormData[key]}
                                            onChange={handleAccountChange(key)}
                                        />
                                    ) : (
                                        accountFormData[key]
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <Paper elevation={3} sx={{ m: 2, p: 3, maxWidth: 800, mx: 'auto' ,backgroundColor: "#1F2A40"}}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Applicant(s):</Typography>
                    <IconButton onClick={handleApplicantEditToggle}>
                        {isApplicantEditing ? <Save /> : <Edit />}
                    </IconButton>
                </Box>

                <Table sx={{ mt: 2 }}>
                    <TableBody>
                        {applicantFields.map(([label, key]) => (
                            <TableRow key={key}>
                                <TableCell sx={{ fontWeight: 600 }}>{label}</TableCell>
                                <TableCell>
                                    {isApplicantEditing ? (
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            value={applicantFormData[key]}
                                            onChange={handleApplicantChange(key)}
                                        />
                                    ) : (
                                        applicantFormData[key]
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <Box display="flex" justifyContent="space-between" mt={4}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleBack}
                    sx={{ px: 5 ,backgroundColor:"#2e7c67"}}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    sx={{ px: 5 ,backgroundColor:"#2e7c67"}}
                >
                    Submit
                </Button>
            </Box>

            {/* Upload Modal */}
            <Dialog open={openUploadModal} onClose={handleCloseUploadModal} maxWidth="sm" fullWidth
            
            >
                <DialogTitle sx={{backgroundColor: "#1F2A40"}}>Upload Consent form.</DialogTitle>
                <DialogContent sx={{backgroundColor: "#1F2A40"}}>
                    {/* Place your upload form/components here */}

                    {/* Example: */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button variant="outlined" component="label" sx={{color:"#fff",borderColor:"#2e7c67"}}>
                            Select File
                            <input
                                type="file"
                                hidden
                                accept=".pdf, .jpg, .jpeg, .png,application/pdf,image/jpeg,image/png"
                                onChange={handleFileChange}
                            />
                        </Button>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', border: '1px solid #ccc', p: 1, borderRadius: 1 }}>
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
                <DialogActions sx={{backgroundColor: "#1F2A40"}}>
                    <Button onClick={handleCloseUploadModal} sx={{color:"#fff"}}>Cancel</Button>
                    <Button variant="contained" onClick={handleUploadSubmit} sx={{backgroundColor:"#2e7c67"}}>Upload</Button>
                </DialogActions>
            </Dialog>
            <Backdrop open={false} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>

                <Box sx={{ p: 4, mx: 'auto' }}>
                    <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
                        <IconButton color="primary"><Cached /></IconButton>
                        <Typography variant="h6" mb={2}>
                            Processing application...
                        </Typography>
                        <Typography variant="body1">
                            Sit tight. This should only take a few moment
                        </Typography>
                    </Paper>
                </Box>

            </Backdrop>
        </Box>
    );
};

export default ConfirmationPage;
