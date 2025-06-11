import React, { useState } from 'react';

const bodypartStretch = [
  { name: "손목 스트레칭", image: "/IMG/Stretch/part01.png" },
  { name: "어깨 스트레칭", image: "/IMG/Stretch/part02.png" },
  { name: "허리 스트레칭", image: "/IMG/Stretch/part03.png" },
  { name: "고관절 스트레칭", image: "/IMG/Stretch/part04.png" },
  { name: "종아리 스트레칭", image: "/IMG/Stretch/part05.png" },
  { name: "발목 스트레칭", image: "/IMG/Stretch/part06.png" },
  { name: "등 스트레칭", image: "/IMG/Stretch/part07.png" },
  { name: "목 스트레칭 (좌우)", image: "/IMG/Stretch/part08.png" },
  { name: "목 스트레칭 (앞뒤)", image: "/IMG/Stretch/part09.png" }
];

const purposeStretch = [
  { name: "준비운동용 스트레칭", image: "/IMG/Stretch/purpose01.png" },
  { name: "회복용 스트레칭", image: "/IMG/Stretch/purpose02.png" },
  { name: "유연성 향상 스트레칭", image: "/IMG/Stretch/purpose03.png" },
  { name: "통증 완화 스트레칭", image: "/IMG/Stretch/purpose04.png" },
  { name: "긴장 완화 스트레칭", image: "/IMG/Stretch/purpose05.png" },
  { name: "집중력 향상 스트레칭", image: "/IMG/Stretch/purpose06.png" }
];

const Stretch = () => {
  const [selectedTab, setSelectedTab] = useState('bodypart');
  const [likedItems, setLikedItems] = useState([]);

  const getCurrentList = () => {
    switch (selectedTab) {
      case 'bodypart':
        return bodypartStretch;
      case 'purpose':
        return purposeStretch;
      default:
        return bodypartStretch;
    }
  };

  const handleLike = (item) => {
    setLikedItems(prev => {
      const isAlreadyLiked = prev.some(liked => liked.name === item.name);
      if (isAlreadyLiked) {
        return prev.filter(liked => liked.name !== item.name);
      } else {
        return [...prev, item];
      }
    });
  };

  const isLiked = (itemName) => {
    return likedItems.some(liked => liked.name === itemName);
  };

  const renderGroupedCards = () => {
    const currentData = getCurrentList();
    const groups = [];

    for (let i = 0; i < currentData.length; i += 3) {
      groups.push(currentData.slice(i, i + 3));
    }

    return groups.map((group, idx) => (
        <div key={idx} style={styles.grid}>
          {group.map((item, i) => (
            <div key={i} style={styles.cardContainer}>
              <div style={styles.card}>
                <div style={styles.imageContainer}>
                  <img src={item.image} alt={item.name} style={styles.image} />
                  <button
                    style={styles.heartButton}
                    onClick={() => handleLike(item)}
                  >
                    <img 
                      src={isLiked(item.name) ? '/IMG/heart.png' : '/IMG/heart_Empty.png'} 
                      alt="heart" 
                      style={styles.heartIcon}
                    />
                  </button>
                </div>
              </div>
              <p style={styles.cardText}>{item.name}</p>
            </div>
          ))}
        </div>
    ));
  };

  return (
    <div>
      <section>
        <img
          src="/IMG/Banner/StretchBanner.png"
          alt="Banner"
          style={styles.banner}
        />
        <p style={styles.bannerTxt}>How<br />to<br />Stretch</p>
        <p style={styles.bannerDescription}>
          클라이밍 전후의 스트레칭은 부상 예방과 퍼포먼스 향상에 필수입니다.<br />
          부위별, 목적별로 구성된 스트레칭 루틴을 통해 유연성과 회복력을 높여보세요.
        </p>
      </section>

      <div style={styles.wrapper}>
        <section style={styles.section}>
          <div style={styles.tab}>
            <span 
              onClick={() => setSelectedTab('bodypart')} 
              style={{
                ...styles.tabItem,
                ...(selectedTab === 'bodypart' && styles.activeTab),
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (selectedTab !== 'bodypart') {
                  e.target.style.borderBottom = '0.14vw solid rgba(156, 255, 35, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTab !== 'bodypart') {
                  e.target.style.borderBottom = '0.14vw solid transparent';
                }
              }}
            >
              부위별
            </span>
            <span 
              onClick={() => setSelectedTab('purpose')} 
              style={{
                ...styles.tabItem,
                ...(selectedTab === 'purpose' && styles.activeTab),
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (selectedTab !== 'purpose') {
                  e.target.style.borderBottom = '0.14vw solid rgba(156, 255, 35, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTab !== 'purpose') {
                  e.target.style.borderBottom = '0.14vw solid transparent';
                }
              }}
            >
              목적별
            </span>
          </div>

          {renderGroupedCards()}
        </section>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '100vw',
    margin: '0 auto',
    padding: '0 8.3vw',
    boxSizing: 'border-box'
  },
  section: {
    padding: '1.75vw 0'
  },
  banner: {
    width: '100%',
    maxHeight: 'auto',
    display: 'block',
    marginBottom: '7vh'
  },
  bannerTxt: {
    position: 'absolute',
    fontFamily: 'Teko',
    fontSize: '9vw',
    fontWeight: '700',
    color: '#9CFF23',
    top: '-6%',
    left: '5%',
    lineHeight: '1.1'
  },
  bannerDescription: {
    position: 'absolute',
    fontSize: '1.1vw',
    fontWeight: '300',
    color: 'rgba(255,255,255,.7)',
    lineHeight: '1.7',
    bottom: '10%',
    left: '5.5%'
  },
  tab: {
    display: 'flex',
    gap: '1.4vw',
    justifyContent: 'center',
    marginBottom: '10vh',
    color: '#fff',
    fontWeight: '600'
  },
  tabItem: {
    padding: '0.35vw 0',
    borderBottom: '0.14vw solid transparent',
    transition: 'all 0.3s ease',
    fontSize: '1.1vw',
    fontWeight: '600',
  },
  activeTab: {
    borderBottom: '0.14vw solid #9CFF23',
    color: '#9CFF23',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3.5vw',
    marginBottom: '2.1vh',
    justifyItems: 'center'
  },
  cardContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2vw'
  },
  card: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  imageContainer: {
    position: 'relative',
    display: 'block',
    width: '100%'
  },
  image: {
    width: '80%',
    height: 'auto',
    borderRadius: '0.56vw',
    display: 'block',
    margin: '2vw auto',
  },
  cardText: {
    marginTop: '1vh',
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%'
  },
  heartButton: {
    position: 'absolute',
    top: '2.5vw',
    right: '3.2vw',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50%',
    width: '1.75vw',
    height: '1.75vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.2s ease',
    zIndex: 10,
  },
  heartIcon: {
    width: '1.05vw',
    height: '1.05vw',
    objectFit: 'contain'
  }
};

export default Stretch;