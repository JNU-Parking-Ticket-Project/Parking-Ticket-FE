import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/Main.page';
import { SignUpPage } from '../pages/SignUp.page';
import { AnnouncementPage } from '../pages/announcement/Announcement.page';
import { ApplyListPage } from '../pages/ApplyList.page';
import { AdminPage } from '../pages/Admin.page';
import { PasswordResetLayout } from '../pages/PasswordReset/PasswordResetLayout.page';
import { RequestPasswordResetPage } from '../pages/PasswordReset/RequestPasswordReset.page';
import { PasswordResetPage } from '../pages/PasswordReset/PasswordReset.page';
import { CommonLayout } from '../pages/CommonLayout.page';
import { AnnouncementListPage } from '../pages/announcement/AnnouncementList.page';
import { SettingLayout } from '../pages/setting/SettingLayout.page';
import { SectionSettingPage } from '../pages/setting/SectionSetting.page';
import { TimeSettingPage } from '../pages/setting/TimeSetting.page';
import { NoticeViewPage } from '../pages/notice/NoticeView.page';
import { AnnouncementCreatePage } from '../pages/announcement/AnnouncementCreate.page';
import { NoticeUpdatePage } from '../pages/notice/NoticeUpdate.page';
import { AnnouncementUpdatePage } from '../pages/announcement/AnnouncementUpdate.page';

export default function Router() {
  return (
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
        <Route path="announcement">
          <Route index element={<AnnouncementListPage />} />
          <Route path=":announcementId" element={<AnnouncementPage />} />
          <Route
            path="update/:announcementId"
            element={<AnnouncementUpdatePage />}
          />
          <Route path="create" element={<AnnouncementCreatePage />} />
        </Route>
        <Route path="apply-list" element={<ApplyListPage />} />
        <Route path="notice" element={<NoticeViewPage />} />
        <Route path="setting" element={<SettingLayout />}>
          <Route path="section" element={<SectionSettingPage />} />
          <Route path="time" element={<TimeSettingPage />} />
        </Route>
        <Route path="notice" element={<NoticeViewPage />} />
        <Route path="notice-update" element={<NoticeUpdatePage />} />
      </Route>
    </Routes>
  );
}
