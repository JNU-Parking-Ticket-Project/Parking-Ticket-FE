import { Button } from '@quokka/design-system';

interface NoticeFormProps {
  content: string;
  lastContent: string;
}

export const NoticeForm = ({ content }: NoticeFormProps) => {
  return (
    <>
      <form id="noticeForm" method="post">
        <Button type="submit">저장</Button>
      </form>
    </>
  );
};
