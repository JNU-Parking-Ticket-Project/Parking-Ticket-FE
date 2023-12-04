import { useReducer } from 'react';
import { ApplyFormInput } from '../functions/validator';
import {
  phoneNumberReplace,
  studentNumberReplace,
} from '../functions/replacer';
import { useApplyMutate } from './react-query/useApply';
import { useNavigate } from 'react-router-dom';

type AppFormInputAction =
  | {
      type: keyof ApplyFormInput;
      payload: ApplyFormInput[keyof ApplyFormInput];
    }
  | {
      type: 'reset';
      payload: null;
    };

const applyFormReducer = (
  state: ApplyFormInput,
  action: AppFormInputAction,
): ApplyFormInput => {
  switch (action.type) {
    case 'phoneNumber':
      return {
        ...state,
        phoneNumber: phoneNumberReplace(action.payload.toString()),
      };
    case 'studentNumber':
      return {
        ...state,
        studentNumber: studentNumberReplace(action.payload.toString()),
      };
    case 'reset':
      return {
        ...state,
        ...initValue,
      };
    case 'email':
    case 'studentName':
    case 'section':
    case 'carNumber':
    case 'isCompact':
      return {
        ...state,
        [action.type]: action.payload,
      };
    default:
      return state;
  }
};

const initValue = {
  phoneNumber: '',
  studentNumber: '',
  email: '',
  studentName: '',
  section: 0,
  carNumber: '',
  isCompact: false,
};

export const useApplyForm = () => {
  const [state, dispatch] = useReducer(applyFormReducer, initValue);
  const { postRegistration } = useApplyMutate();
  const navigate = useNavigate();

  const onSave = ({ isRegistration }: { isRegistration: boolean }) => {
    postRegistration(
      {
        isRegistration: isRegistration,
        carNum: state.carNumber,
        email: state.email,
        name: state.studentName,
        phoneNum: state.phoneNumber,
        selectSectoId: state.section,
        studentNum: state.studentNumber,
        isLight: state.isCompact,
      },
      {
        onError: (error) => {
          alert(error.message);
          throw new Error(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          dispatch({ type: 'reset', payload: null });
          alert(data.message);
          navigate('/');
        },
      },
    );
  };

  return { state, dispatch, onSave };
};
