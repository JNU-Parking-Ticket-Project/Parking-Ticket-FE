export interface TemporarySaveRequestProps {
  name: string;
  studentNumber: string;
  affiliation: string;
  carNumber: string;
  isLightCar: boolean;
  phoneNumber: string;
  selectSectorId: number;
}

export class TemporarySaveRequest {
  name: string;
  studentNum: string;
  affiliation: string;
  carNum: string;
  isLight: boolean;
  phoneNum: string;
  selectSectorId: number;

  constructor({
    name,
    studentNumber,
    affiliation,
    carNumber,
    isLightCar,
    phoneNumber,
    selectSectorId,
  }: TemporarySaveRequestProps) {
    this.name = name;
    this.studentNum = studentNumber;
    this.affiliation = affiliation;
    this.carNum = carNumber;
    this.isLight = isLightCar;
    this.phoneNum = phoneNumber;
    this.selectSectorId = selectSectorId;
  }
}

export interface RegistrationRequestProps extends TemporarySaveRequestProps {
  captchaPendingCode: string;
  captchaAnswer: string;
}

export class RegistrationRequest extends TemporarySaveRequest {
  captchaCode: string;
  captchaAnswer: string;

  constructor({
    name,
    studentNumber,
    affiliation,
    carNumber,
    isLightCar,
    phoneNumber,
    selectSectorId,
    captchaPendingCode,
    captchaAnswer,
  }: RegistrationRequestProps) {
    super({
      name,
      studentNumber,
      affiliation,
      carNumber,
      isLightCar,
      phoneNumber,
      selectSectorId,
    });

    this.captchaCode = captchaPendingCode;
    this.captchaAnswer = captchaAnswer;
  }
}

export class RegistrationResponse {
  message: string;
  constructor({ message }: { message: string }) {
    this.message = message;
  }
}

interface RegistrationResponseProps {
  email: string;
  name: string;
  studentNum: string;
  carNum: string;
  isLight: boolean;
  phoneNum: string;
  sectors: {
    sectorId: number;
    sectorNum: string;
    sectorName: string;
  }[];
  affiliation: string;
  selectSectorId?: number;
}

export class RegistrationOptionsResponse {
  carNumber: string;
  email: string;
  isCompact: boolean;
  studentName: string;
  phoneNumber: string;
  studentNumber: string;
  affiliation: string;
  sector: {
    sectorId: number;
    sectorNum: string;
    sectorName: string;
  }[];
  selectSectorId?: number;
  constructor({
    carNum,
    email,
    isLight,
    name,
    phoneNum,
    sectors,
    studentNum,
    selectSectorId,
    affiliation,
  }: RegistrationResponseProps) {
    this.carNumber = carNum;
    this.email = email;
    this.isCompact = isLight;
    this.studentName = name;
    this.phoneNumber = phoneNum;
    this.sector = sectors;
    this.studentNumber = studentNum;
    this.selectSectorId = selectSectorId;
    this.affiliation = affiliation;
  }
}

export class CaptchaResponse {
  captchaCode: string;
  captchaImageUrl: string;

  constructor({
    captchaCode,
    captchaImageUrl,
  }: {
    captchaCode: string;
    captchaImageUrl: string;
  }) {
    this.captchaCode = captchaCode;
    this.captchaImageUrl = captchaImageUrl;
  }
}
