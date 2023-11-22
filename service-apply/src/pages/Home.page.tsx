import HomeInforamtion from '../components/home/Information';
import HomeNotice from '../components/home/Notice';
import HomeTitle from '../components/home/Title';

export const HomePage = () => {
  return (
    <main className="max-w-[1280px] m-auto px-12">
      <HomeTitle />
      <div className="flex gap-4">
        <div className="flex-1">
          <HomeInforamtion />
          <HomeNotice />
        </div>
        <div className="flex-1"></div>
      </div>
    </main>
  );
};

export default HomePage;
