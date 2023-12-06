import { redirect, useParams } from 'react-router-dom';
import { PasswordResetForm } from '../../components/password-reset/PasswordResetForm';

export const PasswordResetPage = () => {
  // TODO: resetId를 이용해 백엔드에 유효한 resetId인지 검증한 후, 페이지를 보여주어야 함.
  const { resetId } = useParams();

  if (!resetId) {
    redirect('/');
    return <></>;
  }

  return <PasswordResetForm code={resetId} />;
};
