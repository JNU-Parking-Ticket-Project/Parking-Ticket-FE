import {
  MutateOptions,
  useMutation,
  useSuspenseQuery,
} from '@tanstack/react-query';
import {
  deleteSector,
  getSectors,
  getSettingTime,
  postSectors,
  postSettingTime,
  putSectors,
} from '../../apis/settings.apis';
import { Sector } from '../../apis/dtos/sector.dtos';
import { useQueryClient } from '@tanstack/react-query';
import { SettingTime } from 'service-manager/src/apis/dtos/times.dtos';

export const useSectorsQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['sectors'],
    queryFn: getSectors,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { sectorSettingData: data };
};

type SectorRequest = Omit<Sector, 'id' | 'issueAmount'>[];

export const useSectorUpdateMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['sectorsUpdate'],
    mutationFn: putSectors,
  });
  const queryClient = useQueryClient();

  return {
    putSectors: (
      sectors: SectorRequest,
      mutateOption?: Omit<
        MutateOptions<{ message: string }, Error, SectorRequest, unknown>,
        'onSettled'
      >,
    ) =>
      mutate(sectors, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
          queryClient.invalidateQueries({ queryKey: ['sectors'] });
        },
      }),
  };
};

export const useSectorCreateMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['sectorsCreate'],
    mutationFn: postSectors,
  });

  return {
    postSectors: (
      sectors: SectorRequest,
      mutateOption?: Omit<
        MutateOptions<{ message: string }, Error, SectorRequest, unknown>,
        'onSettled'
      >,
    ) =>
      mutate(sectors, {
        ...mutateOption,
      }),
  };
};

export const useSectorDeleteMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['sectorsDelete'],
    mutationFn: deleteSector,
  });
  const queryClient = useQueryClient();

  return {
    deleteSector: (
      sectionId: string,
      mutateOption?: Omit<
        MutateOptions<{ message: string }, Error, string, unknown>,
        'onSettled'
      >,
    ) =>
      mutate(sectionId, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
          queryClient.invalidateQueries({ queryKey: ['sectors'] });
        },
      }),
  };
};

export const useTimeSettingQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['timeSetting'],
    queryFn: getSettingTime,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { timeSettingData: data };
};

export const useTimeSettingUpdateMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['timeSettingUpdate'],
    mutationFn: postSettingTime,
  });
  const queryClient = useQueryClient();

  return {
    postSettingTime: (
      times: SettingTime,
      mutateOption?: Omit<
        MutateOptions<{ message: string }, Error, SettingTime, unknown>,
        'onSettled'
      >,
    ) =>
      mutate(times, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('데이터가 없습니다.');
          queryClient.invalidateQueries({ queryKey: ['timeSetting'] });
        },
      }),
  };
};
