import { useState, useRef } from 'react';

interface NoticeFormProps {
  content: string;
}

export const useNoticeForm = (props: NoticeFormProps) => {
  const [content, setContent] = useState(props.content);
  const editorRef = useRef<any>();
  const handleNoticeForm = (e: any) => {
    setContent(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  const submitNoticeForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(content);
  };

  return { content, setContent, submitNoticeForm, handleNoticeForm };
};
