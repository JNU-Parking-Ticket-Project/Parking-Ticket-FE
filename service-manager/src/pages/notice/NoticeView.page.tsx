import { INIT_CONTENT, NoticeView } from '../../components/notice/NoticeView';

export const NoticeViewPage = () => {
  return (
    <div className="flex flex-col">
      <NoticeView content={INIT_CONTENT} />
    </div>
  );
};
