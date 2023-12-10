import { MemberItem } from './MemberItem';

export const MemberList = () => {
  return (
    <>
      <MemberItem
        userId={1}
        name="이윤성"
        phoneNum="010-1111-1111"
        studentNum="181818"
        role="ADMIN"
      />
      <MemberItem
        userId={1}
        name="이윤성"
        phoneNum="010-1111-1111"
        studentNum="181818"
        role="ADMIN"
      />
    </>
  );
};
