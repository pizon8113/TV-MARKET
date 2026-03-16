import React from 'react';

const Wishlist = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-bold mb-4">관심 목록</h2>
      
      {/* 찜한 상품이 없을 때 보여주는 화면 */}
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <span className="text-5xl mb-4">❤️</span>
        <p>아직 관심 상품이 없습니다.</p>
        <p className="text-sm">라이브 방송을 보며 마음에 드는 상품을 담아보세요!</p>
      </div>

      {/* 나중에 상품이 추가되면 여기에 리스트를 만듭니다 */}
    </div>
  );
};

export default Wishlist; // 이 줄이 가장 중요합니다!
