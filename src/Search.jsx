import React from 'react';

const Search = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-bold mb-4">검색</h2>
      
      {/* 검색창 UI */}
      <div className="relative mb-6">
        <input 
          type="text" 
          placeholder="상품명이나 방송국을 검색하세요" 
          className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
      </div>

      {/* 추천 키워드 */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">인기 검색어</h3>
        <div className="flex flex-wrap gap-2">
          {['실시간 특가', '패션 라이브', '가전제품', '제철과일'].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white border rounded-full text-sm text-gray-600 cursor-pointer hover:bg-orange-50">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
