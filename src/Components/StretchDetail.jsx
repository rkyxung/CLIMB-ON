import React from 'react';

const StretchDetail = () => {
  const steps = [
    {
      title: '손목 앞쪽 스트레칭',
      desc: [
        '한 팔을 앞으로 쭉 뻗고 손바닥을 위로 향하게 합니다.',
        '반대 손으로 손끝을 아래로 부드럽게 눌러줍니다.',
        '전완근(팔 아래쪽)이 늘어나는 느낌이 들어야 합니다.'
      ]
    },
    {
      title: '손목 뒤쪽 스트레칭',
      desc: [
        '한 팔을 앞으로 뻗고 손바닥이 아래를 향하게 합니다.',
        '반대 손으로 손등을 눌러 손가락이 몸 쪽으로 오게 합니다.',
        '손등과 손목 뒷부분이 당겨지는 걸 느껴야 합니다.'
      ]
    },
    {
      title: '팔꿈치 구부린 손목 스트레칭',
      desc: [
        '팔꿈치를 구부리고 손바닥을 아래로 향합니다.',
        '반대 손으로 손등을 눌러 손목을 구부려 줍니다.',
        '짧은 시간 동안 자극을 느끼고 천천히 풀어줍니다.'
      ]
    },
    {
      title: '탁자 이용 손목 스트레칭',
      desc: [
        '탁자나 벽에 손바닥을 대고 손가락을 아래로 향하게 합니다.',
        '손바닥을 바닥에 밀착시키고 상체를 천천히 뒤로 당겨줍니다.',
        '손목의 앞쪽이 늘어나며 자극이 느껴져야 합니다.'
      ]
    },
    {
      title: '손가락-손목 연계 스트레칭',
      desc: [
        '양손을 맞잡고 손가락을 서로 감쌉니다.',
        '손가락을 당기면서 손목까지 함께 스트레칭합니다.',
        '짧은 호흡과 함께 반복해 주세요.'
      ]
    }
  ];

  return (
    <div style={styles.wrapper}>
      <section style={styles.section}>
        <div style={styles.title}>손목 스트레칭</div>
        <div style={styles.meta}>
          <div>
            <div style={styles.label}>소요시간</div>
            <div style={styles.metaValue}>약 3~5분</div>
          </div>
          <div>
            <div style={styles.label}>난이도</div>
            <div style={styles.metaValue}>하</div>
          </div>
        </div>

        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              ...styles.step,
              ...(i % 2 !== 0 ? styles.reversed : {})
            }}
          >
            <div style={styles.image}></div>
            <div style={styles.textBlock}>
              <div style={styles.stepNumber}>{i + 1}. {step.title}</div>
              {step.desc.map((line, idx) => (
                <div key={idx} style={styles.description}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 120px',
    boxSizing: 'border-box',
    backgroundColor: '#111',
    color: '#fff'
  },
  section: {
    padding: '2.5rem 0'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem'
  },
  meta: {
    display: 'flex',
    gap: '3rem',
    marginBottom: '3rem'
  },
  label: {
    fontSize: '1rem',
    marginBottom: '0.25rem',
    color: '#999'
  },
  metaValue: {
    fontSize: '1.2rem',
    fontWeight: '500'
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '4rem'
  },
  image: {
    width: '12rem',
    height: '12rem',
    backgroundColor: '#d1d5db',
    borderRadius: '0.5rem'
  },
  textBlock: {
    flex: 1,
    marginLeft: '2rem',
    marginRight: '2rem'
  },
  stepNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.75rem'
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '0.5rem'
  },
  reversed: {
    flexDirection: 'row-reverse'
  }
};

export default StretchDetail;
