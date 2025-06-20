import { Box, Toolbar } from "@mui/material";
import "./App.css";
import Header from "./organisms/Header";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import { ColorModeContext, useMode } from "./theme";
import ThemeProviderWrapper from "./atoms/ThemeProviderWrapper/ThemeProviderWrapper";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProviderWrapper theme={theme}>
				<AuthProvider>
					<Router>
						<Header />
						<Toolbar />
						<Box sx={{ maxWidth: 900, mx: "auto", width: "100%" }}>
							<AppRoutes />
						</Box>
					</Router>
				</AuthProvider>
			</ThemeProviderWrapper>
		</ColorModeContext.Provider>
	);
}

export default App;
