import type { Role } from '../../types/admin';

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
  studentNum: string;
  phoneNum: string;
  role: Role;
  constructor({
    userId,
    name,
    studentNum,
    phoneNum,
    role,
  }: {
    userId: number;
    name: string;
    studentNum: string;
    phoneNum: string;
    role: Role;
  }) {
    this.userId = userId;
    this.name = name;
    this.studentNum = studentNum;
    this.phoneNum = phoneNum;
    this.role = role;
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
export class CheckEmailResponse extends JustMessage {}

export class AdminRoleResponse {
  userId: number;
  role: Role;
  constructor({ userId, role }: { userId: number; role: Role }) {
    this.userId = userId;
    this.role = role;
  }
}
