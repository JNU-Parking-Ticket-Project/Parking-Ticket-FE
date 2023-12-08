import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/Main.page';
import { SignUpPage } from '../pages/SignUp.page';
import { MainUserPage } from '../pages/Main.user';
import { AnnouncementPage } from '../pages/announcement/Announcement.page';
import { AnnouncementCreatePage } from '../pages/announcement/AnnouncementCreate.page';
import { ApplyListPage } from '../pages/ApplyList.page';
import { PasswordResetPage } from '../pages/PasswordReset.page';
import { NoticeView } from '../pages/notice/NoticeView.page';
import { NoticeCreate } from '../pages/notice/NoticeCreate.page';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/user" element={<MainUserPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/announcement" element={<AnnouncementPage />} />
      <Route path="/announcement-create" element={<AnnouncementCreatePage />} />
      <Route path="/applyList" element={<ApplyListPage />} />
      <Route path="/password-reset" element={<PasswordResetPage />} />
      <Route path="/notice" element={<NoticeView />} />
      <Route path="/notice-create" element={<NoticeCreate />} />
      <Route path="/notice-view" element={<NoticeView />} />
    </Routes>
  );
}
