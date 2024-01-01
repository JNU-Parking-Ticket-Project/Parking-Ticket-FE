import clsx from 'clsx';
import type { Role } from '../../types/admin';
import { useAdminRoleMutate } from '../../hooks/react-query/useUser';

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
  const { putAdminRoleMutate } = useAdminRoleMutate();
  const onChangeAdminRole = (changeRole: Role) => {
    putAdminRoleMutate({ userId, role: changeRole });
  };
  return (
    <td className="flex gap-x-2 justify-around py-4">
      <button
        onClick={() => onChangeAdminRole('ADMIN')}
        className={clsx(
          styleBySelectedRole(role, 'ADMIN'),
          'px-8 py-4 rounded',
        )}
      >
        관리자
      </button>
      <button
        onClick={() => onChangeAdminRole('COUNCIL')}
        className={clsx(
          styleBySelectedRole(role, 'COUNCIL'),
          'px-8 py-4 rounded',
        )}
      >
        학생회
      </button>
      <button
        onClick={() => onChangeAdminRole('USER')}
        className={clsx(styleBySelectedRole(role, 'USER'), 'px-8 py-4 rounded')}
      >
        사용자
      </button>
    </td>
  );
};
