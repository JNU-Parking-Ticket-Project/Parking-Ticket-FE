import { getNotice, putNotice } from '../../apis/notice.apis';
import { useQuery, useMutation, MutateOptions } from '@tanstack/react-query';
import { Notice } from '../../apis/dtos/notice.dtos';

export const useNoticeQuery = () => {
  const { data } = useQuery({
    queryKey: ['notice'],
    queryFn: getNotice,
    gcTime: Infinity,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  return { noticeData: data };
};

export const useNoticeMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['notice'],
    mutationFn: putNotice,
  });

  return {
    putNotice: (
      content: Notice,
      mutateOption?: Omit<MutateOptions<Notice, Error, unknown>, 'onSettled'>,
    ) => {
      mutate(content, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
        },
      });
    },
  };
};
