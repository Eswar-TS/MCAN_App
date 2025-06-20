import { useAuth } from '../contexts/AuthContext';
import AdminHomePage from '../pages/AdminHomePage';
import GetStarted from '../pages/GetStarted';

const ProtectedLandingRoute = () => {
  const { user } = useAuth(); // replace this with your auth logic



  if (user.role === 'admin') {
    return <AdminHomePage />;
  }

  if (user.role === 'user') {
    return <GetStarted />;
  }

};
export default ProtectedLandingRoute;