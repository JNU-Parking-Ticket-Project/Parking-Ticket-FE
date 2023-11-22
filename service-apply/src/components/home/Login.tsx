import { Link } from 'react-router-dom';
import { LOGIN } from '../../constants/home';

export const HomeLogin = () => {
  return (
    <div className="flex justify-end">
      <form className="flex-1 max-w-lg" action="">
        <h3 className="my-4 text-4xl font-semibold text-[#0255D5]">
          {LOGIN.TITLE}
        </h3>
        <div className="flex flex-col gap-3 items-end">
          <input
            className="w-full border border-[#D9D9D9] rounded-lg p-4"
            placeholder={LOGIN.EMAIL}
            type="text"
            name="email"
            id=""
          />
          <input
            className="w-full border border-[#D9D9D9] rounded-lg p-4"
            placeholder={LOGIN.PASSWORD}
            type="password"
            name="password"
            id=""
          />
          <Link to={'/'} className="text-[#777777]">
            {LOGIN.FIND_PASSWORD}
          </Link>
          <button
            type="submit"
            className="py-4 px-14 rounded-lg bg-[#0255D5] text-white"
          >
            {LOGIN.LOGIN}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeLogin;
