import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLike } from './LikeContext';

export const Shoes = [
  {
    name: '드라고 XT',
    brand: 'SCARPA',
    price: '265,000',
    image: './IMG/Shoes/XT.png'
  },
  {
    name: '로버',
    brand: 'MAD ROCK',
    price: '119,000',
    image: './IMG/Shoes/ROVER.png'
  },
  {
    name: '이아티 (IATI)',
    brand: 'TENAYA',
    price: '218,000',
    image: './IMG/Shoes/IATI.png'
  },
  {
    name: '벨로체',
    brand: 'SCARPA',
    price: '210,000',
    image: './IMG/Shoes/VELOCE.png'
  },
  {
    name: '드리프터',
    brand: 'MAD ROCK',
    price: '109,000',
    image: './IMG/Shoes/DRIFTER.png'
  },
  {
    name: '오아시 (OASI)',
    brand: 'TENAYA',
    price: '210,000',
    image: './IMG/Shoes/OASI.png'
  },
  {
    name: '퓨리아 에어',
    brand: 'SCARPA',
    price: '260,000',
    image: './IMG/Shoes/AIR.png'
  },
  {
    name: '드론 컴프 HV',
    brand: 'MAD ROCK',
    price: '169,000',
    image: './IMG/Shoes/HV.png'
  },
  {
    name: '인달로 (INDALO)',
    brand: 'TENAYA',
    price: '229,000',
    image: './IMG/Shoes/INDALO.png'
  },
  {
    name: '인스팅트 VSR',
    brand: 'SCARPA',
    price: '255,000',
    image: './IMG/Shoes/VSR.png'
  },
  {
    name: '샤크 3 LV',
    brand: 'MAD ROCK',
    price:' 165,000',
    image: './IMG/Shoes/LV3.png'
  },
  {
    name: '탄타 (TANTA)',
    brand: 'TENAYA',
    price: '128,000',
    image: './IMG/Shoes/TANTA.png'
  }
];

export const Chalks = [
  {
    name: '초크 레볼 250g',
    brand: '오손',
    price: '25,000',
    image: './IMG/Chalks/chalk01.png'
  },
  {
    name: '제로티티 200g',
    brand: '도쿄파우더',
    price: '28,000',
    image: './IMG/Chalks/chalk02.png'
  },
  {
    name: '파워크러치 300g',
    brand: '패츌',
    price: '210,000',
    image: './IMG/Chalks/chalk03.png'
  },
  {
    name: '퓨어초크 350g',
    brand: '와일드 컨트리',
    price: '23,000',
    image: './IMG/Chalks/chalk04.png'
  },
  {
    name: 'DRY 5 300g',
    brand: '락 테크놀로지',
    price: '22,000',
    image: './IMG/Chalks/chalk05.png'
  },
  {
    name: '초크 크럼블 200g',
    brand: '배암',
    price: '18,000',
    image: './IMG/Chalks/chalk06.png'
  },
  {
    name: '고릴라 그립 142g',
    brand: '프렌션 짐',
    price: '22,000',
    image: './IMG/Chalks/chalk07.png'
  },
  {
    name: '바위 초크 250g',
    brand: '바위',
    price: '18,000',
    image: './IMG/Chalks/chalk08.png'
  },
  {
    name: 'CL 암벽초크 200g',
    brand: 'CL',
    price: '12,000',
    image: './IMG/Chalks/chalk09.png'
  },
  {
    name: '오손 액상초크',
    brand: '오손',
    price: '18,000',
    image: './IMG/Chalks/chalk10.png'
  },
  {
    name: '액상초크',
    brand: '엘리베이트',
    price: '18,000',
    image: './IMG/Chalks/chalk11.png'
  },
  {
    name: '굿초크 액상초크',
    brand: '굿초크',
    price: '15,000',
    image: './IMG/Chalks/chalk12.png'
  }
];

export const Accessories = [
  {
    name: '포톤 에코',
    brand: '트랑고',
    price: '29,000',
    image: './IMG/Accessories/Accessory01.png'
  },
  {
    name: '사가 초크백',
    brand: '페츨',
    price: '43,000',
    image: './IMG/Accessories/Accessory02.png'
  },
  {
    name: '플린트 초크백',
    brand: '8B PLUS',
    price: '50,000',
    image: './IMG/Accessories/Accessory03.png'
  },
  {
    name: '텔레스코피',
    brand: '디우드스톡',
    price: '116,000',
    image: './IMG/Accessories/Accessory04.png'
  },
  {
    name: '우든 홀드 브러쉬',
    brand: '그리벨',
    price: '22,000',
    image: './IMG/Accessories/Accessory05.png'
  },
  {
    name: '90×13 홀드 브러쉬',
    brand: '파모',
    price: '5,500',
    image: './IMG/Accessories/Accessory06.png'
  },
  {
    name: 'CRIMP 13 테이프',
    brand: '테이퍼스',
    price: '2,800',
    image: './IMG/Accessories/Accessory07.png'
  },
  {
    name: '클라이밍 테이프',
    brand: '부토라 추파',
    price: '6,500',
    image: './IMG/Accessories/Accessory08.png'
  },
  {
    name: '스포츠 테이프',
    brand: '엘란드',
    price: '7,900',
    image: './IMG/Accessories/Accessory09.png'
  },
  {
    name: '포어암',
    brand: '블랙다이아몬드',
    price: '16,000',
    image: './IMG/Accessories/Accessory10.png'
  },
  {
    name: 'CL4 볼더링 장갑',
    brand: 'CL4',
    price: '40,000',
    image: './IMG/Accessories/Accessory11.png'
  },
  {
    name: '핑거스트레칭 연습기',
    brand: '파워볼',
    price: '4,400',
    image: './IMG/Accessories/Accessory12.png'
  }
];


const Gear = () => {
  const [selectedTab, setSelectedTab] = useState('SHOES');
  const [gearIndex, setGearIndex] = useState(0);
  
  // Context에서 좋아요 관련 함수들 가져오기
  const { toggleLike, isLiked } = useLike();

  const getCurrentList = () => {
    switch (selectedTab) {
      case 'SHOES':
        return Shoes;
      case 'CHALK':
        return Chalks;
      case 'ACCESSORY':
        return Accessories;
      default:
        return Shoes;
    }
  };

  // 좋아요 토글 함수
  const handleLike = (item) => {
    const gearData = {
      id: item.name, // 고유 식별자
      name: item.name,
      brand: item.brand,
      price: item.price,
      image: item.image
    };
    toggleLike(gearData, '장비'); // Context의 toggleLike 사용
  };

  // 왼쪽으로 이동 버튼 함수
  const handlePrevGear = () => {
    if (gearIndex > 0) {
      setGearIndex(gearIndex - 1);
    }
  };

  // 오른쪽으로 이동 버튼 함수
  const handleNextGear = () => {
    if (gearIndex + 5 < Shoes.length) {
      setGearIndex(gearIndex + 1);
    }
  };

  return (
    <div>
      {/* 메인 배너 */}
      <section>
      <img
        src="./IMG/Banner/GearBanner.png"
        alt="Banner"
        style={styles.banner}
      />
      <p style={styles.bannerTxt}>
        How's<br/>
        this<br/>
        Climbing Gear
      </p>

      <p style={styles.bannerDescription}>
      클라이밍 장비는 단순한 도구를 넘어, 루트와 움직임에 최적화된 기능적 도구입니다.<br/>
      볼더링에서는 신발, 초크, 초크백, 브러시 등의 간단한 장비만으로도 루트를 완주할 수 있으며,<br/>
      장비의 선택은 퍼포먼스, 안전성, 그리고 효율적인 무브에 직접적인 영향을 줍니다.
      </p>
      </section>
      
      <div style={styles.wrapper}>
        {/* 리스트 메뉴 */}
        <div style={styles.tab}>
          <span 
            onClick={() => setSelectedTab('SHOES')} 
            style={{
              ...styles.tabItem,
              ...(selectedTab === 'SHOES' && styles.activeTab),
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (selectedTab !== 'SHOES') {
                e.target.style.borderBottom = '2px solid rgba(156, 255, 35, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedTab !== 'SHOES') {
                e.target.style.borderBottom = '2px solid transparent';
              }
            }}
          >
            CLIMBING SHOE
          </span>
          <span 
            onClick={() => setSelectedTab('CHALK')} 
            style={{
              ...styles.tabItem,
              ...(selectedTab === 'CHALK' && styles.activeTab),
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (selectedTab !== 'CHALK') {
                e.target.style.borderBottom = '2px solid rgba(156, 255, 35, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedTab !== 'CHALK') {
                e.target.style.borderBottom = '2px solid transparent';
              }
            }}
          >
            CHALK
          </span>
          <span 
            onClick={() => setSelectedTab('ACCESSORY')} 
            style={{
              ...styles.tabItem,
              ...(selectedTab === 'ACCESSORY' && styles.activeTab),
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (selectedTab !== 'ACCESSORY') {
                e.target.style.borderBottom = '2px solid rgba(156, 255, 35, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedTab !== 'ACCESSORY') {
                e.target.style.borderBottom = '2px solid transparent';
              }
            }}
          >
            ACCESSORY
          </span>
        </div>

        {/* 리스트 그리드   */}
        <div style={styles.grid}>
          {getCurrentList().map((item, i) => (
            <div key={i} style={styles.cardContainer}>
              <div style={styles.card}>
                <img className="rotate-on-hover" src={item.image} alt={item.name} style={styles.shoeLogo} />
                <button
                  style={styles.heartButton}
                  onClick={() => handleLike(item)}
                >
                  <img 
                    src={isLiked(item.name, '장비') ? './IMG/heart.png' : './IMG/heart_Empty.png'}  
                    alt="heart" 
                    style={styles.heartIcon}
                  />
                </button>
              </div>
              <div style={styles.shoeLabelRow}>
                <div style={styles.nameWithBrand}>
                  <span style={styles.shoeName}><Link to="/GearDetail" style={{textDecoration: 'none', color: '#fff'}}>{item.name}</Link></span>
                  <span style={styles.shoeBrand}>{item.brand}</span>
                </div>
                <span style={styles.shoePrice}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '75vw',
    margin: '0 auto',
    padding: '0 120px',
    boxSizing: 'border-box',
    marginBottom: '20rem'
  },
  section: {
    padding: '2.5rem 0'
  },
  banner: {
    width: '100%',
    maxHeight: 'auto',
    display: 'block',
    marginBottom: '10rem'
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
    fontSize: '16px',
    fontWeight: '300',
    color: 'rgba(255,255,255,.7)',
    lineHeight: '1.7',
    bottom: '10%',
    left: '5.5%'
  },
  tab: {
    display: 'flex',
    gap: '2rem',
    fontWeight: '500',
    color: '#fff',
    justifyContent: 'center',
    marginBottom: '5rem',
  },

  tabItem: {
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '500',
  },

  activeTab: {
    borderBottom: '2px solid #9CFF23',
    color: '#9CFF23',
  },
  grid: {
    maxWidth: '960px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '120px',
    marginBottom: '10rem',
    boxSizing: 'border-box',
    marginTop: '2rem',
    margin: '0 auto'
  },
  cardContainer: {
    position: 'relative',
  },
  card: {
    position: 'relative',
    backgroundColor: '#EAEAEA',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    margin: '0 auto',
  },
  card01: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1rem',
    margin: '0 auto'
  },
  shoeLogo: {
    width: '70%',
    height: 'auto',
    objectFit: 'contain',
    marginBottom: '1rem'
  },
  shoeLabelRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
    margin: '0 auto',
    marginTop: '0.5rem'
  },
  
  nameWithBrand: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem'
  },
  
  shoeName: {
    fontWeight: '600',
    fontSize: '1rem',
    color: '#fff'
  },
  
  shoeBrand: {
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, .8)'
  },
  
  shoePrice: {
    fontWeight: '600',
    fontSize: '1rem',
    color: '#fff'
  },

  heartButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '50%',
    width: '2vw',
    height: '2vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.2s ease',
    zIndex: 10,
  },
    heartIcon: {
    width: '1.2vw',
    height: 'auto',
    objectFit: 'contain',
  }
};

export default Gear;