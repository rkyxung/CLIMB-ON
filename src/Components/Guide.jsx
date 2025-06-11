import React, { useState } from 'react';

// Guide 컴포넌트: 볼더링 입문자들을 위한 체크리스트 + 가이드 + FAQ 제공
const Guide = () => {
  // 체크리스트 항목 데이터
  const items = [
    {
      label: 'Climbing shoes',
      image: '/IMG/CheckList/shoe.png',
      desc: '발에 꼭 맞는 클라이밍화를 신어야 정확하고 섬세한 무브가 가능해요.\n렌탈도 가능하지만, 본인 발에 맞는 신발을 선택하는 것이 중요해요.\n특히 앞코의 감각이 루트 해결에 큰 영향을 줘요.'
    },
    {
      label: 'Chalk / Chalk Bag',
      image: '/IMG/CheckList/chalk.png',
      desc: '손의 땀을 잡아줘서 미끄러지지 않게 도와주는 필수 아이템이에요.\n초크가 없으면 손이 미끄러워서 제대로 힘을 주기 어려워요.\n초크백은 초크를 휴대하며 사용할 수 있도록 도와주는 작은 가방이에요.'
    },
    {
      label: 'Training Wear',
      image: '/IMG/CheckList/clothes.png',
      desc: '몸을 자유롭게 움직일 수 있도록 스트레칭이 잘 되는 옷이 좋아요.\n타이트하거나 두꺼운 옷은 동작을 방해할 수 있어요.\n팔과 다리의 움직임이 중요한 스포츠이기 때문에 편한 복장은 기본이에요.'
    },
    {
      label: 'Water Bottle',
      image: '/IMG/CheckList/bottle.png',
      desc: '클라이밍은 생각보다 많은 체력과 수분을 소모해요.\n자주 물을 마시며 탈수를 예방해야 퍼포먼스도 좋아지고 부상 위험도 줄어들어요.\n암장에 따라 물을 따로 파는 곳도 있으니 꼭 챙기세요.'
    },
    {
      label: 'Tape',
      image: '/IMG/CheckList/tape.png',
      desc: '손가락 관절이나 손바닥 굳은살을 보호할 수 있는 유용한 도구예요.\n특히 손가락에 무리가 가는 동작이 많기 때문에 부상 예방용으로도 추천돼요.\n처음엔 어색할 수 있지만 익숙해지면 훨씬 도움이 돼요.'
    }
  ];

  // 암장 첫 방문 가이드 카드 데이터
  const guideItems = [
    { title: '1', text: '신발 대여 + 준비 스트레칭', image: '/IMG/Guide/Guide01.png' },
    { title: '2', text: '초보자용 루트 선택', image: '/IMG/Guide/Guide02.png' },
    { title: '3', text: '암장 매너 지키기', image: '/IMG/Guide/Guide03.png' },
    { title: '4', text: '도전! 실패해도 OK!', image: '/IMG/Guide/Guide04.png' }
  ];

  // 체크박스 상태 관리
  const [checked, setChecked] = useState([true, false, false, false, false]); // 첫 번째(클라이밍화)만 true
  const [activeIndex, setActiveIndex] = useState(0); // 기본 선택 인덱스를 0으로
  const toggleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
    if (newChecked[index]) setActiveIndex(index);
    else if (activeIndex === index) setActiveIndex(null);
  };

  // FAQ 아코디언 열기/닫기 인덱스
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ color: '#fff' }}> {/* 전체 텍스트 색상 */}
      {/* 배너 섹션 */}
      <section>
        <img src="/IMG/Banner/BoulderingBanner.png" alt="Banner" style={styles.banner} />
        <p style={styles.bannerTxt}>What<br />is<br />Bouldering</p>
        <p style={styles.bannerDescription}>
          볼더링은 4~5미터 높이의 벽을 로프 없이 등반하는 실내 클라이밍 종목입니다.<br />
          바닥에는 두꺼운 매트가 깔려 있으며, 오로지 손과 발, 체중 이동만으로 루트를 해결합니다.<br />
          지정된 홀드를 따라 정해진 방식으로 오르는 것이 특징이며,<br />
          근력뿐 아니라 균형, 유연성, 문제 해결력까지 종합적으로 요구되는 스포츠입니다.<br />
          루트마다 난이도가 나뉘며, 초보자도 안전하게 입문할 수 있도록 구성되어 있습니다.
        </p>
      </section>

      <div style={{...styles.wrapper, marginTop: '10rem'}}> {/* 콘텐츠 감싸는 래퍼 */}
        <section style={styles.section}> {/* 공통 섹션 패딩 */}

          {/* 준비물 체크리스트 - 새로운 레이아웃 */}
          <div style={styles.subheading}>준비물 체크리스트</div>
          <div style={styles.newCheckLayout}>
            
            {/* 왼쪽: 체크리스트 */}
            <div style={styles.checklistContainer}>
              <ul style={styles.newChecklist}>
                {items.map((item, i) => (
                  <li key={i} style={styles.newCheckboxItem}>
                    <label style={styles.newCheckboxLabel}>
                      <input
                        type="checkbox"
                        checked={checked[i]}
                        onChange={() => toggleCheck(i)}
                        style={styles.hiddenCheckbox}
                      />
                      <div style={styles.customCheckbox}>
                        {checked[i] && <span style={styles.checkMark}>✓</span>}
                      </div>
                      <span style={styles.newCheckboxText}>{item.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* 가운데: 이미지 */}
            <div style={styles.imageContainer}>
              {items[activeIndex] && (
                <img 
                  src={items[activeIndex].image} 
                  alt={items[activeIndex].label} 
                  style={styles.centerImage} 
                />
              )}
            </div>

            {/* 오른쪽: 설명 */}
            <div style={styles.descriptionContainer}>
              {items[activeIndex] && (
                <>
                  <h3 style={styles.itemTitle}>{items[activeIndex].label}</h3>
                  <div style={styles.descriptionLines}>
                    {items[activeIndex].desc.split('\n').map((line, index) => (
                      <div key={index} style={styles.descriptionLine}></div>
                    ))}
                  </div>
                  <p style={styles.itemDescription}>{items[activeIndex].desc}</p>
                </>
              )}
            </div>

          </div>

          {/* 첫 방문 가이드 카드 */}
          <div style={styles.subheading}>암장 첫 방문 가이드</div>
          <div style={{...styles.grid, marginBottom: '20rem'}}>
            {guideItems.map((item, i) => (
              <div key={i} style={styles.card}>
                <img src={item.image} alt={item.text} style={styles.cardImage} />
                <div>
                  <span style={{ fontWeight: '600', fontSize: '2rem', marginBottom: '0.3rem', marginRight: '0.5rem' }}>{item.title}</span>
                  <span style={{ fontWeight: '500' }}>{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 자주 묻는 질문 (FAQ) */}
          <div style={styles.subheading}>자주 묻는 질문(FAQ)</div>
          <div style={{...styles.faq, marginBottom: '10rem'}}>
            {[{ q: 'Q1. 처음 가면 어디서부터 시작하나요?', a: <>아무것도 모르셔도 괜찮습니다!<br />대부분의 암장에서는 초보자 대상 일일 체험 프로그램이나 간단한 안내가 준비되어 있어서, 등록만 하면 바로 도전할 수 있습니다.<br />장비 렌탈도 가능해서 부담 없이 시작하실 수 있습니다.</> },
              { q: 'Q2. 볼더링은 위험하지 않나요?', a: <>볼더링은 높은 로프 클라이밍과 달리, 높이가 낮고 바닥에 두꺼운 매트가 깔려 있어 안전하게 즐길 수 있습니다.</> },
              { q: 'Q3. 혼자 가도 괜찮은가요?', a: <>혼자 오는 사람도 정말 많습니다. <br />혼자 조용히 루트를 도전해도 좋고, 현장에서 자연스럽게 다른 사람과 소통하기도 쉬운 분위기입니다.</> },
              { q: 'Q4. 체력이 약해도 할 수 있나요?', a: <>볼더링은 근력보다도 움직임과 균형, 전략이 중요해서 체력이 약해도 충분히 즐길 수 있습니다. <br />본인 페이스에 맞춰 천천히 시작하면 됩니다.</> }].map((item, i) => (
              <div key={i}>
                <div style={styles.question} onClick={() => setOpenIndex(openIndex === i ? null : i)}>{item.q}</div>
                {openIndex === i && <div style={styles.answer}>{item.a}</div>}
              </div>
            ))}
          </div>

        </section>
      </div>
    </div>
  );
};


const styles = {
  // 전체 페이지 래퍼
  wrapper: {
    maxWidth: '75vw',
    margin: '0 auto',
    padding: '0 2.08vw',
    boxSizing: 'border-box'
  },

  // 섹션 공통 패딩
  section: {
    padding: '2.08vw 0'
  },

  // 메인 배너 이미지
  banner: {
    width: '100%',
    display: 'block'
  },

  // 배너 메인 텍스트
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

  // 배너 설명 텍스트
  bannerDescription: {
    position: 'absolute',
    fontSize: '0.93vw',
    fontWeight: '300',
    color: 'rgba(255,255,255,.7)',
    lineHeight: '1.7',
    bottom: '10%',
    left: '5.5%'
  },

  // 섹션 제목 (소제목)
  subheading: {
    fontWeight: 'bold',
    margin: '4.16vw 0',
    fontSize: '1.5rem',
    color: '#fff'
  },

  // 새로운 체크리스트 레이아웃
  newCheckLayout: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'flex-start',
    marginBottom: '20rem',
    minHeight: '500px'
  },

  // 체크리스트 컨테이너
  checklistContainer: {
    flex: '0 0 300px'
  },

  // 새로운 체크리스트 스타일
  newChecklist: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },

  // 새로운 체크박스 아이템
  newCheckboxItem: {
    display: 'flex',
    alignItems: 'center'
  },

  // 새로운 체크박스 라벨
  newCheckboxLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1rem'
  },

  // 실제 input checkbox 숨김
  hiddenCheckbox: {
    display: 'none'
  },

  // 커스텀 체크박스
  customCheckbox: {
    width: '24px',
    height: '24px',
    border: '2px solid #9CFF23',
    borderRadius: '4px',
    marginRight: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  // 체크 마크
  checkMark: {
    color: '#9CFF23',
    fontSize: '16px',
    fontWeight: 'bold'
  },

  // 새로운 체크박스 텍스트
  newCheckboxText: {
    color: '#fff',
    fontWeight: '500'
  },

  // 이미지 컨테이너
  // imageContainer: {
  //   flex: '0 0 400px',
  //   height: '400px',
  //   backgroundColor: '#f5f5f5',
  //   borderRadius: '12px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: '2rem',
  //   position: 'relative',
  //   margin: '0 auto'
  // },

  // 가운데 이미지
  centerImage: {
    maxWidth: '450%',
    maxHeight: '50%',
    objectFit: 'contain',
    position: 'relative',
    margin: '0 auto',
    justifyContent: 'center',

  },

  // 설명 컨테이너
  descriptionContainer: {
    flex: '1',
    paddingLeft: '2vw'
  },

  // 아이템 제목
  itemTitle: {
    position: 'relative',
    top: '-3vw',
    left: '4vw',
    width: '35vw',
    fontSize: '5vw',
    fontWeight: 'bold',
    fontFamily: 'Teko',
    color: '#9CFF23',
    marginBottom: '2rem',
    margin: '0 0 2rem 0'
  },


  // 아이템 설명 텍스트
  itemDescription: {
      position: 'relative',
    display: 'flex',
    top: '15.5vw',
    left: '12vw',
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#ccc',
    whiteSpace: 'pre-line',
    margin: 0
  },

  // 카드형 가이드 그리드 박스
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.84vw'
  },

  // 개별 카드 스타일
  card: {
    padding: '0.84vw',
    borderRadius: '16px',
    color: '#fff'
  },

  // 카드 안의 이미지
  cardImage: {
    height: '15.63vw',
    objectFit: 'contain',
    borderRadius: '3%'
  },

  // FAQ 전체 박스
  faq: {
    marginTop: '2.5vw',
    display: 'flex',
    flexDirection: 'column',
  },

  // 질문 스타일
  question: {
    fontWeight: '500',
    backgroundColor: '#161616',
    color: '#ffffff',
    padding: '1.5vw',
    cursor: 'pointer',
    borderBottom: '1px solid #9CFF23',
    alignItems: 'center',
    fontSize: '1.1vw',
  },

  // 답변 스타일
  answer: {
    fontWeight: '600',
    backgroundColor: '#9CFF23',
    color: '#000',
    padding: '2vw',
    lineHeight: '1.8',
    alignItems: 'center',
    fontSize: '1.1vw',
  }
};

export default Guide;