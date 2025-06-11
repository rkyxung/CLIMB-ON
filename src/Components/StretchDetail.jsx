import React, { useEffect } from 'react';

const StretchDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const stretchingData = [
    {
      id: 1,
      title: "손목 굽히기 스트레칭",
      description: "한 팔을 앞으로 뻗고 손바닥을 위로 향하게 합니다. 다른 손으로 손가락 끝을 잡고 몸쪽으로 부드럽게 당겨줍니다.",
      duration: "15-30초 유지",
      sets: "양손 각 3세트",
      benefits: "손목 굴곡근과 전완근 스트레칭",
      image: "./IMG/Stretch/stretch01.png"
    },
    {
      id: 2,
      title: "팔 교차 스트레칭",
      description: "한 팔을 가슴 앞으로 가져와 다른 팔로 감싸 안습니다. 어깨와 팔 전체를 늘려주는 동작입니다.",
      duration: "20-30초 유지",
      sets: "양팔 각 3세트",
      benefits: "어깨 후면과 삼각근 스트레칭",
      image: "./IMG/Stretch/stretch02.png"
    },
    {
      id: 3,
      title: "손목 젖히기 스트레칭",
      description: "팔을 앞으로 뻗고 손바닥을 앞으로 향하게 합니다. 다른 손으로 손등을 잡고 몸쪽으로 당겨줍니다.",
      duration: "15-30초 유지",
      sets: "양손 각 3세트",
      benefits: "손목 신전근과 전완 외측근 스트레칭",
      image: "./IMG/Stretch/stretch03.png"
    },
    {
      id: 4,
      title: "팔꿈치 당기기 스트레칭",
      description: "한 팔을 머리 위로 올리고 팔꿈치를 구부려 등 뒤로 내립니다. 다른 손으로 팔꿈치를 잡고 아래로 당겨줍니다.",
      duration: "20-30초 유지",
      sets: "양팔 각 3세트",
      benefits: "삼두근과 어깨 스트레칭",
      image: "./IMG/Stretch/stretch04.png"
    }
  ];

  return (
    <div style={styles.container}>
      {/* 헤더 */}
      <header style={styles.header}>
        <div style={styles.nav}>
          <div style={styles.logo}></div>
          <div style={styles.navItems}>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main style={styles.main}>
        {/* 타이틀 섹션 */}
        <section style={styles.titleSection}>
          <h1 style={styles.mainTitle}>스트레칭</h1>
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>소요시간</span>
              <span style={styles.infoValue}>15-20분</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>난이도</span>
              <span style={styles.infoValue}>초급</span>
            </div>
          </div>
        </section>

        {/* 스트레칭 리스트 */}
        <section style={styles.stretchingList}>
          {stretchingData.map((stretch, index) => (
            <div key={stretch.id} style={styles.stretchingItem}>
              <div style={styles.itemContent}>
                <div style={{
                  ...styles.imageContainer,
                  ...(index % 2 === 1 ? styles.imageRight : styles.imageLeft)
                }}>
                  {/* 실제 이미지 사용 */}
                  <img 
                    src={stretch.image} 
                    alt={stretch.title}
                    style={styles.stretchImage}
                    onError={(e) => {
                      // 이미지 로드 실패 시 플레이스홀더 표시
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* 백업 플레이스홀더 */}
                  <div style={{...styles.imagePlaceholder, display: 'none'}}></div>
                  <div style={styles.numberBadge}>{stretch.id}</div>
                </div>
                
                <div style={styles.textContent}>
                  <h3 style={styles.stretchTitle}>
                    {stretch.id}. {stretch.title}
                  </h3>
                  
                  <div style={styles.contentCard}>
                    <p style={styles.description}>{stretch.description}</p>
                    <div style={styles.specs}>
                      <span style={styles.spec}>{stretch.duration}</span>
                      <span style={styles.spec}>{stretch.sets}</span>
                    </div>
                    <p style={styles.benefits}>{stretch.benefits}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 하단 팁 섹션 */}
        <section style={styles.tipSection}>
          <div style={styles.tipCard}>
            <h3 style={styles.tipTitle}>스트레칭 꿀팁</h3>
            <ul style={styles.tipList}>
              <li style={styles.tipItem}>클라이밍 전후 반드시 스트레칭을 해주세요</li>
              <li style={styles.tipItem}>통증이 느껴지면 즉시 중단하고 강도를 줄여주세요</li>
              <li style={styles.tipItem}>꾸준한 스트레칭으로 부상을 예방하세요</li>
              <li style={styles.tipItem}>호흡을 멈추지 말고 자연스럽게 유지해주세요</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#161616',
    color: '#ffffff',
    minHeight: '100vh',
  },
  
  header: {
    padding: '1rem 2rem',
    borderBottom: '1px solid #333',
    marginBottom: '2rem',
  },
  
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#9CFF23',
  },
  
  navItems: {
    display: 'flex',
    gap: '2rem',
    fontSize: '1rem',
  },
  
  main: {
    maxWidth: '75vw',
    margin: '0 auto',
    padding: '0 2rem 4rem',
  },
  
  titleSection: {
    marginBottom: '4rem',
    textAlign: 'center',
  },
  
  mainTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#9CFF23',
    marginBottom: '2rem',
    fontFamily: 'Teko, sans-serif',
  },
  
  infoGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4rem',
    marginTop: '2rem',
  },
  
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  
  infoLabel: {
    fontSize: '1.1rem',
    color: '#cccccc',
    fontWeight: '500',
  },
  
  infoValue: {
    fontSize: '1.3rem',
    color: '#9CFF23',
    fontWeight: 'bold',
  },
  
  stretchingList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  
  stretchingItem: {
    position: 'relative',
    padding: '1rem 0',
  },
  
  itemContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '2rem',
  },
  
  imageContainer: {
    position: 'relative',
    flexShrink: 0,
  },
  
  imageLeft: {
    order: 1,
  },
  
  imageRight: {
    order: 2,
  },
  

  stretchImage: {
    width: '22vw',
    height: 'auto',
    borderRadius: '12px',
    objectFit: 'cover',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  
  imagePlaceholder: {
    width: '22vw',
    height: 'auto',
    backgroundColor: '#c0c0c0',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  
  numberBadge: {
    position: 'absolute',
    bottom: '-0.8vw',
    right: '-0.8vw',
    width: '2.3vw',
    height: '2.3vw',
    color: '#9CFF23',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4vw',
    fontWeight: 'bold',
  },
  
  textContent: {
    flex: 1,
    order: 1,
  },
  
  stretchTitle: {
    fontSize: '1.7vw',
    fontWeight: 'bold',
    marginBottom: '1vw',
    color: '#ffffff',
  },
  
  contentCard: {
    backgroundColor: 'rgba(42, 42, 42, 0.8)',
    padding: '1.5vw',
    borderRadius: '12px',
    border: '1px solid #444',
    backdropFilter: 'blur(10px)',
  },
  
  description: {
    fontSize: '1vw',
    lineHeight: '1.6',
    marginBottom: '1.2vw',
    color: '#ffffff',
  },
  
  specs: {
    display: 'flex',
    gap: '1.5vw',
    marginBottom: '1vw',
    flexWrap: 'wrap',
  },
  
  spec: {
    fontSize: '0.8vw',
    color: '#9CFF23',
    fontWeight: '600',
    padding: '0.3vw 0.8vw',
    backgroundColor: 'rgba(156, 255, 35, 0.1)',
    borderRadius: '20px',
    border: '1px solid rgba(156, 255, 35, 0.3)',
  },
  
  benefits: {
    fontSize: '0.8vw',
    color: '#cccccc',
    fontStyle: 'italic',
    marginTop: '0.5rem',
  },
  
  tipSection: {
    marginTop: '5vw',
  },
  
  tipCard: {
    backgroundColor: '#1a1a1a',
    padding: '2.5vw',
    borderRadius: '16px',
    border: '2px solid #9CFF23',
    boxShadow: '0 8px 32px rgba(156, 255, 35, 0.1)',
  },
  
  tipTitle: {
    fontSize: '1.5vw',
    color: '#9CFF23',
    marginBottom: '1.5vw',
    textAlign: 'center',
  },
  
  tipList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  
  tipItem: {
    padding: '1vw 0',
    borderBottom: '1px solid #444',
    fontSize: '1.1rem',
    lineHeight: '1.5',
    paddingLeft: '1vw',
  },
};

export default StretchDetail;