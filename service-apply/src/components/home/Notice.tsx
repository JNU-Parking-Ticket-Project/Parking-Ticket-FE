import { ADD_MORE, NOTICE } from '../../constants/home';

const notices = ['11월 오픈은 10월 25일 10:00 시 입니다.'];

export const HomeNotice = () => {
  return (
    <div className="pl-10 border-[#D9D9D9] border rounded-lg flex gap-12 items-center">
      <span className="text-2xl font-semibold text-[#0255D5]">{NOTICE}</span>
      <span className="text-xl text-[#0B0B0B] flex-1">{notices[0]}</span>
      <button className="text-[#0B0B0B] font-semibold pr-10 py-8">
        {ADD_MORE}
      </button>
    </div>
  );
};

export default HomeNotice;
