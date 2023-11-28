import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/Home.page';
import { AnnouncementListPage } from '../pages/AnnouncementList.page';
import { AnnouncementPage } from '../pages/Announcement.page';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/announcement" element={<AnnouncementListPage />} />
      <Route path="/announce">
        <Route path=":announcementId" element={<AnnouncementPage />} />
      </Route>
    </Routes>
  );
}
