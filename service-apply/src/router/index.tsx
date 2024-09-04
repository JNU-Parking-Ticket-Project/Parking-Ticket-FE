import { Routes, Route } from 'react-router-dom';
import { PasswordResetPage } from '../pages/PasswordReset/PasswordReset.page';
import { RequestPasswordResetPage } from '../pages/PasswordReset/RequestPasswordReset.page';
import { HomePage } from '../pages/Home.page';
import { ApplyPage } from '../pages/apply/Apply.page';
import { AnnouncementListPage } from '../pages/Anouncement/AnnouncementList.page';
import { AnnouncementPage } from '../pages/Anouncement/Announcement.page';
import { AnnouncementLayoutPage } from '../pages/Anouncement/AnounceLayout.page';
import { PasswordResetLayout } from '../pages/PasswordReset/PasswordResetLayout.page';
import { ApplyDonePage } from '../pages/apply/ApplyDone.page';
import { ApplyDoneTempPage } from '../pages/apply/ApplyDoneTemp.page';
import { NotFound } from '../pages/NotFound';
import RouteChangeTracker from './RouteChangeTracker';

export function Router() {
  return (
    <>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/announcement/done" element={<ApplyDonePage />} />
        <Route path="/announcement/done/temp" element={<ApplyDoneTempPage />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
