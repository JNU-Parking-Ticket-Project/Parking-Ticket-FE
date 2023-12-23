import { Container, Txt } from '@quokka/design-system';
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
    <Container className="max-w-[30rem] my-12 w-full bg-white" size="large">
      <form onSubmit={onSubmit}>
        <Txt color="primary" className="text-2xl font-bold pb-8 sm:text-xl">
          {title}
        </Txt>
        {children}
      </form>
    </Container>
  );
};
