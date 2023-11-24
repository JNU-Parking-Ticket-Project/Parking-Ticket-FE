import { Link } from 'react-router-dom';

export const HomeLogin = () => {
  return (
    <div className="flex justify-end">
      <form className="flex-1 max-w-lg" action="">
        <h3 className="my-4 text-4xl font-semibold text-[#0255D5]">
          신청 폼 작성하기
        </h3>
        <div className="flex flex-col gap-3 items-end">
          <input
            className="w-full border border-[#D9D9D9] rounded-lg p-4"
            placeholder="이메일"
            type="text"
            name="email"
            id=""
          />
          <input
            className="w-full border border-[#D9D9D9] rounded-lg p-4"
            placeholder="비밀번호"
            type="password"
            name="password"
            id=""
          />
          <Link to={'/'} className="text-[#777777]">
            비밀번호 찾기
          </Link>
          <button
            type="submit"
            className="py-4 px-14 rounded-lg bg-[#0255D5] text-white"
          >
            폼으로 이동
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeLogin;
