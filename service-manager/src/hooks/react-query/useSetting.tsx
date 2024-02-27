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
  putPublishBy,
  postSettingTime,
  putSettingTime,
} from '../../apis/eventSettings.apis';
import { useNavigate } from 'react-router-dom';

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
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['sectorsCreate'],
    mutationFn: postSectors,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['sectors'] });
    },
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

export const useTimeSettingCreateMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['timeSettingCreate'],
    mutationFn: postSettingTime,
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
          queryClient.invalidateQueries({ queryKey: ['settingEvent'] });
          queryClient.invalidateQueries({ queryKey: ['couponEvents'] });
          navigate('/setting');
        },
      }),
  };
};

export const useTimeSettingUpdateMutate = (eventId: string) => {
  const { mutate } = useMutation({
    mutationKey: ['timeSettingUpdate', eventId],
    mutationFn: (times: SettingTime) => putSettingTime(eventId, times),
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return {
    putSettingTime: (
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
          queryClient.invalidateQueries({ queryKey: ['settingEvent'] });
          queryClient.invalidateQueries({ queryKey: ['couponEvents'] });
          navigate('/setting');
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
  const {
    data: { publish },
  } = useSuspenseQuery({
    queryKey: ['publish', eventId],
    queryFn: () => getPublishBy(eventId),
    refetchOnWindowFocus: false,
  });

  return { published: publish };
};

export const useSettingPublishMutateBy = (eventId: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ['publish', eventId],
    mutationFn: (publish: boolean) => putPublishBy(eventId, publish),
    onSuccess: (response) => {
      alert(response.publish ? '게시되었습니다.' : '비게시되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['couponEvents'] });
      navigate('/setting');
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });

  return { postPublish: mutate };
};

export const useSettingEventRemoveMutateBy = (eventId: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ['removeEvent', eventId],
    mutationFn: () => deleteEventBy(eventId),
    onSuccess: () => {
      alert('이벤트가 삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['couponEvents'] });
      navigate('/setting');
    },
  });

  return { deleteEvent: mutate };
};
