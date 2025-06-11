import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Ham from './Ham'; 
import Main from './Main';
import Guide from './Guide';
import Hold from './Hold';
import HoldDetail from './HoldDetail'
import Gear from './Gear';
import GearDetail from './GearDetail';
import Stretch from './Stretch';
import StretchDetail from './StretchDetail';
import Gym from './Gym'
import GymDetail from './GymDetail';
import Navbar from './Navbar';
import Footer from './Footer';
import MyPage from './MyPage';
import { LikeProvider }  from './LikeContext';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar style={styles.nav} />
      
      <LikeProvider> {/* Routes 밖에서 감싸기 */}
        <Routes>
          {/* 좋아요 기능 없는 페이지들 */}
          <Route path="/" element={<Main />} />
          <Route path="/Ham" element={<Ham />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="/Hold" element={<Hold />} />
          <Route path="/HoldDetail" element={<HoldDetail />} />
          
          {/* 좋아요 기능 있는 페이지들 */}
          <Route path="/Gym" element={<Gym />} />
          <Route path="/GymDetail" element={<GymDetail />} />
          <Route path="/Gear" element={<Gear />} />
          <Route path="/GearDetail" element={<GearDetail />} />
          <Route path="/Stretch" element={<Stretch />} />
          <Route path="/StretchDetail" element={<StretchDetail />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </LikeProvider>

      {location.pathname !== '/Ham' && <Footer />}
    </>
  );
};

const styles = {
  nav: {
    position: 'fixed',
  },

}

export default Layout;
