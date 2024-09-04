import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/Main.page';
import { SignUpPage } from '../pages/SignUp.page';
import { AnnouncementPage } from '../pages/announcement/Announcement.page';
import { ApplyListPage } from '../pages/apply/ApplyList.page';
import { AdminPage } from '../pages/Admin.page';
import { PasswordResetLayout } from '../pages/PasswordReset/PasswordResetLayout.page';
import { RequestPasswordResetPage } from '../pages/PasswordReset/RequestPasswordReset.page';
import { PasswordResetPage } from '../pages/PasswordReset/PasswordReset.page';
import { CommonLayout } from '../pages/CommonLayout.page';
import { AnnouncementListPage } from '../pages/announcement/AnnouncementList.page';
import { SectionSettingPage } from '../pages/setting/SectionSetting.page';
import { NoticeViewPage } from '../pages/notice/NoticeView.page';
import { AnnouncementCreatePage } from '../pages/announcement/AnnouncementCreate.page';
import { NoticeUpdatePage } from '../pages/notice/NoticeUpdate.page';
import { AnnouncementUpdatePage } from '../pages/announcement/AnnouncementUpdate.page';
import { AnnouncementLayout } from '../pages/announcement/AnnouncementLayout.page';
import { NoticeLayout } from '../pages/notice/NoticeLayout.page';
import { NotFound } from '../pages/NotFound';
import { SettingBoardPage } from '../pages/setting/SettingList.page';
import { SectionCreateSettingPage } from '../pages/setting/SectionCreate.page';
import { ApplyBoardPage } from '../pages/apply/ApplyBoard.page';
import RouteChangeTracker from './RouterChangeTracker';

export default function Router() {
  return (
    <>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/password-reset" element={<PasswordResetLayout />}>
          <Route index element={<RequestPasswordResetPage />} />
          <Route
            path="/password-reset/:resetId"
            element={<PasswordResetPage />}
          />
        </Route>
        <Route path="/" element={<CommonLayout />}>
          <Route path="announcement" element={<AnnouncementLayout />}>
            <Route index element={<AnnouncementListPage />} />
            <Route path=":announcementId" element={<AnnouncementPage />} />
            <Route
              path="update/:announcementId"
              element={<AnnouncementUpdatePage />}
            />
            <Route path="create" element={<AnnouncementCreatePage />} />
          </Route>
          <Route path="apply-list">
            <Route index element={<ApplyBoardPage />} />
            <Route path=":eventId" element={<ApplyListPage />} />
          </Route>
          <Route path="setting">
            <Route index element={<SettingBoardPage />} />
            <Route path=":eventId" element={<SectionSettingPage />} />
            <Route path="create" element={<SectionCreateSettingPage />} />
          </Route>
          <Route path="notice" element={<NoticeLayout />}>
            <Route index element={<NoticeViewPage />} />
            <Route path="update" element={<NoticeUpdatePage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
