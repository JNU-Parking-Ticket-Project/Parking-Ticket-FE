import {
  useAnnounceCreateMutate,
  useAnnounceDeleteMutate,
  useAnnounceUpdateMutate,
} from '../../hooks/react-query/useAnnounce';
import { useNavigate } from 'react-router-dom';

export const useCreateAnnouncement = () => {
  const navigate = useNavigate();
  const { postAnnounce } = useAnnounceCreateMutate();

  const onCreate = ({
    announceTitle,
    announceContent,
    imageUrl,
  }: {
    announceTitle: string;
    announceContent: string;
    imageUrl: string[];
  }) => {
    postAnnounce(
      {
        announceTitle,
        announceContent,
        imageUrl,
      },
      {
        onError: (error) => {
          alert(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          alert('등록되었습니다.');
          navigate('/announcement');
        },
      },
    );
  };
  return {
    onCreate,
  };
};

interface AnnouncementUpdateForm {
  announceId: number;
  announceTitle: string;
  announceContent: string;
  imageUrl: string[];
}

export const useAnnounceUpdate = () => {
  const navigate = useNavigate();
  const { putAnnounceById } = useAnnounceUpdateMutate();
  const redirectPage = ({ path }: { path: string }) => {
    navigate(path);
    window.location.reload();
  };
  const onUpdate = ({
    announceId,
    announceTitle,
    announceContent,
    imageUrl,
  }: AnnouncementUpdateForm) => {
    putAnnounceById(
      announceId,
      {
        announceTitle,
        announceContent,
        imageUrl,
      },
      {
        onError: (error) => {
          alert(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          alert('수정되었습니다.');
          redirectPage({ path: `/announcement/${announceId}` });
        },
      },
    );
  };
  return {
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
