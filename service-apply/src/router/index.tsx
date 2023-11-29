import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home.page';
import { AnnouncementListPage } from '../pages/AnnouncementList.page';
import { AnnouncementPage } from '../pages/Announcement.page';
import { AnnouncementLayoutPage } from '../pages/AnounceLayout.page';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/announce" element={<AnnouncementLayoutPage />}>
        <Route index element={<AnnouncementListPage />} />
        <Route path=":announcementId" element={<AnnouncementPage />} />
      </Route>
    </Routes>
  );
}
