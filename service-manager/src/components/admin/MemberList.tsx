import { useCouncils } from '../../hooks/react-query/useCouncils';
import { MemberItem } from './MemberItem';

export const MemberList = () => {
  const { councils } = useCouncils();

  return (
    <>
      {councils.map((council) => (
        <MemberItem key={council.userId} {...council} />
      ))}
    </>
  );
};
