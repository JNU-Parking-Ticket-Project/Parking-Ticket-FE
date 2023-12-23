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
import {
  M_KEY_SECTORS_CREATE,
  M_KEY_SECTORS_DELETE,
  M_KEY_SECTORS_UPDATE,
  M_KEY_TIME_SETTING_UPDATE,
  Q_KEY_SECTORS,
  Q_KEY_TIME_SETTING,
} from '../../constants/tqkey';

export const useSectorsQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [Q_KEY_SECTORS],
    queryFn: getSectors,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { sectorSettingData: data };
};

type SectorRequest = Omit<Sector, 'id' | 'issueAmount'>[];

export const useSectorUpdateMutate = () => {
  const { mutate } = useMutation({
    mutationKey: [M_KEY_SECTORS_UPDATE],
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
    mutationKey: [M_KEY_SECTORS_CREATE],
    mutationFn: postSectors,
  });
  const queryClient = useQueryClient();

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
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
          queryClient.invalidateQueries({ queryKey: [Q_KEY_SECTORS] });
        },
      }),
  };
};

export const useSectorDeleteMutate = () => {
  const { mutate } = useMutation({
    mutationKey: [M_KEY_SECTORS_DELETE],
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
          queryClient.invalidateQueries({ queryKey: [Q_KEY_SECTORS] });
        },
      }),
  };
};

export const useTimeSettingQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [Q_KEY_TIME_SETTING],
    queryFn: getSettingTime,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { timeSettingData: data };
};

export const useTimeSettingUpdateMutate = () => {
  const { mutate } = useMutation({
    mutationKey: [M_KEY_TIME_SETTING_UPDATE],
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
          if (!data) throw new Error('data is undefined');
          queryClient.invalidateQueries({ queryKey: [Q_KEY_TIME_SETTING] });
        },
      }),
  };
};
