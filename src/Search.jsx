export const Search = () => (
  <div className="p-4">
    <div className="relative mb-6">
      <input className="w-full bg-gray-100 p-3 rounded-xl pl-10" placeholder="믿을 수 있는 상품 검색" />
      <SearchIcon className="absolute left-3 top-3 text-gray-400" />
    </div>
    <h3 className="font-bold mb-4">최근 무결성 검증 상품</h3>
    <div className="flex flex-wrap gap-2">
      {["샤인머스캣", "롤렉스 중고", "제주 은갈치"].map(tag => (
        <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm border border-orange-100">#{tag}</span>
      ))}
    </div>
  </div>
);
