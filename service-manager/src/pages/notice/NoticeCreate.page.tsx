import { Txt } from '@quokka/design-system';
import { NoticeForm } from '../../components/notice/NoticeForm';

export const NoticeCreate = () => {
  return (
    <div className="flex flex-col">
      <Txt size="h3">안내사항 작성</Txt>
      <NoticeForm />
    </div>
  );
};
