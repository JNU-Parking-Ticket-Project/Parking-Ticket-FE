import { useState } from 'react';
import { useEamilCheckMutate, useSignUpMutate } from './react-query/useUser';
import {
  phoneNumberReplace,
  studentNumberReplace,
} from '../functions/replacer';
import { useNavigate } from 'react-router-dom';

export const useSignUpForm = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [isFirstValid, setIsFirstValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { postSignup } = useSignUpMutate();
  const { postEmailCheck } = useEamilCheckMutate();
  const navigate = useNavigate();

  const onSignUp = () => {
    if (!isFirstValid) {
      alert('중복확인을 해주세요.');
      setErrorMessage('중복확인을 해주세요.');
      return;
    }
    if (!emailValid) {
      alert('올바르지 않는 이메일입니다.');
      setErrorMessage('올바르지 않는 이메일입니다.');
      return;
    }

    postSignup(
      {
        email,
        pwd: password,
        name,
        phoneNum: phoneNumber,
        studentNum: studentNumber,
      },
      {
        onError: (error) => {
          alert(error.message);
        },
        onSuccess: () => {
          alert('회원가입에 성공하였습니다.');
          // TODO: 회원가입 완료 페이지 이동;
          navigate('/');
        },
      },
    );
  };

  const onEmailValid = () => {
    setIsFirstValid(true);
    postEmailCheck(email, {
      onError: (error) => {
        setEmailValid(false);
        setErrorMessage(error.message);
      },
      onSuccess: () => {
        setEmailValid(true);
        alert('이메일 중복확인에 성공했습니다.');
      },
    });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    phoneNumber,
    emailValid: !isFirstValid || emailValid,
    onEmailValid,
    setPhoneNumber: (phoneNumber: string) =>
      setPhoneNumber(phoneNumberReplace(phoneNumber)),
    studentNumber,
    setStudentNumber: (studentNumber: string) =>
      setStudentNumber(studentNumberReplace(studentNumber)),
    onSignUp,
    errorMessage,
  };
};
