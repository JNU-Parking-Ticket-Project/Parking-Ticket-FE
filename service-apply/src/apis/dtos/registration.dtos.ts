export interface RegistrationEventIdResponse {
  eventId: number;
}

export interface TemporarySaveRequestProps extends RegistrationEventIdResponse {
  name: string;
  studentNumber: string;
  affiliation: string;
  department: string;
  carNumber: string;
  isLightCar: boolean;
  phoneNumber: string;
  selectSectorId: number;
}

export class TemporarySaveRequest {
  name: string;
  studentNum: string;
  affiliation: string;
  department: string;
  carNum: string;
  isLight: boolean;
  phoneNum: string;
  selectSectorId: number;
  eventId: number;

  constructor({
    name,
    studentNumber,
    affiliation,
    department,
    carNumber,
    isLightCar,
    phoneNumber,
    selectSectorId,
    eventId,
  }: TemporarySaveRequestProps) {
    this.name = name;
    this.studentNum = studentNumber;
    this.affiliation = affiliation;
    this.department = department;
    this.carNum = carNumber;
    this.isLight = isLightCar;
    this.phoneNum = phoneNumber;
    this.selectSectorId = selectSectorId;
    this.eventId = eventId;
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
    department,
    carNumber,
    isLightCar,
    phoneNumber,
    selectSectorId,
    captchaPendingCode,
    captchaAnswer,
    eventId,
  }: RegistrationRequestProps) {
    super({
      name,
      studentNumber,
      affiliation,
      department,
      carNumber,
      isLightCar,
      phoneNumber,
      selectSectorId,
      eventId,
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
  department: string;
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
  department: string;
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
    department,
  }: RegistrationResponseProps) {
    this.carNumber = carNum || '';
    this.email = email || '';
    this.isCompact = isLight;
    this.studentName = name || '';
    this.phoneNumber = phoneNum || '';
    this.sector = sectors;
    this.studentNumber = studentNum || '';
    this.selectSectorId = selectSectorId;
    this.affiliation = affiliation || '';
    this.department = department || '';
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
