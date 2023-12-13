import type { Role } from '../../types/admin';
import { MemberRole } from './MemberRole';

// FIXME: [/v1/admin/councils] Response Body 에서 파생된 타입임. 현재 타입은 스웨거 참고함.
interface MemberItemProps {
  userId: number;
  name: string;
  studentNum: string;
  phoneNum: string;
  role: Role;
}

export const MemberItem = ({
  userId,
  name,
  studentNum,
  phoneNum,
  role,
}: MemberItemProps) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{studentNum}</td>
      <td>{phoneNum}</td>
      <MemberRole role={role} userId={userId} />
    </tr>
  );
};
