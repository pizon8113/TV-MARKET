import React from 'react';

const Home = () => {
  // 샘플 상품 데이터
  const products = [
    { id: 1, name: "프리미엄 4K 스마트 TV", price: "1,200,000원", category: "가전", icon: "📺" },
    { id: 2, name: "고성능 게이밍 헤드셋", price: "150,000원", category: "IT", icon: "🎧" },
    { id: 3, name: "빈티지 가죽 소파", price: "850,000원", category: "가구", icon: "🛋️" },
    { id: 4, name: "유기농 원두 1kg", price: "35,000원", category: "식품", icon: "☕" },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* 상단 배너 영역 */}
      <div className="bg-blue-600 text-white p-6 rounded-xl mb-6 shadow-md">
        <h1 className="text-2xl font-bold italic">TV-MARKET LIVE</h1>
        <p className="mt-2 opacity-90">지금 가장 핫한 라이브 쇼핑 아이템!</p>
      </div>

      <h2 className="text-lg font-bold mb-4 flex items-center">
        <span className="mr-2">🔥</span> 오늘의 추천 상품
      </h2>

      {/* 상품 리스트 (그리드 레이아웃) */}
      <div className="grid grid-cols-1 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl mr-4">
              {product.icon}
            </div>
            <div className="flex-1">
              <span className="text-xs text-blue-500 font-semibold">{product.category}</span>
              <h3 className="font-bold text-gray-800">{product.name}</h3>
              <p className="text-red-500 font-bold">{product.price}</p>
            </div>
            <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">담기</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
