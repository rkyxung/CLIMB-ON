import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();         // 현재 경로 확인
  const navigate = useNavigate();         // 경로 전환을 위한 hook
  const isHamPage = location.pathname === "/Ham"; // 햄버거 페이지 여부

  // 햄버거 버튼 클릭 시: Ham <-> / 토글 이동
  const handleHamburgerClick = () => {
    if (isHamPage) {
      navigate("/"); // 햄버거 페이지에서 클릭 → 홈으로 나감
    } else {
      navigate("/Ham"); // 홈에서 클릭 → 햄버거 메뉴 열림
    }
  };

  // 네비게이션 바 스타일 조건 설정
  const navStyle = {
    ...styles.nav,
    backgroundColor: isHamPage ? '#9CFF23' : '#161616',
    color: isHamPage ? '#161616' : '#9CFF23',
  };

  const logoStyle = {
    ...styles.link,
    ...styles.logo,
    color: isHamPage ? '#161616' : '#9CFF23',
  };

  const hamburgerImage = isHamPage
    ? "IMG/hamburger_open.png"
    : "IMG/hamburger.png";

  return (
    <nav style={navStyle}>
      <div style={styles.navItems}>
      {/* 햄버거 버튼 */}
      <img
        style={styles.ham}
        src={hamburgerImage}
        alt="햄버거버튼"
        onClick={handleHamburgerClick}
      />

      {/* 햄버거 메뉴일 때는 로고와 마이페이지 숨김 */}
      {!isHamPage && (
        <h2>
          <Link to="/" style={logoStyle}>CLIMB ON</Link>
        </h2>
      )}

      {!isHamPage && (
        <Link to="/MyPage">
          <img style={styles.my} src="IMG/myPage.png" alt="마이페이지 btn" />
        </Link>
      )}
      </div>
    </nav>
  );
};

// 스타일 정의
const styles = {
  nav: {
    position: 'fixed',
    top: '0',
    left: '0',
    // padding: '0 6vw',
    height: '6vh',
    width: '100vw',
    borderBottom: '1px solid #9CFF23',
    zIndex: '999',
  },

  navItems: {
    maxWidth: '86.46%',
    height: '6vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
  },

  logo: {
    margin: 0,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: '1.5vw',
    width: '2vw',
    height: 'auto',
    fontFamily: 'Teko',
  },

  ham: {
    width: '1.8vw',
    height: 'auto',
    cursor: 'pointer',
  },

  my: {
    width: '1.4vw',
    height: 'auto',
  },

  link: {
    textDecoration: 'none',
    fontWeight: '500',
  }
};

export default Navbar;
