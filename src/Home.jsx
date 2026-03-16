import React from 'react';

const Home = () => {
  const products = [
    { id: 1, name: "프리미엄 4K TV", price: "1,200,000원", img: "📺" },
    { id: 2, name: "무선 노이즈캔슬링 헤드셋", price: "350,000원", img: "🎧" },
    { id: 3, name: "스마트 홈 카메라", price: "89,000원", img: "📷" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">TV-MARKET</h1>
      <p className="text-gray-600 mb-6">오늘의 라이브 특가 상품을 만나보세요!</p>
      
      <div className="grid grid-cols-1 gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 flex items-center shadow-sm">
            <div className="text-4xl mr-4">{product.img}</div>
            <div>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-blue-600 font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
