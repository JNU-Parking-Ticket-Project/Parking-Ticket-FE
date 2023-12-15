import { format } from 'date-fns';

/** ISO 8601 표준 Date를 ApplyTitle에 맞게 포맷으로 변환하는 함수 */
export const getApplyDateString = (startAt: Date) => {
  return `시작시간: ${format(startAt, 'yyyy.MM.dd HH:mm:ss')}`;
};
