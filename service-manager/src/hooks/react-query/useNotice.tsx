import { getNotice, putNotice } from '../../apis/notice.apis';
import {
  useMutation,
  MutateOptions,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { Notice } from '../../apis/dtos/notice.dtos';
import { M_KEY_NOTICE, Q_KEY_NOTICE } from '../../constants/tqkey';

export const useNoticeQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [Q_KEY_NOTICE],
    queryFn: getNotice,
    gcTime: Infinity,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  return { noticeData: data };
};

export const useNoticeMutate = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: [M_KEY_NOTICE],
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
          queryClient.setQueryData([Q_KEY_NOTICE], data);
        },
      });
    },
  };
};
