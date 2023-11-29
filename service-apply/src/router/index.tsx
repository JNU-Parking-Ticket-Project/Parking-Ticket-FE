import { Routes, Route } from 'react-router-dom';
import { PasswordResetPage } from '../pages/PasswordReset.page';
import { RequestPasswordResetPage } from '../pages/RequestPasswordReset.page';
import { HomePage } from '../pages/Home.page';
import { AnnouncementListPage } from '../pages/AnnouncementList.page';
import { AnnouncementPage } from '../pages/Announcement.page';

export function Router() {
  return (
    <Routes>
      <Route
        path="/request-password-reset"
        element={<RequestPasswordResetPage />}
      />
      <Route path="/password-reset/:resetId" element={<PasswordResetPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/announcement" element={<AnnouncementListPage />} />
      <Route path="/announce">
        <Route path=":announcementId" element={<AnnouncementPage />} />
      </Route>
    </Routes>
  );
}
