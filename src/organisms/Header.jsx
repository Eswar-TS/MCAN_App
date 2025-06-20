import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	useTheme,
	Drawer,
	Menu,
	MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { tokens } from "../theme";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const { user, setRole } = useAuth();
	const [anchorEl, setAnchorEl] = useState(null);

	const [drawerOpen, setDrawerOpen] = useState(false);
	const navigate = useNavigate();

	const toggleDrawer = () => () => {
		setDrawerOpen((prev) => !prev);
	};

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleProfileMenuClose = () => {
		setAnchorEl(null);
	};

	const handleRoleChange = (role) => {
		setRole(role);
		handleProfileMenuClose();
		// Optionally, navigate or reload to reflect new role
		// navigate("/"); // Uncomment if you want to force navigation
	};
	return (
		<>
			<AppBar
				position="fixed" // Changed from "static" to "fixed"
				elevation={0}
				sx={{
					bgcolor: colors.primary[400],
					zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it's above other content
				}}
			>
				<Toolbar sx={{ minHeight: 64, px: 4 }}>
					{user?.role === "admin" && (
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={toggleDrawer()}
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
					)}
					<Typography
						variant="h6"
						fontWeight={700}
						onClick={() => navigate("/")}
						sx={{ cursor: "pointer" }}
					>
						MCAN
					</Typography>

					{/* Spacer */}
					<Box sx={{ flexGrow: 1 }} />
					<IconButton onClick={handleProfileMenuOpen}>
						<AccountCircleIcon />
					</IconButton>

					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleProfileMenuClose}
					>
						<MenuItem disabled>{user?.name}</MenuItem>
						<MenuItem
							selected={user?.role === "user"}
							onClick={() => handleRoleChange("user")}
						>
							User
						</MenuItem>
						<MenuItem
							selected={user?.role === "admin"}
							onClick={() => handleRoleChange("admin")}
						>
							Admin
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
				<Toolbar />
				<Box
					sx={{
						width: 250,
						height: "100vh", // Full viewport height
						display: "flex",
						flexDirection: "column",
						p: 2,
						backgroundColor: "#1F2A40",
						opacity: 0.7,
					}}
					role="presentation"
					onClick={toggleDrawer(false)}
				>
					<Typography
						variant="h6"
						mb={2}
						sx={{ cursor: "pointer" }}
						onClick={() => navigate("/")}
					>
						Admin
					</Typography>
					{/* Add sidebar content here */}
					<Typography
						variant="h6"
						mb={2}
						sx={{ cursor: "pointer" }}
						onClick={() => navigate("/rate-mgmt")}
					>
						Rate Management
					</Typography>
					<Typography variant="h6" mb={2} sx={{ cursor: "pointer" }}>
						Settings
					</Typography>
				</Box>
			</Drawer>
		</>
	);
};

export default Header;
