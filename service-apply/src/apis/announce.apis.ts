import { https } from '../functions/https';
import { AllAnnounce, Announce, LastAnnounce } from './dtos/announce.dtos';

export const getAllAnnounce = async () => {
  const { data: resData } = await https.get('/api/v1/announce');
  return new AllAnnounce(resData);
};

export const getAnnounceLast = async () => {
  const { data: resData } = await https.get('/api/v1/announce/last');
  return new Announce(resData);
};

export const getAnnounceById = async (announceId: number) => {
  const { data: resData } = await https.get(`/api/v1/announce/${announceId}`);
  return new LastAnnounce(resData);
};
