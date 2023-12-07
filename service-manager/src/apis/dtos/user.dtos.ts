export class UserToken {
  accessToken: string;
  refreshToken: string;
  constructor({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}

export class Council {
  userId: number;
  name: string;
  studentNumber: string;
  phoneNumber: string;
  constructor({
    userId,
    name,
    studentNum,
    phoneNum,
  }: {
    userId: number;
    name: string;
    studentNum: string;
    phoneNum: string;
  }) {
    this.userId = userId;
    this.name = name;
    this.studentNumber = studentNum;
    this.phoneNumber = phoneNum;
  }
}

class JustMessage {
  message: string;
  constructor({ message }: { message: string }) {
    this.message = message;
  }
}

export class PasswordFind extends JustMessage {}

export class PasswordReset {
  email: string;
  constructor({ email }: { email: string }) {
    this.email = email;
  }
}

export class UserSignUpResponse extends JustMessage {}
