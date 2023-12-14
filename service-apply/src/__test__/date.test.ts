import { parseISO8601ToFormatString } from '../functions/date';

test('ISO 8601 날짜 형식을 YYYY.MM.DD HH:MM:SS 로 변환한다.', () => {
  expect(parseISO8601ToFormatString('2023-12-14T00:30:00')).toEqual(
    '2023.12.14 00:30:00',
  );
});
