import { Txt } from '@quokka/design-system';

export const ApplyTitle = () => {
  return (
    <>
      <h2 className="border-b-4 border-black mt-3 mb-2 pb-2">
        <Txt size="h3" color="primary" className="mr-5">
          주차권 신청
        </Txt>
        <Txt>신청 기간 : 2023년 12월 15일 14:00</Txt>
      </h2>
      <Txt color="error">
        적합한 서식이 아니라면 신청할 수 없습니다. 임시저장을 통해 서식을 확인해
        주세요.
      </Txt>
    </>
  );
};
