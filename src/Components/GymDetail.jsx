import React from 'react';

const GymDetail = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <section style={styles.section}>
          {/* 왼쪽 정보 영역 */}
          <div style={styles.infoSection}>
            {/* 암장 타이틀 */}
            <div style={styles.titleSection}>
              <h1 style={styles.gymTitle}>서울숲 영등포점</h1>
              <p style={styles.location}>서울 영등포구</p>
            </div>

            {/* 암장 정보 */}
            <div style={styles.detailsSection}>
              <div style={styles.infoCard}>
                <h4 style={styles.infoTitle}>위치</h4>
                <p style={styles.infoText}>
                  서울특별시 영등포구 선유로 70, 3층
                </p>
              </div>

              <div style={styles.infoCard}>
                <h4 style={styles.infoTitle}>운영시간</h4>
                <p style={styles.infoText}>
                  평일 10:00 ~ 22:00<br />
                  주말 10:00 ~ 20:00<br />
                  (공휴일 정상 운영)
                </p>
              </div>

              <div style={styles.infoCard}>
                <h4 style={styles.infoTitle}>세부정보</h4>
                <p style={styles.infoText}>
                  - 루트 다양성 높음 (V0~V10)<br />
                  - 넓은 공간과 쾌적한 환기<br />
                  - 샤워실, 락커룸, 음료 바 완비<br />
                  - 초보자 체험 루트 및 입문자 클래스 운영
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽 이미지 영역 */}
          <div style={styles.imageSection}>
            <div style={styles.imageContainer}>
              <img
                src="./IMG/Gyms_seoul/Seoul01.png"
                alt="서울숲 영등포점"
                style={styles.gymImage}
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
  gymTitle: {
    fontSize: '2.5vw',
    fontWeight: '700',
    color: '#fff'
  },
  location: {
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
  gymImage: {
    width: '90%',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '1rem',
    padding: '1vw',
    margin: '0 auto',
  }
};

export default GymDetail;