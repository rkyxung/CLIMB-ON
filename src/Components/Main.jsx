import { React, useRef, useEffect } from 'react';
import { useState } from 'react';
import { GymsSeoul } from './Gym';
import { Shoes } from './Gear';


const recommendations = [
  {
    type: '밸런스',
    desc: '슬로퍼 + 엣지\n발끝까지 집중력을 요구하는 루트',
    txt: 'Stay balanced. Slopers and edges won’t forgive.',
    image: '/IMG/Gyms_seoul/Seoul05.png',
    gym: '손상원',
    point: '을지로점',
    address: '서울 중구 남대문로 125 지하1층',
    hold: '/IMG/Holds/Hold01.png'
  },
  {
    type: '파워',
    desc: '핀치 + 포켓\n다이나믹 무브와 큰 동작 중심 루트',
    txt: 'More force, more flow.',
    image: '/IMG/Gyms_seoul/Seoul08.png',
    gym: '락랜드',
    point: '수유점',
    address: '서울 강북구 도봉로 315 2F',
    hold: '/IMG/Holds/Hold02.png'
  },
  {
    type: '테크닉',
    desc: '크림프 + 엣지\n정확한 풋워크와 바디포지션이 중요한 루트',
    txt: 'Every move counts. Place wisely.',
    image: '/IMG/Gyms_seoul/Seoul04.png',
    gym: 'PEAKERS',
    point: '종로점',
    address: '서울 종로구 종로 33길 12',
    hold: '/IMG/Holds/Hold03.png'
  },
  {
    type: '볼더링',
    desc: '볼륨 + 포켓\n짧고 강한 루트, 파워 + 전략을 모두 요구',
    txt: 'Small space, big power.',
    image: '/IMG/Gyms_seoul/Seoul09.png',
    gym: '드림캐쳐',
    point: '노원점',
    address: '서울 노원구 상계로 45',
    hold: '/IMG/Holds/Hold04.png'
  }
];


const Main = () => {

  // 2. 상태값
  const [current, setCurrent] = useState(recommendations[0]);

  // 3. 클릭 시 랜덤 추천
  const handleShuffle = () => {
    let random;
    do {
      random = recommendations[Math.floor(Math.random() * recommendations.length)];
    } while (random === current); // 중복 방지
    setCurrent(random);
  };


  const [cards, setCards] = useState(GymsSeoul.slice(0, 5)); // 초기 5개 카드 설정

  // 3초마다 카드 위치 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards]; // 기존 배열 복사
        newCards.unshift(newCards.pop()); // 마지막 요소를 맨 앞으로 이동
        return newCards; // 업데이트된 배열 반환
      });
    }, 3000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 타이머 제거
  }, []);

  // 상태 설정 (useState 사용)
  const [gearIndex, setGearIndex] = useState(0);

  // 왼쪽으로 이동 버튼 함수
  const handlePrevGear = () => {
    // gearIndex가 0보다 클 때만 감소
    if (gearIndex > 0) {
      setGearIndex(gearIndex - 1);
    }
  };

  // 오른쪽으로 이동 버튼 함수
  const handleNextGear = () => {
    // 배열 길이보다 5개 덜 많을 때만 증가
    if (gearIndex + 5 < Shoes.length) {
      setGearIndex(gearIndex + 1);
    }
  };

  return (
    <div>
      {/* 메인 배너 */}
      <section style={styles.mainBanner}>
        <div style={styles.grids}>
          <div style={styles.climb}>CLIMB</div>
          <div style={styles.grid01}></div>
          <div style={styles.grid02}></div>
          <div style={styles.grid03}></div>
          <div style={styles.on}>&mdash; ON</div>
          <div style={styles.desc}>
            Step into the wall,<br />
            and discover how far your grip can take you.
          </div>
          <div style={styles.Image01}></div>
          <div style={styles.never}>NEVER OFF</div>
          <div style={styles.grid04}></div>
          <div style={styles.Image02}></div>
          <div style={styles.grid05}></div>
          <div style={styles.grid06}></div>
        </div>
        <div style={styles.bouldering}>BOULDERING</div>
      </section>

      <section style={styles.sloganWrapper}>
        <div style={styles.sloganBg}></div>
        <p style={styles.slogan}>"Climb ON. Never Off."</p>
        <p style={styles.slogan02}>
          한 번 시작하면, 멈추는 법은 없습니다. <br />
          <span style={{color: '#9CFF23', fontWeight: '600'}}>담대하게, 에너지 있게.</span> CLIMB ON은 항상 켜져 있습니다.
        </p>
      </section>

      <div style={styles.container}>
        {/* 오늘의 추천 */}
        <div style={{...styles.title, margin: '8vw 0 2.5vw'}}>오늘의 추천</div>
        <section style={{...styles.section, ...styles.recommendations, position: 'relative'}}>
        <div style={styles.backgroundText}>{current.txt} {current.txt} {current.txt} {current.txt}</div>

        {/* 상단 - 아이콘 & 설명 */}
        <div style={styles.recoTop}>
          <div>
            <h3 style={styles.recoTitle}>{current.type}</h3>
            <p style={styles.recoDesc}>{current.desc}</p>
          </div>
        </div>

        <div style={styles.txtBox}>
          <p style={styles.txt}>{current.txt}</p>
        </div>

        <div style={styles.recoGrid}>
          <img src={current.image} alt="암장" style={styles.gymImage} />
          <div style={styles.gymTextBox}>
            <div style={styles.nameBox}>
              <p style={styles.gymName}>{current.gym}</p>
              <p style={styles.subGymName}>{current.point}</p>
            </div>
            <div style={styles.rotate}>
              <span style={{...styles.rotateButton, cursor: 'pointer'}} onClick={handleShuffle}>↻</span>
            </div>
          </div>
        </div>

        <p style={styles.address}>{current.address}</p>
      </section>

      {/* 미리보기: 암장 찾기 */}
              <section style={styles.section}>
        <div style={{...styles.previewHeader, marginTop: '20vw'}}>
          <h2 style={styles.title}>암장 찾기 <span style={styles.subTitle}>서울</span></h2>
          <a href="/Gym" style={styles.moreLink}>+ 더보기</a>
        </div>

        {/* 카드 레이아웃 - 암장 찾기 */}
        <div style={styles.cardContainer}>
          {cards.map((gym, i) => (
            <div
              key={i}
              style={{
                ...styles.cardWrapper,
                ...(i === 2 && styles.centerCard),
                ...(i === 1 || i === 3) && styles.secondCard,
                ...(i === 0 || i === 4) && styles.outerCard,
              }}
            >
              <div style={styles.cardImageContainer}>
                <img src={gym.image} alt={gym.name} style={styles.cardImage} />
              </div>
              {i === 2 && (
                <p style={styles.centerCardText}>
                  {gym.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

            {/* 미리보기: 장비 추천 */}
      <section style={styles.section}>
        <div style={{...styles.previewHeader, marginTop: '3vw'}}>
          <h2 style={styles.title}>장비 추천 <span style={styles.subTitle}>암벽화</span></h2>
          <a href="/Gear" style={styles.moreLink}>+ 더보기</a>
        </div>

        {/* 카드 레이아웃 - 장비 추천 */}
        <div style={styles.cardContainer}>
          {Shoes.slice(gearIndex, gearIndex + 5).map((shoe, i) => (
            <div
              key={i}
              style={{
                ...styles.cardWrapper,
                ...(i === 2 && styles.centerCard),
                ...(i === 1 || i === 3) && styles.secondCard,
                ...(i === 0 || i === 4) && styles.outerCard,
              }}
            >
              <div style={styles.cardImageContainer}>
                <img src={shoe.image} alt={shoe.name} style={styles.cardImage} />
              </div>
              {i === 2 && (
                <p style={styles.centerCardText}>
                  {shoe.name}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* 네비게이션 버튼 */}
        <div style={styles.navContainer}>
          <button style={styles.navButton} onClick={handlePrevGear}>{'<'}</button>
          <button style={styles.navButton} onClick={handleNextGear}>{'>'}</button>
        </div>
      </section>
      </div>
    </div>
  );
};

const styles = {
  mainBanner: {
    position: 'relative',
    top: '6vh',
    maxWidth: '86.46%',
    maxHeight: '93.5vh',
    margin: '0 auto',
  },
  grids: {
      display: "grid", // grid 레이아웃 사용
      gridTemplateColumns: "repeat(8, 1fr)", // 4등분 컬럼
      gridTemplateRows: "repeat(6, 1fr)", // 3행 구조
      backgroundColor: "#161616", // 전체 배경 검정색
      color: "#9CFF23", // 형광 연두 텍스트
      width: "100%", // 화면 전체 너비
      height: "93.5vh", // 화면 전체 높이
      fontFamily: 'Teko',
      border: '1px solid #9cff23',
  },
  climb: {
    gridColumn: "1/ 4", // 첫 번째 열에 위치
    gridRow: "1 / 1", // 첫 번째 줄에 위치
    fontSize: "8vw", // 큰 글자
    fontWeight: "bold", // 굵은 글씨
    fontFamily: 'Teko',
    border: '1px solid #9cff23',
    textAlign: 'center',
    letterSpacing: '0.2vw',
  },
  grid01: {
    gridColumn: "4/ 8", // 첫 번째 열에 위치
    gridRow: "1 / 1", // 첫 번째 줄에 위치
    border: '1px solid #9cff23',
  },
  grid02: {
    gridColumn: "8/ 8", // 첫 번째 열에 위치
    gridRow: "1 / 1", // 첫 번째 줄에 위치
    border: '1px solid #9cff23',
  },
  grid03: {
    gridColumn: "1/ 1", // 첫 번째 열에 위치
    gridRow: "2 / 2", // 첫 번째 줄에 위치
    border: '1px solid #9cff23',
  },
  on: {
    gridColumn: "2 / 5",
    gridRow: " 2 / 3",
    fontSize: "8vw",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: 'Teko',
    border: '1px solid #9cff23',
    textAlign: 'center',
    letterSpacing: '0.2vw',
  },
  Image01: {
    gridColumn: "1 / 5",
    gridRow: "3 / 5",
    backgroundImage: `url("/IMG/mainImg.png")`, // ✅ 이미지 경로 확인 필요
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: 'Teko',
    border: '1px solid #9cff23',
  },
  Image02: {
    gridColumn: "5 / 9",
    gridRow: "4 / 6",
    backgroundImage: `url("/IMG/mainImg.png")`, // ✅ 이미지 경로 확인 필요
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: 'Teko',
    border: '1px solid #9cff23',
  },
  grid04: {
    gridColumn: "1 / 5", // 첫 번째 열에 위치
    gridRow: "5 / 5", // 첫 번째 줄에 위치
    border: '1px solid #9cff23',
    padding: '4vw',
  },
  grid05: {
    gridColumn: "7 / 9", // 첫 번째 열에 위치
    gridRow: "6 / 6", // 첫 번째 줄에 위치
    border: '1px solid #9cff23',
    padding: '3vw',
  },
  never: {
    display: 'flex',
    gridColumn: "5 / 9",
    gridRow: "3 / 3",
    fontSize: "8vw",
    fontWeight: "bold",
    backgroundColor: "#9CFF23", // 형광 연두 배경
    color: "#000", // 글자 검정
    fontFamily: 'Teko',
    justifyContent: "center",
    alignItems: 'center',
  },
  desc: {
    display: 'flex',
    gridColumn: "5 / 9",
    gridRow: "2 / 3",
    fontSize: "2vw",
    color: "rgba(255, 255, 255, .9)",
    fontFamily: 'Teko',
    fontWeight: '600',
    border: '1px solid #9cff23',
    justifyContent: "center",
    alignItems: 'center',
  },
  bouldering: {
    top: '70%',
    left: '1.5%',
    position: 'absolute',
    display: 'flex',
    fontSize: "13vw",
    fontWeight: "bold",
    color: '#9CFF23',
    fontFamily: 'Teko',
    justifyContent: "center",
    alignItems: 'center',
  },

  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '20px',
    padding: '0 120px'
  },
  section: {
    gridColumn: '1 / -1',
    marginBottom: '15vh'
  },
  sloganWrapper: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '86.46%',
    height: 'auto',
    margin: '45vh auto',
  },
  sloganBg: {
    position: 'absolute',
    top: '-7%',
    width: '25vw',
    height: '25vw',
    backgroundColor: 'rgba(156, 255, 35, 0.2)',
    borderRadius: '100%',
    filter: 'blur(150px)',
  },
  slogan: {
    fontFamily: 'Teko',
    fontSize: '3vw',
    fontWeight: '600',
    color: '#9CFF23',
    marginBottom: '0.3vw',
    letterSpacing: '0.1vw',
  },
  slogan02: {
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: '1.2vw',
    lineHeight: '2vw'
  },

  //오늘의 추천
  recommendations: {
    margin: '0 auto'
  },

  backgroundText: {
    position: 'absolute',
    top: '40%',
    left: '0',
    width: '200%',
    fontFamily: 'Teko',
    fontSize: '13vw',
    fontWeight: 'bold',
    color: '#9CFF23',
    opacity: 0.3,
    whiteSpace: 'nowrap',
    zIndex: -1,
    pointerEvents: 'none',
    userSelect: 'none',
    transform: 'translateY(-50%) rotate(-10deg)',
    animation: 'marquee 5s linear infinite',
    letterSpacing: '0.1vw',
    display: 'inline-block',
  },

recoTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1.5vw'
  },
  hold: {
    width: '60vw',
    height: '60vw'
  },
  recoTitle: {
    fontSize: '1.3vw',
    color: '#9CFF23',
    marginBottom: '0.3vw',
    textAlign: 'center'
  },
  recoDesc: {
    fontSize: '1vw',
    color: '#fff',
    whiteSpace: 'pre-line',
    textAlign: 'center',
    flexDirection: 'column',
    lineHeight: '150%'

  },
  txtBox: {
    border: '2px solid #9CFF23',
    padding: '0.5rem 1rem',
    marginTop: '1rem',
    width: '90%',
    textAlign: 'center'
  },
  txt: {
    color: '#9CFF23',
    fontSize: '1.08vw',
    fontWeight: '500'
  },
  recoGrid: {
    display: 'flex',
    gap: '2vw',
    marginTop: '2vw',
    alignItems: 'flex-start'
  },

  // 새로운 카드 컨테이너 스타일
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1vw',
    height: '25vw',
    marginTop: '2vw',
    width: '86.46%',
    margin: '2vw auto 0',
  },

  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
  },

  centerCard: {
    transform: 'scale(1.3)',
  },

  secondCard: {
    transform: 'scale(0.8)',
    opacity: 0.9,
  },

  outerCard: {
    transform: 'scale(0.5)',
    opacity: 0.7,
  },

  cardImageContainer: {
    backgroundColor: '#d1d5db',
    borderRadius: '8px',
    overflow: 'hidden',
  },

  cardImage: {
    width: '12vw',
    height: '12vw',
    objectFit: 'cover',
    display: 'block',
  },

  centerCardText: {
    marginTop: '1vw',
    fontSize: '1.2vw',
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },

  carouselWrapper: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    overflow: 'hidden', 
    height: '20vw',
  },

  navContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2vw',
    marginTop: '2vw',
  },

  navButton: {
    background: 'none',
    border: '2px solid #9CFF23',
    color: '#9CFF23',
    fontSize: '1.5vw',
    cursor: 'pointer',
    padding: '0.5vw 1vw',
    borderRadius: '8px',
  },

  cardWindow: {
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '86.46%',
  },

  cardTrack: {
    display: 'flex',
    gap: '0.5vw',
    transition: 'transform 0.3s ease',
  },

  gymImage: {
    maxWidth: '15.5vw',
    width: '100%',
    height: '15.5vw',
    objectFit: 'cover'
  },
  gymTextBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#fff',
    height: '15.5vw'
  },
  
  nameBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.3rem' 
  },
  
  gymName: {
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    fontSize: '1.25rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  
  subGymName: {
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)',
    display: 'flex'
  },
  rotate: {
    width: '2.08vw',
    height: '2.08vw',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: '2px solid #9CFF23',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto'
  },
  rotateButton: {
    color: '#9CFF23',
    fontSize: '1.2rem'
  },
  address: {
    fontSize: '0.75rem',
    color: '#ccc',
    marginTop: '0.5rem'
  },
  
  fullText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: '1rem'
  },
  title: {
    gridColumn: '1 / -1',
    fontSize: '1.25vw',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '1rem'
  },
  card: {
    backgroundColor: '#d1d5db',
    height: '8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBox: {
    backgroundColor: '#d1d5db',
    height: '8rem'
  },

  //미리보기 그리드
  subTitle: {
    fontSize: '0.8vw',
    color: '#fff',
    padding: '5vw 0',
    marginLeft: '1vw'
  },

  // 가로 스크롤 영역 스타일 추가
  previewScroll: {
    display: 'flex',
    gap: '1rem',
    overflowX: 'auto',
    paddingBottom: '1rem'
  },

  // 각 카드 스타일
  previewCard: {
    maxWidth: '9.4vw',
    flexShrink: 0,
    // backgroundColor: '#e5e7eb',
    paddingRight: '5rem',
    borderRadius: '8px'
  },

  // 이미지 스타일
  previewImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '6px'
    // marginBottom: '0.5rem'
  },

  // 이름 텍스트 스타일
  previewName: {
    fontWeight: '600',
    fontSize: '1rem',
    color: '#fff'
  },

  // 섹션 상단 헤더 (제목 + 더보기 링크)
  previewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  },

  // 더보기 링크
  moreLink: {
    fontSize: '0.875vw',
    color: '#9CFF23',
    textDecoration: 'none'
  }
};

export default Main;