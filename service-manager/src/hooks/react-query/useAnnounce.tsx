import {
  useSuspenseQuery,
  useMutation,
  MutateOptions,
  useQueryClient,
} from '@tanstack/react-query';
import {
  AnnounceRequest,
  deleteAnnounceById,
  getAllAnnounce,
  getAnnounceById,
  postAnnounce,
  putAnnounceById,
} from '../../apis/announce.apis';
import {
  Announce,
  AnnounceDelete,
} from 'service-manager/src/apis/dtos/announce.dtos';

export const useAnnounceListQuery = (page: number) => {
  const { data: announceListData } = useSuspenseQuery({
    queryKey: ['announceList', page],
    queryFn: () => getAllAnnounce(page),
  });
  return { announceListData };
};

export const useAnnounceDetailQuery = (announceId: number) => {
  const { data: announceDetailData } = useSuspenseQuery({
    queryKey: ['announceDetail', announceId],
    queryFn: () => getAnnounceById(announceId),
  });
  return { announceDetailData };
};

export const useAnnounceCreateMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['announceCreate'],
    mutationFn: postAnnounce,
  });

  return {
    postAnnounce: (
      content: AnnounceRequest,
      mutateOption?: Omit<MutateOptions<Announce, Error, unknown>, 'onSettled'>,
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

export const useAnnounceUpdateMutate = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['announceUpdate'],
    mutationFn: putAnnounceById,
  });

  return {
    putAnnounceById: (
      announceId: number,
      data: AnnounceRequest,
      mutateOption?: Omit<MutateOptions<Announce, Error, unknown>, 'onSettled'>,
    ) => {
      mutate(
        { announceId, data },
        {
          ...mutateOption,
          onSettled: (data) => {
            if (!data) throw new Error('data is undefined');
            queryClient.invalidateQueries({
              queryKey: ['announceDetail', announceId],
            });
          },
        },
      );
    },
  };
};

export const useAnnounceDeleteMutate = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['announceDelete'],
    mutationFn: deleteAnnounceById,
  });

  return {
    deleteAnnounceById: (
      announceId: number,
      mutateOption?: Omit<
        MutateOptions<AnnounceDelete, Error, unknown>,
        'onSettled'
      >,
    ) => {
      mutate(announceId, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
          queryClient.invalidateQueries({
            queryKey: ['announceList'],
          });
        },
      });
    },
  };
};
