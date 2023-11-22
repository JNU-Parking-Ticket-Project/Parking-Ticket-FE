import { CHONNAM_UNIV, HOME_TITLE } from '../..//constants/home';

export const HomeTitle = () => {
  return (
    <header className="my-24">
      <div className="text-5xl font-semibold text-[#0B0B0B] my-4">
        {CHONNAM_UNIV}
      </div>
      <h1 className="text-7xl font-semibold text-[#0B0B0B]">{HOME_TITLE}</h1>
    </header>
  );
};

export default HomeTitle;
