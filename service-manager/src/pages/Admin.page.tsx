import { Txt } from '@quokka/design-system';
import { NavContainer } from '../components/common/NavContainer';
import { NavTitle } from '../components/common/NavTitle';
import { MemberList } from '../components/admin/MemberList';

export const AdminPage = () => {
  return (
    <>
      <nav className="flex flex-row">
        <NavTitle />
        <NavContainer />
      </nav>
      <main className="mx-32">
        <div className="border-b pb-4">
          <Txt size="h3" color="primary" className="font-semibold ">
            회원가입
          </Txt>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-[#B5B7C0] text-left">
              <th>이름</th>
              <th>학번</th>
              <th>휴대전화</th>
              <th>역할</th>
            </tr>
          </thead>
          <tbody>
            <MemberList />
          </tbody>
        </table>
      </main>
    </>
  );
};
