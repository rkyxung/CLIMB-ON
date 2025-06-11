import React from 'react';
import { Link } from 'react-router-dom';

const Ham = () => {
  const menuItems = [
    { key: "bouldering", label: "What is Bouldering", to: "/Guide" },
    { key: "where", label: "Where is Climbing", to: "/Gym" },
    { key: "gear", label: "How’s this Climbing Gear", to: "/Gear" },
    { key: "stretch", label: "How to Stretch", to: "/Stretch" },
    { key: "hold", label: "What is a Hold", to: "/Hold" },
  ];

  return (
    <div style={styles.fullscreen}>
      <ul style={styles.menuList}>
        {menuItems.map((item) => (
          <li
            key={item.key}
            style={styles.menuItem}
          >
            <Link to={item.to} style={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  fullscreen: {
    position: 'relative',
    top: '6vh',
    backgroundColor: "#9CFF23", // 전체 배경
    width: "100vw",
    height: "calc(100vh -  6vh)",
    margin: 0,
    padding: 0,
  },
  menuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  menuItem: {
    height: "calc((100vh -  6.8vh) / 5)", // ✅ 5등분
    display: "flex", // 텍스트 가운데 정렬
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Teko",
    fontSize: "5vw",
    fontWeight: "bold",
    color: "#111",
    // outline: "1px solid #111",
    borderTop: "1px solid #111",
    borderBottom: "1px solid #111",
    backgroundColor: "#9CFF23",
    transition: "0.2s",
    cursor: "pointer",
    letterSpacing: '0.1vw',
  },
  link: {
    textDecoration: "none",
    color: "inherit", // 기본 색상 상속
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};


const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  li:hover {
    background-color: #111 !important;
    color: #9CFF23 !important;
  }
`;
document.head.appendChild(styleSheet);

export default Ham;
