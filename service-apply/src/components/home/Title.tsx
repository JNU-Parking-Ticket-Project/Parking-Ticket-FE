import { CHONNAM_UNIV, HOME_TITLE } from '../..//constants/home';

export const HomeTitle = () => {
  return (
    <header className="mt-36 mb-12">
      <div className="text-6xl font-semibold text-[#0B0B0B] my-4">
        {CHONNAM_UNIV}
      </div>
      <h1 className="text-7xl font-semibold text-[#0B0B0B]">{HOME_TITLE}</h1>
    </header>
  );
};

export default HomeTitle;
