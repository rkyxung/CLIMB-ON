import { React, useEffect }from 'react'; 

const GearDetail = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <section style={styles.section}>
          {/* 왼쪽 정보 영역 */}
          <div style={styles.infoSection}>
            {/* 제품 타이틀 */}
            <div style={styles.titleSection}>
              <h1 style={styles.productTitle}>드라고 XT</h1>
              <p style={styles.brandName}>SCARPA</p>
              <div style={styles.priceContainer}>
                <span style={styles.price}>265,000</span>
                <span style={styles.currency}>원</span>
              </div>
            </div>

            {/* 제품 정보 */}
            <div style={styles.detailsSection}>
              <div style={styles.infoCard}>
                <h4 style={styles.infoTitle}>제품 특징</h4>
                <p style={styles.infoText}>
                  볼더링과 스포츠 클라이밍에 최적화된 고성능 암벽화입니다. 
                  민감한 감각과 뛰어난 마찰력을 제공하며, 발끝 정밀도가 우수하여 
                  작은 홀드도 안정적으로 딛을 수 있습니다.
                </p>
              </div>

              <div style={styles.infoCard}>
                <h4 style={styles.infoTitle}>착용감</h4>
                <p style={styles.infoText}>
                  부드러운 갑피와 넓은 토 박스로 인해 초보자보다는 중·상급자에게 적합합니다. 
                  전족부가 좁고 강하게 다운턴 되어 있어 공격적인 착용감을 제공합니다.
                </p>
              </div>

              <div style={styles.infoCard}>
                <h4 style={styles.infoTitle}>사이즈 가이드</h4>
                <p style={styles.infoText}>
                  평소 운동화 사이즈보다 5~10mm 작게 신는 것을 추천드립니다. 
                  너무 꽉 끼지 않도록 주의하세요. 첫 구매 시 매장 방문을 권장합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽 이미지 영역 */}
          <div style={styles.imageSection}>
            <div style={styles.imageContainer}>
              <img
                src="./IMG/Shoes/XT.png"
                alt="드라고 XT 암벽화"
                style={styles.productImage}
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
  productTitle: {
    fontSize: '2.5vw',
    fontWeight: '700',

    color: '#fff'
  },
  brandName: {
    fontSize: '1.3vw',
    color: '#fff',
    fontWeight: '600',
    margin: '1vw 0'
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem'
  },
  price: {
    fontSize: '1.8vw',
    fontWeight: '600',
    color: '#fff'
  },
  currency: {
    fontSize: '1.2rem',
    color: '#fff'
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
  productImage: {
    width: '90%',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '1rem',
    padding: '1vw',
    margin: '0 auto',

  }
};

export default GearDetail;