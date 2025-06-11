import React from 'react';

const HoldDetail = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <section style={styles.section}>
          {/* 왼쪽 정보 영역 */}
          <div style={styles.infoSection}>
            {/* 홀드 타이틀 */}
            <div style={styles.titleSection}>
              <h1 style={styles.holdTitle}>저그 (Jug)</h1>
              <p style={styles.holdType}>크기 홀드</p>
            </div>

            {/* 홀드 정보 */}
            <div style={styles.detailsSection}>
              <div style={styles.infoCard}>
                <h4 style={styles.infoTitle}>특징</h4>
                <p style={styles.infoText}>
                  깊고 크게 움푹 들어간 형태로, 손 전체를 넣어 쥐기 편한 홀드입니다. 
                  고정력이 뛰어나며 안정적인 그립을 제공하여 초보자부터 고급자까지 
                  편안하게 사용할 수 있습니다.
                </p>
              </div>

              <div style={styles.infoCard}>
                <h4 style={styles.infoTitle}>사용법</h4>
                <p style={styles.infoText}>
                  손가락 전체를 홀드 안쪽에 넣고 강하게 쥐어줍니다. 
                  손목을 자연스럽게 구부려 최대한 많은 접촉면을 만드는 것이 중요합니다. 
                  체중을 걸어도 안정적으로 지지할 수 있습니다.
                </p>
              </div>

              <div style={styles.infoCard}>
                <h4 style={styles.infoTitle}>적용 루트</h4>
                <p style={styles.infoText}>
                  초보자 루트부터 고난도 루트까지 다양하게 사용됩니다. 
                  특히 레스트 포인트나 시작점, 마무리 홀드로 자주 활용되며, 
                  오버행 구간에서 안정적인 지지점 역할을 합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽 이미지 영역 */}
          <div style={styles.imageSection}>
            <div style={styles.imageContainer}>
              <img
                src="./IMG/Holds/Hold01.png"
                alt="저그 (Jug)"
                style={styles.holdImage}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#161616',
    minHeight: '100vh',
    paddingBottom: '5vh'
  },
  wrapper: {
    maxWidth: '85vw',
    margin: '0 auto',
    padding: '8vh 0',
    boxSizing: 'border-box',
    color: '#fff'
  },
  section: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'flex-start'
  },
  infoSection: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  titleSection: {
    marginTop: '2vw',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  },
  holdTitle: {
    fontSize: '2.5vw',
    fontWeight: '700',
    color: '#fff'
  },
  holdType: {
    fontSize: '1.3vw',
    color: '#fff',
    fontWeight: '600',
    margin: '1vw 0'
  },
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5vw',
    marginTop: '1vw'
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '1rem',
    padding: '1.5vw',
    backdropFilter: 'blur(5px)'
  },
  infoTitle: {
    fontSize: '0.8vw',
    fontWeight: '600',
    margin: '0 0 1vw 0',
    color: '#9CFF23'
  },
  infoText: {
    fontSize: '0.8vw',
    lineHeight: '1.6',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: '0'
  },
  imageSection: {
    flex: '1',
    position: 'relative'
  },
  imageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '1.5rem',
    padding: '3vw',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    margin: '5vw auto',
  },
  holdImage: {
    width: '90%',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '1rem',
    padding: '1vw',
    margin: '0 auto',
  }
};

export default HoldDetail;