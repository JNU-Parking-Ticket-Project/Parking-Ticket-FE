const notices = ['11월 오픈은 10월 25일 10:00 시 입니다.'];

export const HomeNotice = () => {
  return (
    <div className="my-12 pl-10 border-[#D9D9D9] border rounded-lg flex gap-8 items-center">
      <span className="text-2xl font-semibold text-[#0255D5]">공지</span>
      <span className="text-xl text-[#0B0B0B] flex-1">{notices[0]}</span>
      <button className="text-[#0B0B0B] font-semibold pr-10 py-8">
        더보기
      </button>
    </div>
  );
};
