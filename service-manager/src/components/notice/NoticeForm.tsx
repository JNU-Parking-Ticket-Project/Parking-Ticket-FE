import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@quokka/design-system';

interface NoticeFormProps {
  content: string;
}

const onChangeContent = (content: string) => {
  console.log(content);
};

export const NoticeForm = ({ content }: NoticeFormProps) => {
  const [value, setValue] = useState('');
  return (
    <>
      <form id="noticeForm" method="post">
        <ReactQuill
          id="noticeForm"
          className="my-14"
          style={{ width: '100%', height: '500px' }}
          onChange={onChangeContent}
        />
        <Button type="submit">저장</Button>
      </form>
    </>
  );
};
