import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home.page';
import { ApplyPage } from '../pages/Apply.page';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apply" element={<ApplyPage />} />
    </Routes>
  );
}
