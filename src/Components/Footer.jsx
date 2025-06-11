import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>

    {/* 격자 기준선 포함 내부 레이아웃 */}
    <div style={styles.inner}> 
      {/* 메뉴 항목 */}
      <ul style={styles.menu}> 
        <li style={styles.menuItem}>입문 가이드</li>
        <li style={styles.menuItem}>암장</li>
        <li style={styles.menuItem}>장비</li>
        <li style={styles.menuItem}>스트레칭</li>
        <li style={styles.menuItem}>홀드백과</li>
      </ul>

      {/* 중앙 대형 텍스트 */}
      <div style={styles.mainText}>CLIMB ON</div>
    </div>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#9cff23', // 전체 배경 컬러
    width: '100%',
    maxHeight: '17vw',
    marginTop: 'auto', // 페이지 하단에 자동으로 배치
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '75%',
    height: '100%',
    margin: '0 auto',
    zIndex: 0,
  },
  inner: {
    position: 'relative',
    zIndex: 2,
    width: '75%',
    height: '100%',
    maxHeight: '17vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1.5vw',
    paddingBottom: '0', // 하단 패딩 제거
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '3vw',
    padding: 0,
    margin: 0,
    fontSize: '1vw',
    fontWeight: '700',
    color: '#161616'
  },
  menuItem: {
    cursor: 'pointer'
  },
  mainText: {
    marginTop: '0vw',
    fontSize: '21vw',
    fontWeight: '900',
    color: '#161616',
    letterSpacing: '-0.2vw',
    fontFamily: 'Teko',
    lineHeight: '1',
    alignSelf: 'stretch',
    textAlign: 'center',
    marginBottom: '0'
  }
};

export default Footer;