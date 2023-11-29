import { Routes, Route } from 'react-router-dom';
import { PasswordResetPage } from '../pages/PasswordReset/PasswordReset.page';
import { RequestPasswordResetPage } from '../pages/PasswordReset/RequestPasswordReset.page';
import { HomePage } from '../pages/Home.page';
import { AnnouncementListPage } from '../pages/Anouncement/AnnouncementList.page';
import { AnnouncementPage } from '../pages/Anouncement/Announcement.page';
import { AnnouncementLayoutPage } from '../pages/Anouncement/AnounceLayout.page';
import { PasswordResetLayout } from '../pages/PasswordReset/PasswordResetLayout.page';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/announcement" element={<AnnouncementLayoutPage />}>
        <Route index element={<AnnouncementListPage />} />
        <Route path=":announcementId" element={<AnnouncementPage />} />
      </Route>
      <Route path="/password-reset" element={<PasswordResetLayout />}>
        <Route index element={<RequestPasswordResetPage />} />
        <Route
          path="/password-reset/:resetId"
          element={<PasswordResetPage />}
        />
      </Route>
    </Routes>
  );
}
