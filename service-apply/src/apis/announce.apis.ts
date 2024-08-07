import { https } from '../functions/https';
import { AllAnnounce, Announce, LastAnnounce } from './dtos/announce.dtos';
import { isErrorResponse } from './dtos/response.dtos';

export const getAllAnnounce = async (page: number) => {
  const response = await https.get(`/v1/announce?page=${page}`);
  if (isErrorResponse(response)) {
    return new AllAnnounce({ announces: [], lastPage: 0, nextPage: 0 });
  }
  return new AllAnnounce(response);
};

export const getAnnounceLast = async () => {
  const response = await https.get('/v1/announce/last');
  if (isErrorResponse(response)) {
    return new LastAnnounce({
      announceId: -1,
      announceTitle: '게시글이 없습니다',
    });
  }
  return new LastAnnounce(response);
};

export const getAnnounceById = async (announceId: number) => {
  const response = await https.get(`/v1/announce/${announceId}`);
  if (isErrorResponse(response)) {
    throw new Error('게시글을 조회할 수 없습니다');
    // TODO: response dto에 status와 reason을 추가해야 아래 로직 가능
    // throw new Error(response.reason);
  }
  return new Announce(response);
};
