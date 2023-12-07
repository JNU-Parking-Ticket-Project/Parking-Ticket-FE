export const isPhoneNumber = (phoneNumber: string) =>
  !/^01[0-9]{1}-[0-9]{4}-[0-9]{4}$/.test(phoneNumber);

export const isEmail = (email: string) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
export const isStudentNumber = (studentNumber: string) =>
  /^[0-9]{6}$/.test(studentNumber.toString());
