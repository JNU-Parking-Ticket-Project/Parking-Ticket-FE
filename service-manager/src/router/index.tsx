import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/Main.page';
import { SignUpPage } from '../pages/SignUp.page';
import { AnnouncePage } from '../pages/Announce.page';
import { ApplyListPage } from '../pages/ApplyList.page';
import { NoticeView } from '../pages/notice/NoticeView.page';
import { NoticeCreate } from '../pages/notice/NoticeCreate.page';
import { PasswordResetLayout } from '../pages/PasswordReset/PasswordResetLayout.page';
import { RequestPasswordResetPage } from '../pages/PasswordReset/RequestPasswordReset.page';
import { PasswordResetPage } from '../pages/PasswordReset/PasswordReset.page';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/announce" element={<AnnouncePage />} />
      <Route path="/apply-list" element={<ApplyListPage />} />
      <Route path="/password-reset" element={<PasswordResetLayout />}>
        <Route index element={<RequestPasswordResetPage />} />
        <Route
          path="/password-reset/:resetId"
          element={<PasswordResetPage />}
        />
      </Route>
      <Route path="/notice" element={<NoticeView />} />
      <Route path="/notice-create" element={<NoticeCreate />} />
    </Routes>
  );
}
