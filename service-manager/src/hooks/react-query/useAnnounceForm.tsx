import { AnnouncementFormProps } from '../../components/announcement/AnnouncementCreate';
import { useAnnounceCreateMutate } from '../../hooks/react-query/useAnnounce';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type AnnouncementFormInputAction =
  | {
      type: keyof AnnouncementFormProps;
      payload: AnnouncementFormProps[keyof AnnouncementFormProps];
    }
  | {
      type: 'reset';
      payload: null;
    };

const announcementFormReducer = (
  state: AnnouncementFormProps,
  action: AnnouncementFormInputAction,
): AnnouncementFormProps => {
  switch (action.type) {
    case 'announceTitle':
      return { ...state, announceTitle: action.payload as string };
    case 'announceContent':
      return { ...state, announceContent: action.payload as string };
    case 'reset':
      return {
        announceTitle: '',
        announceContent: '',
      };
    default:
      return state;
  }
};

const initialState: AnnouncementFormProps = {
  announceTitle: '',
  announceContent: '',
};

export const useAnnounceForm = (init?: AnnouncementFormProps) => {
  const [title, setTitle] = useState<string>(init?.announceTitle || '');
  const [content, setContent] = useState<string>(init?.announceContent || '');
  const navigate = useNavigate();
  const { postAnnounce } = useAnnounceCreateMutate();

  const onSubmit = ({
    announceTitle,
    announceContent,
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
          navigate(`/announcement/${data.announceId}`);
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
