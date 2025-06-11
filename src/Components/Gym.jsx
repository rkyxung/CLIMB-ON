import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLike } from './LikeContext';

export const GymsSeoul = [
  {
    name: '서울숲',
    image: '/IMG/Gyms_seoul/Seoul01.png',
    address: '영등포점'
  },
  {
    name: '더클라임',
    image: '/IMG/Gyms_seoul/Seoul02.png',
    address: '홍대B점'
  },
  {
    name: '알레',
    image: '/IMG/Gyms_seoul/Seoul03.png',
    address: '혜화점'
  },
  {
    name: 'PEAKERS',
    image: '/IMG/Gyms_seoul/Seoul04.png',
    address: '종로점'
  },
  {
    name: '손상원',
    image: '/IMG/Gyms_seoul/Seoul05.png',
    address: '을지로점'
  },
  {
    name: '클라이밍파크',
    image: '/IMG/Gyms_seoul/Seoul06.png',
    address: '종로점'
  },
  {
    name: '더플라스틱',
    image: '/IMG/Gyms_seoul/Seoul07.png',
    address: '염창점'
  },
  {
    name: '락랜드',
    image: '/IMG/Gyms_seoul/Seoul08.png',
    address: '수유점'
  },
  {
    name: '드림캐쳐',
    image: '/IMG/Gyms_seoul/Seoul09.png',
    address: '노원점'
  },
  {
    name: '코알라',
    image: '/IMG/Gyms_seoul/Seoul10.png',
    address: '상암점'
  },
  {
    name: '훅',
    image: '/IMG/Gyms_seoul/Seoul11.png',
    address: '왕십리점'
  },
  {
    name: '온플릭',
    image: '/IMG/Gyms_seoul/Seoul12.png',
    address: '천호점'
  }
];

const Gym = () => {
  const { toggleLike, isLiked } = useLike(); // Context에서 함수들 가져오기

  // 좋아요 토글 함수
  const handleLike = (gym) => {
    const gymData = {
      id: gym.name, // 고유 식별자
      name: gym.name,
      address: gym.address,
      image: gym.image
    };
    toggleLike(gymData, '암장'); // Context의 toggleLike 사용
  };

  return (
    <div>
      {/* 메인 배너 */}
      <section>
        <img
          src="/IMG/Banner/GymBanner.png"
          alt="Banner"
          style={styles.banner}
        />
        <p style={styles.bannerTxt}>
          Where<br/>
          is<br/>
          Climbing
        </p>
      
        <p style={styles.bannerDescription}>
          암장은 클라이머의 활동 스타일, 위치, 루트 성향에 따라 선택할 수 있습니다.<br/>
          볼더링 전용 실내 암장에서부터 다양한 난이도의 루트를 제공하는 공간까지,<br/>
          내게 맞는 암장을 찾는 것이 꾸준한 클라이밍의 시작입니다.
        </p>
      </section>

      <div style={styles.wrapper}>
        {/* 리스트 제목 */}
        <span style={{fontSize:'1.7vw', fontWeight: '600', color: '#fff', padding: '2.8vh 0.7vw 2.8vh 0'}}>암장</span>
        <span style={{fontSize:'1.3vw', fontWeight: '600', color: '#fff'}}>서울</span>

        {/* 리스트 그리드   */}
        <div style={styles.grid}>
          {GymsSeoul.map((gym, i) => (
            <div key={i} style={styles.cardContainer}>
              <div style={styles.imageWrapper}>
                <Link to="/GymDetail">
                  <img src={gym.image} alt={gym.name} style={{...styles.gymLogo, ...styles.card}} />
                </Link>
                <button
                  style={styles.heartButton}
                  onClick={() => handleLike(gym)}
                >
                  <img 
                    src={isLiked(gym.name, '암장') ? '/IMG/heart.png' : '/IMG/heart_Empty.png'}  
                    alt="heart" 
                    style={styles.heartIcon}
                  />
                </button>
              </div>
              <div style={styles.gymLabelRow}>
                <span style={styles.gymName}>{gym.name}</span>
                <span style={styles.gymAddress}>{gym.address}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 지도 */}
        <iframe 
        title="Gym Seoul"
        src="https://www.google.com/maps/d/u/0/embed?mid=19QPhIAZjryxGiWEXvj6VhJog-oy_e3o&ehbc=2E312F&noprof=1"
        width= "100%"
        height="42vh"
        style={{border: 0, margin: '10vh 0 20vh', height: '80vh'}}
        allowFullScreen=""
        loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '100vw',
    margin: '0 auto',
    padding: '0 8.3vw',
    boxSizing: 'border-box',
  },
  banner: {
    display: 'block',
    width: '100%',
    maxHeight: 'auto',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '6.9vw',
    marginBottom: '7vh',
    boxSizing: 'border-box',
    marginTop: '1.4vh'
  },
  cardContainer: {
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0 auto',
    borderRadius: '5%'
  },
  gymLogo: {
    width: '80%',
    height: 'auto',
    objectFit: 'contain',
    marginBottom: '0.7vh'
  },
  gymLabelRow: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.3vw',
    margin: '0 auto',
    marginTop: '0.35vh'
  },
  gymName: {
    fontWeight: '600',
    fontSize: '0.7vw',
    textAlign: 'center',
    color: '#fff',
    paddingRight: '1.4vw',
    left: '0'
  },
  gymAddress: {
    fontSize: '0.56vw',
    color: 'rgba(255, 255, 255, .8)',
    textAlign: 'center',
    marginTop: '0.18vh',
    right: '0'
  },
  heartButton: {
    position: 'absolute',
    top: '0.56vh',
    right: '10%',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50%',
    width: '1.7vw',
    height: '1.7vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.2s ease',
    zIndex: 10,
    margin: '0.2vh 0.3vw 0 0'
  },
  heartIcon: {
    width: '1vw',
    height: '1vw',
    objectFit: 'contain',
  }
};

export default Gym;