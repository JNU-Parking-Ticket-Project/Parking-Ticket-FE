import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@quokka/design-system';
import { useState } from 'react';
import { FormEventHandler } from 'react';

interface NoticeFormProps {
  content: string;
  createdAt: string;
}

export const NoticeForm = () => {
  const [noticeForm, setNoticeForm] = useState<NoticeFormProps['content']>('');
  const [createdAt, setCreatedAt] = useState<NoticeFormProps['createdAt']>('');

  const onSubmitNoticeForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const currentTime = new Date().toISOString();
    setCreatedAt(currentTime);
    console.log(noticeForm, createdAt);
    //TODO: POST
  };

  return (
    <>
      <form id="noticeForm" method="post" onSubmit={onSubmitNoticeForm}>
        <ReactQuill
          id="noticeForm"
          className="my-14"
          style={{ width: '100%', height: '500px' }}
          value={noticeForm}
          onChange={setNoticeForm}
        />
        <Button type="submit">저장</Button>
      </form>
    </>
  );
};
