import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import UserDetailsPage from "./pages/UserDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/users/:userId" element={<UserDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
