import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home.page';
import { AnnouncementListPage } from '../pages/Anouncement/AnnouncementList.page';
import { AnnouncementPage } from '../pages/Anouncement/Announcement.page';
import { AnnouncementLayoutPage } from '../pages/Anouncement/AnounceLayout.page';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/announcement" element={<AnnouncementLayoutPage />}>
        <Route index element={<AnnouncementListPage />} />
        <Route path=":announcementId" element={<AnnouncementPage />} />
      </Route>
    </Routes>
  );
}
