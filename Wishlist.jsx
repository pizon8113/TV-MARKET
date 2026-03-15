export const Wishlist = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">관심 목록</h2>
    <div className="grid grid-cols-2 gap-4">
      {[1, 2].map(i => (
        <div className="border rounded-xl overflow-hidden shadow-sm">
          <div className="aspect-square bg-gray-200" />
          <div className="p-2">
            <p className="text-sm font-medium">인증 중고차: 렉서스</p>
            <p className="text-orange-500 font-bold text-sm">35,000,000원</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
