import { AnnouncementFormProps } from '../../components/announcement/AnnouncementCreate';
import {
  useAnnounceCreateMutate,
  useAnnounceDeleteMutate,
  useAnnounceUpdateMutate,
} from '../../hooks/react-query/useAnnounce';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const useAnnounceForm = (init?: AnnouncementFormProps) => {
  const [title, setTitle] = useState<string>(init?.announceTitle || '');
  const [content, setContent] = useState<string>(init?.announceContent || '');
  const navigate = useNavigate();
  const { postAnnounce } = useAnnounceCreateMutate();

  const onSubmit = ({
    announceTitle: title,
    announceContent: content,
  }: AnnouncementFormProps) => {
    postAnnounce(
      {
        announceTitle: title,
        announceContent: content,
      },
      {
        onError: (error) => {
          alert(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          navigate(-1);
        },
      },
    );
  };
  return {
    title,
    content,
    setTitle,
    onSubmit,
  };
};

interface AnnouncementUpdateForm {
  announceId: number;
  announceTitle: string;
  announceContent: string;
}

export const useAnnounceUpdate = (init: AnnouncementUpdateForm) => {
  const [title, setTitle] = useState<string>(init.announceTitle || '');
  const [content, setContent] = useState<string>(init.announceContent || '');
  const navigate = useNavigate();
  const { putAnnounceById } = useAnnounceUpdateMutate();

  const onUpdate = ({
    announceId,
    announceTitle: title,
    announceContent: content,
  }: AnnouncementUpdateForm) => {
    putAnnounceById(
      announceId,
      {
        announceTitle: title,
        announceContent: content,
      },
      {
        onError: (error) => {
          alert(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          navigate(`/announcement/${announceId}`);
        },
      },
    );
  };
  return {
    title,
    content,
    setTitle,
    onUpdate,
  };
};

export const useAnnounceDelete = () => {
  const { deleteAnnounceById } = useAnnounceDeleteMutate();
  const navigate = useNavigate();

  const onDelete = (announceId: number) => {
    deleteAnnounceById(announceId, {
      onError: (error) => {
        alert(error.message);
      },
      onSuccess: (data) => {
        if (!data) throw new Error('data is undefined');
        alert('삭제되었습니다.');
        navigate('/announcement');
      },
    });
  };
  return {
    onDelete,
  };
};
