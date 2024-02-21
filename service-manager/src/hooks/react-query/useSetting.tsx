import {
  MutateOptions,
  useMutation,
  useSuspenseQuery,
} from '@tanstack/react-query';
import {
  deleteSector,
  getSectors,
  postSectors,
  putSectors,
} from '../../apis/sectorSettings.apis';
import { Sector } from '../../apis/dtos/sector.dtos';
import { useQueryClient } from '@tanstack/react-query';
import { SettingTime } from '../../apis/dtos/times.dtos';
import {
  deleteEventBy,
  getPublishBy,
  getSectorsBy,
  getSettingEventBy,
  getSettingEvents,
  getSettingTimeBy,
  postPublishBy,
  postSettingTime,
} from '../../apis/eventSettings.apis';

export const useSectorsQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['sectors'],
    queryFn: getSectors,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { sectorSettingData: data };
};

export const useSectorQueryById = (eventId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['sectors', eventId],
    queryFn: () => getSectorsBy(eventId),
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

export const useTimeSettingQueryBy = (eventId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['timeSetting', eventId],
    queryFn: () => getSettingTimeBy(eventId),
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { timeSettingData: data };
};

export const useSettingEventQueryBy = (eventId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['settingEvent', eventId],
    queryFn: () => getSettingEventBy(eventId),
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { event: data };
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

export const useSettingEventsQuery = (pageIndex: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['couponEvents', pageIndex],
    queryFn: () => getSettingEvents(pageIndex),
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { coupon: data };
};

export const useSettingPublishQueryBy = (eventId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['publish'],
    queryFn: () => getPublishBy(eventId),
    refetchOnWindowFocus: false,
  });

  return { published: data };
};

export const useSettingPublishMutateBy = (eventId: string) => {
  const { mutate } = useMutation({
    mutationKey: ['publish'],
    mutationFn: () => postPublishBy(eventId),
  });

  return { postPublish: mutate };
};

export const useSettingEventRemoveMutateBy = (eventId: string) => {
  const { mutate } = useMutation({
    mutationKey: ['removeEvent'],
    mutationFn: () => deleteEventBy(eventId),
  });

  return { deleteEvent: mutate };
};
