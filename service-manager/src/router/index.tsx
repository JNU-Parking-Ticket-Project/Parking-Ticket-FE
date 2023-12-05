import { Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
