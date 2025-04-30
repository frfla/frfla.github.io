import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/home/home';
import RootLayout from './pages/root-layout';
import Post from './pages/[repo]/[title]';

export function Router() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path=":repo" element={<></>} />
        <Route path=":repo/:title" element={<Post />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}
