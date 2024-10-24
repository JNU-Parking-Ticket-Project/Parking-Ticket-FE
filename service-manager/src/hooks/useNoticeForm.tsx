import { useNoticeMutate } from './react-query/useNotice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export interface NoticeFormProps {
  noticeContent: string;
}

export const useNoticeForm = () => {
  const { putNotice } = useNoticeMutate();
  const navigate = useNavigate();

  const onUpdate = ({ noticeContent: content }: NoticeFormProps) => {
    putNotice(
      { noticeContent: content },
      {
        onError: (error) => {
          alert(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          alert('수정되었습니다.');
          navigate('/notice');
        },
      },
    );
  };
  return { onUpdate };
};
