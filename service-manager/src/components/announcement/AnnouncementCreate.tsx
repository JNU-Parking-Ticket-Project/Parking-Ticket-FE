import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@quokka/design-system';
import { useState } from 'react';
import { FormEventHandler } from 'react';

interface AnnouncementFormProps {
  title: string;
  content: string;
  createdAt: string;
}

export const AnnouncementCreate = () => {
  const [title, setTitle] = useState<AnnouncementFormProps['title']>('');
  const [content, setContent] = useState<AnnouncementFormProps['content']>('');
  const [createdAt, setCreatedAt] =
    useState<AnnouncementFormProps['createdAt']>('');

  const onSubmitAnnouncementForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const currentTime = new Date().toISOString();
    setCreatedAt(currentTime);
    console.log(content, createdAt);
    //TODO: POST
  };

  return (
    <>
      <form id="noticeForm" method="post" onSubmit={onSubmitAnnouncementForm}>
        <div className="flex flex-col">
          <label htmlFor="title"></label>
          <input
            id="title"
            type="text"
            className="border-2 border-gray-200 rounded-lg p-4 bg-gray-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요."
          ></input>
        </div>

        <ReactQuill
          id="noticeForm"
          className="my-14"
          style={{ width: '100%', height: '500px' }}
          value={content}
          onChange={setContent}
        />
      </form>
      <div className="flex justify-end">
        <Button type="submit">저장</Button>
      </div>
    </>
  );
};
