import { useState } from 'react';
import { useSignUpMutate } from './react-query/useUser';
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

  const { postSignup } = useSignUpMutate();
  const navigate = useNavigate();

  const onSignUp = () => {
    console.log(isFirstValid, emailValid);
    if (!isFirstValid) {
      alert('중복확인을 해주세요.');
      return;
    }
    if (!emailValid) {
      alert('올바르지 않는 이메일입니다.');
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
          navigate('/');
        },
      },
    );
  };

  const onEmailValid = () => {
    setIsFirstValid(true);
    // TODO: 이메일 검사를 하는 API 호출
    setEmailValid(false);
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
  };
};
