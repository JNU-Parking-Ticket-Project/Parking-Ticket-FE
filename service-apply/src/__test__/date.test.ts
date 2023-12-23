import { getApplyDateString } from '../functions/date';

test('ISO 8601 날짜 형식을 YYYY.MM.DD HH:MM:SS 로 변환한다.', () => {
  expect(getApplyDateString(new Date('2023-12-14T00:30:00'))).toEqual(
    '시작시간: 2023.12.14 00:30:00',
  );
});
