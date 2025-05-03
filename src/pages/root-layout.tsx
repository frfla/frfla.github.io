import 'styles/global-style.css';
import { Outlet } from 'react-router';
import { Grid } from 'components/_common/grid';
import { Nav } from 'components/sections/nav';
import { Footer } from 'components/sections/footer';

export default function RootLayout() {
  return (
    <Grid>
      <Nav />
      <Outlet />
      <Footer />
    </Grid>
  );
}
