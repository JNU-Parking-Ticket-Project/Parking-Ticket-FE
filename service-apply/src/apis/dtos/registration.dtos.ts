export interface RegistrationRequestProps {
  isRegistration: boolean;
  name: string;
  studentNumber: string;
  affiliation: string;
  carNumber: string;
  isLightCar: boolean;
  phoneNumber: string;
  selectSectorId: number;
  captchaPendingCode?: string;
  captchaAnswer?: string;
  email: string;
}

export class RegistrationRequest {
  isRegistration: boolean;
  // requestDto: RegistrationRequestDto;
  name: string;
  studentNum: string;
  affiliation: string;
  carNum: string;
  isLight: boolean;
  phoneNum: string;
  selectSectorId: number;
  captchaPendingCode?: string;
  captchaAnswer?: string;

  constructor({
    isRegistration,
    name,
    studentNumber,
    affiliation,
    carNumber,
    isLightCar,
    phoneNumber,
    selectSectorId,
    captchaPendingCode,
    captchaAnswer,
    email,
  }: RegistrationRequestProps) {
    this.isRegistration = isRegistration;
    this.name = name;
    this.studentNum = studentNumber;
    this.affiliation = affiliation;
    this.carNum = carNumber;
    this.isLight = isLightCar;
    this.phoneNum = phoneNumber;
    this.selectSectorId = selectSectorId;
    this.captchaPendingCode = captchaPendingCode;
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
