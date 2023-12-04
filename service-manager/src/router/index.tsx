import { Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/user" element={<MainUserPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/announce" element={<AnnouncePage />} />
      <Route path="/applyList" element={<ApplyListPage />} />
      <Route path="/notice" element={<NoticeView />} />
      <Route path="/notice-create" element={<NoticeCreate />} />
    </Routes>
  );
}
