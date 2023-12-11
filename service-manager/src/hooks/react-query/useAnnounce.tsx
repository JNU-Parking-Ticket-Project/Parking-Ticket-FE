import {
  useSuspenseQuery,
  useMutation,
  MutateOptions,
} from '@tanstack/react-query';
import {
  AnnounceRequest,
  deleteAnnounceById,
  getAllAnnounce,
  getAnnounceById,
  postAnnounce,
  putAnnounceById,
} from '../../apis/announce.apis';
import { Announce } from 'service-manager/src/apis/dtos/announce.dtos';

export const useAnnounceListQuery = (page: number) => {
  const { data: announceListData } = useSuspenseQuery({
    queryKey: ['anounceList', page],
    queryFn: () => getAllAnnounce(page),
  });
  return { announceListData };
};

export const useAnnounceDetailQuery = (announceId: number) => {
  const { data: announceDetailData } = useSuspenseQuery({
    queryKey: ['anounceDetail', announceId],
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
  const { mutate } = useMutation({
    mutationKey: ['announceUpdate'],
    mutationFn: putAnnounceById,
  });

  return {
    putAnnounceById: (
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

export const useAnnounceDeleteMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['announceDelete'],
    mutationFn: deleteAnnounceById,
  });

  return {
    deleteAnnounceById: (
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
