import { Txt } from '@quokka/design-system';
import { useInformationQuery } from '../../hooks/react-query/useInformation';

export const HomeInforamtion = () => {
  const { information } = useInformationQuery();

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
