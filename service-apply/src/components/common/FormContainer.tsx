import { Container } from '@quokka/design-system';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface FormContainerProps
  extends PropsWithChildren,
    Pick<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  title: string;
}

export const FormContainer = ({
  title,
  children,
  onSubmit,
}: FormContainerProps) => {
  return (
    <Container className="max-w-[30rem] min-w-[25rem] my-12" size="large">
      <form onSubmit={onSubmit}>
        <h2 className="text-[#0255D5] text-2xl font-bold pb-8">{title}</h2>
        {children}
      </form>
    </Container>
  );
};
