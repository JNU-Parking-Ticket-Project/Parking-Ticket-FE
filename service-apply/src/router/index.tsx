import { Routes, Route } from 'react-router-dom';
import RequestPasswordResetPage from '../pages/RequestPasswordReset.page';
import PasswordResetPage from '../pages/PasswordReset.page';

export default function Router() {
  return (
    <Routes>
      <Route path="/" />
      <Route
        path="/request-password-reset"
        element={<RequestPasswordResetPage />}
      />
      <Route path="/password-reset/:resetId" element={<PasswordResetPage />} />
    </Routes>
  );
}
