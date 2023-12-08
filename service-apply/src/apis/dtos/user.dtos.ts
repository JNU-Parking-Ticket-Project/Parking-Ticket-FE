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

export class PasswordFind {
  message: string;
  constructor({ message }: { message: string }) {
    this.message = message;
  }
}

export class PasswordReset {
  email: string;
  constructor({ email }: { email: string }) {
    this.email = email;
  }
}
