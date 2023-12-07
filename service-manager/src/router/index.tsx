import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/Main.page';
import { SignUpPage } from '../pages/SignUp.page';
import { AnnouncePage } from '../pages/Announce.page';
import { ApplyListPage } from '../pages/ApplyList.page';
import { PasswordResetPage } from '../pages/PasswordReset.page';
import { NoticeView } from '../pages/notice/NoticeView.page';
import { NoticeCreate } from '../pages/notice/NoticeCreate.page';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/announce" element={<AnnouncePage />} />
      <Route path="/apply-list" element={<ApplyListPage />} />
      <Route path="/password-reset" element={<PasswordResetPage />} />
      <Route path="/notice" element={<NoticeView />} />
      <Route path="/notice-create" element={<NoticeCreate />} />
    </Routes>
  );
}
