import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/Main.page';
import { SignUpPage } from '../pages/SignUp.page';
import { AnnouncementPage } from '../pages/announcement/Announcement.page';
import { AnnouncementCreatePage } from '../pages/announcement/AnnouncementCreate.page';
import { ApplyListPage } from '../pages/ApplyList.page';
import { NoticeView } from '../pages/notice/NoticeView.page';
import { NoticeCreate } from '../pages/notice/NoticeCreate.page';
import { PasswordResetLayout } from '../pages/PasswordReset/PasswordResetLayout.page';
import { RequestPasswordResetPage } from '../pages/PasswordReset/RequestPasswordReset.page';
import { PasswordResetPage } from '../pages/PasswordReset/PasswordReset.page';
import { CommonLayout } from '../pages/CommonLayout.page';
import { AnnouncementListPage } from '../pages/announcement/AnnouncementList.page';
import { SettingLayout } from '../pages/setting/SettingLayout.page';
import { SectionSettingPage } from '../pages/setting/SectionSetting.page';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/password-reset" element={<PasswordResetLayout />}>
        <Route index element={<RequestPasswordResetPage />} />
        <Route
          path="/password-reset/:resetId"
          element={<PasswordResetPage />}
        />
      </Route>
      <Route path="/" element={<CommonLayout />}>
        <Route path="announcement" element={<AnnouncementListPage />} />
        <Route
          path="announcement/:announcementId"
          element={<AnnouncementPage />}
        />
        <Route
          path="announcement-create"
          element={<AnnouncementCreatePage />}
        />
        <Route path="apply-list" element={<ApplyListPage />} />
        <Route path="notice" element={<NoticeView />} />
        <Route path="notice-create" element={<NoticeCreate />} />
        <Route path="notice-view" element={<NoticeView />} />
        <Route path="setting" element={<SettingLayout />}>
          <Route path="section" element={<SectionSettingPage />} />
          <Route path="time" element={<div>시간 설정</div>} />
        </Route>
      </Route>
    </Routes>
  );
}
