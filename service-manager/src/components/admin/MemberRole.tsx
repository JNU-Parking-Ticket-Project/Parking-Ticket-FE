import clsx from 'clsx';
import type { Role } from '../../types/admin';

interface MemberRole {
  userId: number;
  role: Role;
}

const styleBySelectedRole = (selected: Role, role: Role) => {
  return selected === role
    ? 'bg-[#CEDCFF] text-[#2160FF]'
    : 'bg-[#D0D0D0]/[0.38] text-[#B5B5B5]';
};

export const MemberRole = ({ role, userId }: MemberRole) => {
  return (
    <td className="flex justify-between py-4">
      <button
        className={clsx(
          styleBySelectedRole(role, 'ADMIN'),
          'px-8 py-4 rounded',
        )}
      >
        관리자
      </button>
      <button
        className={clsx(
          styleBySelectedRole(role, 'COUNCIL'),
          'px-8 py-4 rounded',
        )}
      >
        학생회
      </button>
      <button
        className={clsx(styleBySelectedRole(role, 'USER'), 'px-8 py-4 rounded')}
      >
        사용자
      </button>
    </td>
  );
};
