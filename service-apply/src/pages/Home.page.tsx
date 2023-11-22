import HomeNotice from '../components/home/Notice';
import HomeTitle from '../components/home/Title';

export const HomePage = () => {
  return (
    <main className="max-w-[1280px] m-auto">
      <HomeTitle />
      <HomeNotice />
    </main>
  );
};

export default HomePage;
