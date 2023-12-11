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

export interface RegistrationRequestDto {
  name: string;
  studentNumber: string;
  affiliation: string;
  carNum: string;
  isLight: boolean;
  phoneNum: string;
  selectSectorId: number;
  captchaPendingCode?: string;
  captchaAnswer?: string;
}

export class RegistrationRequest {
  isRegistration: boolean;
  requestDto: RegistrationRequestDto;
  email: string;
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
    this.requestDto = {
      name: name,
      studentNumber: studentNumber,
      affiliation: affiliation,
      carNum: carNumber,
      isLight: isLightCar,
      phoneNum: phoneNumber,
      selectSectorId: selectSectorId,
      captchaPendingCode: captchaPendingCode,
      captchaAnswer: captchaAnswer,
    };
    this.email = email;
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
