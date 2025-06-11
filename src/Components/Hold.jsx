import React, { useState } from 'react';

// 홀드 데이터
export const Holds = [
  { name: '저그 (Jug)', image: '/IMG/Holds/Hold01.png', top: '15%', left: '20%' },
  { name: '크림프 (Crimp)', image: '/IMG/Holds/Hold02.png', top: '15%', left: '40%' },
  { name: '오픈 크림프 (Open Crimp)', image: '/IMG/Holds/Hold03.png', top: '15%', left: '60%' },
  { name: '핀치 (Pinch)', image: '/IMG/Holds/Hold04.png', top: '15%', left: '80%' },
  { name: '슬로퍼 (Sloper)', image: '/IMG/Holds/Hold05.png', top: '35%', left: '20%' },
  { name: '엣지 (Edge)', image: '/IMG/Holds/Hold06.png', top: '35%', left: '40%' },
  { name: '레일 (Rail)', image: '/IMG/Holds/Hold07.png', top: '35%', left: '60%' },
  { name: '포켓 (Pocket)', image: '/IMG/Holds/Hold08.png', top: '35%', left: '80%' },
  { name: '플랫 (Flat)', image: '/IMG/Holds/Hold09.png', top: '55%', left: '20%' },
  { name: '언더클링 (Undercling)', image: '/IMG/Holds/Hold10.png', top: '55%', left: '40%' },
  { name: '사이드풀 (Sidepull)', image: '/IMG/Holds/Hold11.png', top: '55%', left: '60%' },
  { name: '가스통 (Gaston)', image: '/IMG/Holds/Hold12.png', top: '55%', left: '80%' },
  { name: '볼륨 (Volume)', image: '/IMG/Holds/Hold13.png', top: '75%', left: '30%' },
  { name: '핀치볼륨 (Pinch Volume)', image: '/IMG/Holds/Hold14.png', top: '75%', left: '70%'},
];

// 실제 위치 좌표
const holdPositions = [
  { top: '10%', left: '20%' }, // 저그
  { top: '10%', left: '80%' }, // 크림프
  { top: '20%', left: '57%' }, // 오픈 크림프
  { top: '75%', left: '93%' }, // 핀치
  { top: '19%', left: '8%' }, // 슬로퍼
  { top: '29%', left: '32%' }, // 엣지
  { top: '29%', left: '69%' }, // 레일
  { top: '38%', left: '57%' }, // 포켓
  { top: '38%', left: '8%' }, // 플랫
  { top: '47%', left: '45%' }, // 언더클링
  { top: '47%', left: '80%' }, // 사이드풀
  { top: '57%', left: '20%' }, // 가스통
  { top: '66%', left: '56%' }, // 볼륨
  { top: '75%', left: '7%' }, // 핀치볼륨
];

const Hold = () => {
  const [hoveredHold, setHoveredHold] = useState(null);

  const handleHoldClick = (holdName) => {
    // 실제 라우터 구현 시 navigate 함수로 교체
    alert(`${holdName} 세부 페이지로 이동`);
  };

  return (
    <div>
      {/* 배너 영역 */}
      <section>
        <img
          src="/IMG/Banner/HoldBanner.png"
          alt="Banner"
          style={styles.banner}
        />
        <p style={styles.bannerTxt}>What<br/>is<br/>a Hold</p>
        <p style={styles.bannerDescription}>
          클라이밍 홀드는 모양과 잡는 방식에 따라 다양하게 구분됩니다.<br/>
          각 홀드의 특징과 사용법을 이해하면, 루트 해석과 무브 선택이 훨씬 쉬워집니다.
        </p>
      </section>

      {/* 홀드 배치 영역 */}
      <div style={styles.wrapper}>
        <div style={styles.boardWrapper}>
          {/* 배경 격자 레이어 */}
          <div style={styles.grid}></div>

          {/* 홀드들 */}
          {Holds.map((hold, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: holdPositions[i].top,
                left: holdPositions[i].left,
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
              }}
              onMouseEnter={() => setHoveredHold(i)}
              onMouseLeave={() => setHoveredHold(null)}
              onClick={() => handleHoldClick(hold.name)}
            >
              {/* 홀드 이미지 */}
              <img
                src={hold.image}
                alt={hold.name}
                style={styles.holdMarker}
              />
              
              {/* 호버 시 이미지 위에 나타나는 텍스트 */}
              {hoveredHold === i && (
                <div style={styles.hoverText}>
                  {hold.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 8vw',
    boxSizing: 'border-box'
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
    fontSize: '1vw',
    fontWeight: '300',
    color: 'rgba(255,255,255,.7)',
    lineHeight: '1.7',
    bottom: '10%',
    left: '5.5%'
  },
  boardWrapper: {
    position: 'relative',
    width: '100%',
    height: '200vh',
    backgroundImage: 'url("/IMG/HoldBoard.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '15vw auto 0'
  },
  grid: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '80%',
    zIndex: 0,
    pointerEvents: 'none',
    marginTop: '5vh',
    backgroundImage: `
      linear-gradient(to right, #9CFF23 1px, transparent 1px),
      linear-gradient(to bottom, #9CFF23 1px, transparent 1px)
    `,
    backgroundSize: '10vw 10vw',
    backgroundPosition: 'center',
  },
  holdMarker: {
    width: '7vw',
    height: 'auto',
    objectFit: 'contain',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
  },
  hoverText: {
    position: 'absolute',
    top: '-30%',
    left: '50%',
    transform: 'translate(-50%)',
    color: '#9CFF23',
    fontSize: '1vw',
    fontWeight: '700',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    zIndex: 3,
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
    animation: 'fadeIn 0.3s ease',
    pointerEvents: 'none',
  }
};

// CSS 애니메이션을 위한 스타일 추가
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translate(-50%) scale(0.8); }
    to { opacity: 1; transform: translate(-50%) scale(1); }
  }
`;
document.head.appendChild(styleSheet);

export default Hold;