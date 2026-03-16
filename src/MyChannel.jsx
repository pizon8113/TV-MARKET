import React from 'react';

const MyChannel = () => {
  return (
    <div className="p-4 min-h-screen">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white mb-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-1">내 방송국</h2>
        <p className="opacity-90">상표 등록번호: 제 XX-XXXXXXX 호</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex flex-col items-center justify-center p-6 bg-white border-2 border-dashed border-gray-200 rounded-xl hover:border-orange-500 transition-colors">
          <span className="text-3xl mb-2">🎥</span>
          <span className="font-semibold text-gray-700">라이브 시작</span>
        </button>
        <button className="flex flex-col items-center justify-center p-6 bg-white border-2 border-dashed border-gray-200 rounded-xl hover:border-orange-500 transition-colors">
          <span className="text-3xl mb-2">📊</span>
          <span className="font-semibold text-gray-700">판매 통계</span>
        </button>
      </div>
    </div>
  );
};

export default MyChannel;
