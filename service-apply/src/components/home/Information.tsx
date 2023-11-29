import { Txt } from '@quokka/design-system';

const information =
  "별도의 회원가입 없이 신청폼으로 이동할 수 있습니다.\n\n입력 후 '폼으로 이동' 클릭시 바로 회원정보가 등록되니 비밀번호 입력을 주의해주세요.\n등록 후 정보 불일치시 주차권 신청에 불이익이 있습니다.";

export const HomeInforamtion = () => {
  return (
    <article>
      <Txt size="h4" color="primary" className="my-4">
        안내사항
      </Txt>
      <div className="flex flex-col gap-2">
        {information.split('\n').map((line, index) => (
          <Txt size="h6" key={index}>
            {line}
          </Txt>
        ))}
      </div>
    </article>
  );
};

export default HomeInforamtion;
