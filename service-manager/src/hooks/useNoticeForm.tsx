import { useNoticeMutate, useNoticeQuery } from './react-query/useNotice';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

interface NoticeFormProps {
  content: string;
}

type NoticeFormInputAction =
  | {
      type: keyof NoticeFormProps;
      payload: NoticeFormProps[keyof NoticeFormProps];
    }
  | {
      type: 'reset';
      payload: null;
    };

const noticeFormReducer = (
  state: NoticeFormProps,
  action: NoticeFormInputAction,
): NoticeFormProps => {
  switch (action.type) {
    case 'content':
      return {
        ...state,
        content: action.payload,
      };
    case 'reset':
      return {
        ...state,
        ...initValue,
      };
    default:
      return state;
  }
};

const initValue = {
  content: '',
};

export const useNoticeForm = (init?: NoticeFormProps) => {
  init ||= initValue;
  const [state, dispatch] = useReducer(noticeFormReducer, init);
  const { putNotice } = useNoticeMutate();
  const navigate = useNavigate();

  const onSubmit = () => {
    putNotice(
      { noticeContent: state.content },
      {
        onError: (error) => {
          console.log(error);
          alert(error.message);
          throw new Error(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          dispatch({ type: 'reset', payload: null });
          alert('안내사항이 수정되었습니다.');
          navigate('/notice');
        },
      },
    );
  };
  return {
    state,
    dispatch,
    onSubmit,
  };
};
