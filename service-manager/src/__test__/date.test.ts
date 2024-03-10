import { getFormalDateBy } from '../functions/date';

describe('분 단위 bound 테스트', () => {
  it('0분 일 때, 가장 빠른 30분으로 적용이 된다.', () => {
    expect(getFormalDateBy(new Date('2023-04-21T12:00:00')).getTime()).toEqual(
      new Date('2023-04-21T12:30:00').getTime(),
    );
  });
  it('1분 일 때, 가장 빠른 30분으로 적용이 된다.', () => {
    expect(getFormalDateBy(new Date('2023-04-21T12:01:00')).getTime()).toEqual(
      new Date('2023-04-21T12:30:00').getTime(),
    );
  });
  it('29분 일 때, 가장 빠른 30분으로 적용이 된다.', () => {
    expect(getFormalDateBy(new Date('2023-04-21T12:29:59')).getTime()).toEqual(
      new Date('2023-04-21T12:30:00').getTime(),
    );
  });
  it('31분 일 때, 가장 빠른 정각으로 적용이 된다.', () => {
    expect(getFormalDateBy(new Date('2023-04-21T12:31:00')).getTime()).toEqual(
      new Date('2023-04-21T13:00:00').getTime(),
    );
  });
  it('59분 일 때, 가장 빠른 정각으로 적용이 된다.', () => {
    expect(getFormalDateBy(new Date('2023-04-21T12:59:59')).getTime()).toEqual(
      new Date('2023-04-21T13:00:00').getTime(),
    );
  });
});

describe('년, 월 단위 bound 테스트', () => {
  it('년,월,일의 경계 일때, 년, 월, 일이 제대로 넘어가는지', () => {
    expect(getFormalDateBy(new Date('2023-12-31T23:59:00')).getTime()).toEqual(
      new Date('2024-01-01T00:00:00').getTime(),
    );
  });

  it('월, 일의 경계일 때, 월, 일이 제대로 넘어가는지', () => {
    expect(getFormalDateBy(new Date('2023-11-30T23:59:00')).getTime()).toEqual(
      new Date('2023-12-01T00:00:00').getTime(),
    );
  });
});
