import React, { createContext, useContext, useState } from 'react';

const LikeContext = createContext();

export const useLike = () => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error('useLike must be used within a LikeProvider');
  }
  return context;
};

export const LikeProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState({
    암장: [],
    장비: [],
    스트레칭: []
  });

  const toggleLike = (item, category) => {
    setLikedItems(prev => {
      const currentItems = prev[category];
      const exists = currentItems.some(likedItem => likedItem.id === item.id);
      
      if (exists) {
        // 이미 찜한 경우 제거
        return {
          ...prev,
          [category]: currentItems.filter(likedItem => likedItem.id !== item.id)
        };
      } else {
        // 찜하지 않은 경우 추가
        return {
          ...prev,
          [category]: [...currentItems, item]
        };
      }
    });
  };

  const isLiked = (itemId, category) => {
    return likedItems[category].some(item => item.id === itemId);
  };

  return (
    <LikeContext.Provider value={{ likedItems, toggleLike, isLiked }}>
      {children}
    </LikeContext.Provider>
  );
};