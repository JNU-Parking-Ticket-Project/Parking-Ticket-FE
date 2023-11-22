import { Routes, Route } from 'react-router-dom';
import RequestPasswordResetPage from '../pages/RequestPasswordReset.page';

export default function Router() {
  return (
    <Routes>
      <Route path="/" />
      <Route
        path="/request-password-reset"
        element={<RequestPasswordResetPage />}
      />
    </Routes>
  );
}
