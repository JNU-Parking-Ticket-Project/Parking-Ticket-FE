import { Txt } from '@quokka/design-system';
import { NoticeUpdate } from '../../components/notice/NoticeUpdate';

export const NoticeUpdatePage = () => {
  return (
    <div className="flex flex-col">
      <Txt size="h3">안내사항 작성</Txt>
      <NoticeUpdate />
    </div>
  );
};
