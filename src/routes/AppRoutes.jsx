import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "../pages/GetStarted";
import ApplicationHub from "../pages/ApplicationHub";
import SignDoc from "../pages/SignDoc";
import CustomerSearch from "../pages/CustomerSearch";
import ConfirmationPage from "../pages/ConfirmationPage";
import ApplicantDetails from "../pages/ApplicantDetails";
import AccountSelection from "../pages/AccountSelection";
import RrspDetails from "../pages/RrspDetails";
import SubmittedPage from "../pages/SubmittedPage";
import AdminHomePage from "../pages/AdminHomePage";
import { ROLES } from "../roles";
import ProtectedRoute from "./ProtectedRoutes";
import AdminReviewPage from "../pages/AdminReviewPage";
import ProtectedLandingRoute from "./ProtectedLandingRoute";
import RateManagement from "../pages/RateManagement";
import RateManagementTable from "../pages/RateManagementTable";

const AppRoutes = () => (
		<Routes>
			<Route path="/" element={<ProtectedLandingRoute />} />

			<Route
				path="/admin-review"
				element={
					<ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
						<AdminReviewPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/rate-mgmt"
				element={
					<ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
						<RateManagement />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/rate-mgmt-table"
				element={
					<ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
						<RateManagementTable />
					</ProtectedRoute>
				}
			/>

			<Route path="/hub" element={<ApplicationHub />} />
			<Route path="/confirmation" element={<ConfirmationPage />} />
			<Route path="/sign-doc" element={<SignDoc />} />
			<Route path="/customer-search" element={<CustomerSearch />} />
			<Route path="/applicant-details" element={<ApplicantDetails />} />
			<Route path="/account-selection" element={<AccountSelection />} />
			<Route path="/rrsp-details" element={<RrspDetails />} />
			<Route path="/app-submitted" element={<SubmittedPage />} />
			{/*  <Route path="/confirm-delete" element={<DeleteConfirmation />} /> */}
		</Routes>
);

export default AppRoutes;
