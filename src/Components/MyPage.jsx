import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLike } from './LikeContext';

const MyPage = () => {
  const [selectedTab, setSelectedTab] = useState('logbook');
  const [uploadedVideos, setUploadedVideos] = useState([]);

  // 로그 데이터 상태 추가 (기본 로그 제거)
  const [logs, setLogs] = useState([]);

  // 현재 재생 중인 비디오
  const [playingVideo, setPlayingVideo] = useState(null);

  // Context에서 좋아요 데이터 가져오기 (안전하게 처리)
  const { likedItems } = useLike() || {};
  
  // likedItems가 없을 경우 기본값 설정
  const safeLikedItems = likedItems || {
    암장: [],
    장비: [],
    스트레칭: []
  };

  // 비디오 업로드 처리
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newVideo = {
        id: Date.now(),
        name: file.name,
        file: URL.createObjectURL(file),
        level: 'Level 1',
        date: new Date().toISOString().split('T')[0]
      };
      setUploadedVideos(prev => [...prev, newVideo]);
    }
  };

  // 비디오 삭제
  const deleteVideo = (videoId) => {
    setUploadedVideos(prev => prev.filter(video => video.id !== videoId));
  };

  // 로그 저장 함수
  const handleSaveLog = () => {
    const titleInput = document.querySelector('#log-title');
    const gymInput = document.querySelector('#gym-input');
    const levelSelect = document.querySelector('#level-select');
    const contentTextarea = document.querySelector('#content-textarea');

    if (titleInput.value && gymInput.value && levelSelect.value && contentTextarea.value) {
      const newLog = {
        id: Date.now(),
        title: titleInput.value,
        gym: gymInput.value,
        level: levelSelect.value,
        content: contentTextarea.value,
        date: new Date().toISOString().split('T')[0],
        videoFile: uploadedVideos.length > 0 ? uploadedVideos[0].file : null,
        thumbnail: uploadedVideos.length > 0 ? uploadedVideos[0].file : null
      };
      
      setLogs(prev => [newLog, ...prev]);
      
      // 폼 초기화
      titleInput.value = '';
      gymInput.value = '';
      levelSelect.value = '';
      contentTextarea.value = '';
      setUploadedVideos([]);
      
      alert('로그가 저장되었습니다!');
    } else {
      alert('모든 필드를 입력해주세요.');
    }
  };

  // 비디오 재생 함수
  const playVideo = (log) => {
    if (log.videoFile) {
      setPlayingVideo(log);
    }
  };

  // 비디오 재생 닫기
  const closeVideoPlayer = () => {
    setPlayingVideo(null);
  };

  // 현재 탭에 따른 콘텐츠 렌더링
  const renderContent = () => {
    if (selectedTab === 'logbook') {
      return (
        <div style={styles.content}>
          {/* 메인 로그북 폼 */}
          <div style={styles.logbookForm}>
            {/* 제목 필드 */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>제목</label>
              <input 
                id="log-title"
                type="text" 
                style={styles.titleInput}
                placeholder="클라이밍 세션 제목을 입력하세요"
              />
            </div>

            {/* 암장과 레벨 */}
            <div style={styles.formRow}>
              <div style={styles.formGroupHalf}>
                <label style={styles.formLabel}>암장</label>
                <input 
                  id="gym-input"
                  type="text" 
                  style={styles.titleInput}
                  placeholder="암장명을 입력하세요"
                />
              </div>
              <div style={styles.formGroupHalf}>
                <label style={styles.formLabel}>레벨</label>
                <select id="level-select" style={styles.selectInput}>
                  <option value="">레벨을 선택하세요</option>
                  <option value="Level 1">Level 1</option>
                  <option value="Level 2">Level 2</option>
                  <option value="Level 3">Level 3</option>
                  <option value="Level 4">Level 4</option>
                  <option value="Level 5">Level 5</option>
                  <option value="Level 6">Level 6</option>
                  <option value="Level 7">Level 7</option>
                  <option value="Level 8">Level 8</option>
                  <option value="Level 9">Level 9</option>
                  <option value="Level 10">Level 10</option>
                  <option value="Level 10+">Level 10+</option>
                </select>
              </div>
            </div>

            {/* 내용 필드 */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>내용</label>
              <textarea 
                id="content-textarea"
                style={styles.textareaInput}
                placeholder="오늘의 클라이밍 경험을 기록해보세요&#10;- 성공한 루트&#10;- 어려웠던 부분&#10;- 개선할 점 등"
                rows="6"
              />
            </div>

            {/* 업로드 영상 섹션 */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>업로드 영상</label>
              <div style={styles.uploadSection}>
                {uploadedVideos.length > 0 && (
                  <div style={styles.uploadedVideos}>
                    {uploadedVideos.map((video) => (
                      <div key={video.id} style={styles.videoItem}>
                        <div style={styles.videoThumbnail}>
                          <span style={styles.playIcon}>▶</span>
                          <button
                            style={styles.deleteButton}
                            onClick={() => deleteVideo(video.id)}
                          >
                            ×
                          </button>
                        </div>
                        <span style={styles.videoName}>{video.name}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div style={styles.uploadArea}>
                  <input
                    type="file"
                    accept="video/*"
                    style={styles.hiddenInput}
                    id="video-upload"
                    onChange={handleVideoUpload}
                  />
                  <label htmlFor="video-upload" style={styles.uploadLabel}>
                    <span style={styles.uploadIcon}>+</span>
                    <span style={styles.uploadText}>영상 업로드</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 저장 버튼 */}
            <div style={styles.saveButtonContainer}>
              <button style={styles.saveButton} onClick={handleSaveLog}>로그 저장하기</button>
            </div>
          </div>

          {/* 저장된 로그 목록 */}
          {logs.length > 0 && (
            <div style={styles.existingLogs}>
              <h3 style={styles.existingLogsTitle}>저장된 로그</h3>
              <div style={styles.logsList}>
                {logs.map((log) => (
                  <div key={log.id} style={styles.logCard}>
                    <div style={styles.logCardContent}>
                      <div style={styles.logCardInfo}>
                        <h4 style={styles.logCardTitle}>{log.title}</h4>
                        <div style={styles.logCardDetails}>
                          <span style={styles.logCardGym}>{log.gym}</span>
                          <span style={styles.logCardLevel}>{log.level}</span>
                        </div>
                        <p style={styles.logCardText}>{log.content}</p>
                      </div>
                      <div style={styles.logCardRight}>
                        <span style={styles.logCardDate}>{log.date}</span>
                        {log.videoFile && (
                          <div style={styles.videoThumbnailContainer} onClick={() => playVideo(log)}>
                            <div style={styles.videoThumbnailBox}>
                              <span style={styles.playIconLarge}>▶</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 비디오 플레이어 모달 */}
          {playingVideo && (
            <div style={styles.videoModal} onClick={closeVideoPlayer}>
              <div style={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeButton} onClick={closeVideoPlayer}>×</button>
                <video 
                  style={styles.videoPlayer}
                  src={playingVideo.videoFile}
                  controls
                  autoPlay
                >
                  동영상을 재생할 수 없습니다.
                </video>
                <div style={styles.videoModalInfo}>
                  <h3>{playingVideo.title}</h3>
                  <p>{playingVideo.gym} • {playingVideo.level}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div style={styles.content}>
          {/* 찜한 목록 콘텐츠 - 헤더 제거 */}
          <div style={styles.categorySection}>
            <div style={styles.categoryGroup}>
              <h3 style={styles.existingLogsTitle}>
                <img 
                    src='/IMG/heart.png' 
                    alt="heart" 
                    style={styles.heartIcon}
                  />
                암장 ({safeLikedItems.암장.length})
              </h3>
              {safeLikedItems.암장.length === 0 ? (
                <div style={styles.emptyState}>
                  <p style={styles.emptyText}>찜한 암장이 없습니다.</p>
                  <p style={styles.emptySubtext}>마음에 드는 암장을 찜해보세요!</p>
                </div>
              ) : (
                <div style={styles.likedLogsList}>
                  {safeLikedItems.암장.map((item) => (
                    <div key={item.id} style={styles.likedLogCard}>
                      <div style={styles.logCardContent}>
                        <div style={styles.logCardInfo}>
                          <h4 style={styles.logCardTitle}>{item.name}</h4>
                          <div style={styles.logCardDetails}>
                            <span style={styles.logCardGym}>{item.address}</span>
                          </div>
                        </div>
                        <div style={styles.logCardRight}>
                          <div style={styles.likedImageContainer}>
                            <img src={item.image} alt={item.name} style={styles.likedImage} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={styles.categoryGroup}>
              <h3 style={styles.existingLogsTitle}>
                <img 
                    src='/IMG/heart.png' 
                    alt="heart" 
                    style={styles.heartIcon}
                  />
                장비 ({safeLikedItems.장비.length})
              </h3>
              {safeLikedItems.장비.length === 0 ? (
                <div style={styles.emptyState}>
                  <p style={styles.emptyText}>찜한 장비가 없습니다.</p>
                  <p style={styles.emptySubtext}>필요한 장비를 찜해보세요!</p>
                </div>
              ) : (
                <div style={styles.likedLogsList}>
                  {safeLikedItems.장비.map((item) => (
                    <div key={item.id} style={styles.likedLogCard}>
                      <div style={styles.logCardContent}>
                        <div style={styles.logCardInfo}>
                          <h4 style={styles.logCardTitle}>{item.name}</h4>
                          <div style={styles.logCardDetails}>
                            <span style={styles.logCardGym}>{item.brand}</span>
                          </div>
                        </div>
                        <div style={styles.logCardRight}>
                          <div style={styles.likedImageContainer}>
                            <img src={item.image} alt={item.name} style={styles.likedImage} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={styles.categoryGroup}>
              <h3 style={styles.existingLogsTitle}>
                <img 
                    src='/IMG/heart.png' 
                    alt="heart" 
                    style={styles.heartIcon}
                  />
                스트레칭 ({safeLikedItems.스트레칭.length})
              </h3>
              {safeLikedItems.스트레칭.length === 0 ? (
                <div style={styles.emptyState}>
                  <p style={styles.emptyText}>찜한 스트레칭이 없습니다.</p>
                  <p style={styles.emptySubtext}>유용한 스트레칭을 찜해보세요!</p>
                </div>
              ) : (
                <div style={styles.likedLogsList}>
                  {safeLikedItems.스트레칭.map((item) => (
                    <div key={item.id} style={styles.likedLogCard}>
                      <div style={styles.logCardContent}>
                        <div style={styles.logCardInfo}>
                          <h4 style={styles.logCardTitle}>{item.name}</h4>
                          <div style={styles.logCardDetails}>
                            <span style={styles.logCardGym}>{item.category}</span>
                          </div>
                        </div>
                        <div style={styles.logCardRight}>
                          <div style={styles.likedImageContainer}>
                            <img src={item.image} alt={item.name} style={styles.likedImage} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={styles.container}>
      {/* 메인 헤더 - 래퍼 밖에서 100vw 차지 */}
      <div style={styles.mainHeader}>
        <h1 style={styles.mainTitle}>
          {selectedTab === 'logbook' ? 'What is Climb Logbook ?' : 'What did Like?'}
        </h1>
      </div>

      <div style={styles.wrapper}>
        <section style={styles.section}>
          {/* UI 탭 */}
          <div style={styles.tab}>
            <span 
              onClick={() => setSelectedTab('logbook')} 
              style={{
                ...styles.tabItem,
                ...(selectedTab === 'logbook' && styles.activeTab),
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (selectedTab !== 'logbook') {
                  e.target.style.borderBottom = '2px solid rgba(156, 255, 35, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTab !== 'logbook') {
                  e.target.style.borderBottom = '2px solid transparent';
                }
              }}
            >
              로그북
            </span>
            <span 
              onClick={() => setSelectedTab('liked')} 
              style={{
                ...styles.tabItem,
                ...(selectedTab === 'liked' && styles.activeTab),
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (selectedTab !== 'liked') {
                  e.target.style.borderBottom = '2px solid rgba(156, 255, 35, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTab !== 'liked') {
                  e.target.style.borderBottom = '2px solid transparent';
                }
              }}
            >
              찜한 목록
            </span>
          </div>

          {/* 콘텐츠 영역 */}
          {renderContent()}
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#161616',
    minHeight: '100vh',
    padding: '8rem 0 2rem'
  },
  // 메인 헤더 스타일 - 100vw 차지
  mainHeader: {
    width: '100vw',
    textAlign: 'center',
    marginBottom: '2rem',
    padding: '0'
  },
  mainTitle: {
    fontSize: '9.5vw',
    fontWeight: '600',
    fontFamily: 'Teko',
    color: '#9CFF23',
    margin: 0,
    width: '100%'
  },
  wrapper: {
    maxWidth: '75vw',
    margin: '0 auto',
    padding: '0 120px',
    boxSizing: 'border-box'
  },
  section: {
    padding: '2.5rem 0'
  },
  tab: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    marginBottom: '3rem',
    color: '#fff',
    fontWeight: '600'
  },
  tabItem: {
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s ease',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  activeTab: {
    borderBottom: '2px solid #9CFF23',
    color: '#9CFF23',
  },
  content: {
    backgroundColor: '#161616',
    borderRadius: '12px',
    padding: '0',
    marginBottom: '2rem'
  },

  // 새로운 로그북 스타일들
  logbookHeader: {
    backgroundColor: '#161616',
    padding: '1rem 0',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  tabSelector: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0',
    backgroundColor: '#333',
    borderRadius: '8px',
    padding: '4px',
    maxWidth: '300px',
    margin: '0 auto'
  },
  activeTabSelector: {
    backgroundColor: '#9CFF23',
    color: '#000',
    padding: '0.75rem 2rem',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '0.9rem'
  },
  inactiveTabSelector: {
    color: '#fff',
    padding: '0.75rem 2rem',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer'
  },
  logbookForm: {
    backgroundColor: '#9CFF23',
    padding: '3rem',
    borderRadius: '16px',
    marginBottom: '3rem'
  },
  formGroup: {
    marginBottom: '2rem'
  },
  formGroupHalf: {
    flex: '1'
  },
  formRow: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '2rem'
  },
  formLabel: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#000',
    marginBottom: '0.75rem'
  },
  titleInput: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #000',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    outline: 'none'
  },
  selectInput: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #000',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    outline: 'none'
  },
  textareaInput: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #000',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit'
  },
  uploadSection: {
    border: '2px solid #000',
    borderRadius: '8px',
    padding: '1.5rem',
    backgroundColor: '#fff',
    minHeight: '120px'
  },
  uploadedVideos: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1rem'
  },
  videoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem'
  },
  uploadArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80px',
    border: '2px dashed #666',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  hiddenInput: {
    display: 'none'
  },
  uploadLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#666'
  },
  uploadIcon: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  uploadText: {
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  videoThumbnail: {
    position: 'relative',
    backgroundColor: '#333',
    width: '80px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px'
  },
  playIcon: {
    color: '#fff',
    fontSize: '1.5rem'
  },
  deleteButton: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    background: '#ff4444',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoName: {
    fontSize: '0.8rem',
    color: '#333',
    maxWidth: '80px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    textAlign: 'center'
  },
  saveButtonContainer: {
    textAlign: 'center',
    marginTop: '2rem'
  },
  saveButton: {
    backgroundColor: '#000',
    color: '#9CFF23',
    border: 'none',
    padding: '1rem 3rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  // 기존 로그 목록
  existingLogs: {
    marginTop: '3rem'
  },
  existingLogsTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#fff',
    marginBottom: '1.5rem'
  },
  logsList: {
    display: 'grid',
    gap: '1rem'
  },
  
  // 새로운 로그 카드 스타일들
  logCard: {
    backgroundColor: '#333',
    borderRadius: '12px',
    marginBottom: '1rem',
    border: '1px solid #555',
    overflow: 'hidden'
  },
  logCardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem'
  },
  logCardInfo: {
    flex: '1'
  },
  logCardTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#fff',
    margin: '0 0 0.75rem 0'
  },
  logCardDetails: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '0.75rem'
  },
  logCardGym: {
    fontSize: '0.9rem',
    color: '#999'
  },
  logCardLevel: {
    fontSize: '0.8rem',
    backgroundColor: '#9CFF23',
    color: '#000',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontWeight: '600'
  },
  logCardText: {
    fontSize: '0.9rem',
    color: '#ccc',
    lineHeight: '1.4',
    margin: 0
  },
  logCardRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '1rem'
  },
  logCardDate: {
    fontSize: '0.9rem',
    color: '#9CFF23',
    fontWeight: '500'
  },
  videoThumbnailContainer: {
    cursor: 'pointer',
    transition: 'transform 0.2s ease'
  },
  videoThumbnailBox: {
    width: '80px',
    height: '60px',
    backgroundColor: '#000',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #555'
  },
  playIconLarge: {
    color: '#9CFF23',
    fontSize: '1.5rem'
  },

  // 비디오 모달 스타일
  videoModal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  videoModalContent: {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
    backgroundColor: '#333',
    borderRadius: '12px',
    overflow: 'hidden'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 1001
  },
  videoPlayer: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  videoModalInfo: {
    padding: '1rem',
    color: '#fff'
  },

  // 찜한 목록 스타일 (로그북과 동일한 레이아웃)
  likedHeader: {
    backgroundColor: '#161616',
    padding: '2rem 0',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  likedLogsList: {
    display: 'grid',
    gap: '1rem'
  },
  likedLogCard: {
    backgroundColor: '#333',
    borderRadius: '12px',
    marginBottom: '1rem',
    border: '1px solid #555',
    overflow: 'hidden'
  },
  likedImageContainer: {
    width: '80px',
    height: '60px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '2px solid #555'
  },
  likedImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  emptyState: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#333',
    borderRadius: '8px',
    marginBottom: '2rem'
  },
  emptyText: {
    fontSize: '1.1rem',
    color: '#999',
    marginBottom: '0.5rem'
  },
  emptySubtext: {
    fontSize: '0.9rem',
    color: '#666',
    margin: 0
  },

  categorySection: {
    marginBottom: '2rem'
  },
  categoryGroup: {
    marginBottom: '3rem'
  },
  heartIcon: {
    width: '1.5vw',
    height: 'auto',
    marginRight: '0.5vw',
  }
};

export default MyPage;