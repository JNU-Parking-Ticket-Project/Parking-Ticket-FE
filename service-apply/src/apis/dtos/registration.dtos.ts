export interface RegistrationRequestProps {
  email: string;
  name: string;
  studentNumber: string;
  carNumber: string;
  isLightCar: boolean;
  phoneNumber: string;
  selectSectoId: number;
  isRegistration: boolean;
}

export class RegistrationRequest {
  email: string;
  name: string;
  studentNum: string;
  carNum: string;
  isLight: boolean;
  phoneNum: string;
  selectSectoId: number;
  isRegistration: boolean;
  constructor({
    email,
    name,
    studentNumber,
    carNumber,
    isLightCar,
    phoneNumber,
    selectSectoId,
    isRegistration,
  }: RegistrationRequestProps) {
    this.email = email;
    this.name = name;
    this.studentNum = studentNumber;
    this.carNum = carNumber;
    this.isLight = isLightCar;
    this.phoneNum = phoneNumber;
    this.selectSectoId = selectSectoId;
    this.isRegistration = isRegistration;
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
  affiliation: string;
  carNum: string;
  isLight: boolean;
  phoneNum: string;
  sector: {
    sectorId: number;
    sectorName: string;
    sectorColleges: string;
  }[];
  selectSectoId?: number;
}

export class RegistrationOptionsResponse {
  affiliation: string;
  carNumer: string;
  email: string;
  isLightCar: boolean;
  name: string;
  phoneNumer: string;
  studentNumer: string;
  sector: {
    sectorId: number;
    sectorName: string;
    sectorColleges: string;
  }[];
  selectSectoId?: number;
  constructor({
    affiliation,
    carNum,
    email,
    isLight,
    name,
    phoneNum,
    sector,
    studentNum,
    selectSectoId,
  }: RegistrationResponseProps) {
    this.affiliation = affiliation;
    this.carNumer = carNum;
    this.email = email;
    this.isLightCar = isLight;
    this.name = name;
    this.phoneNumer = phoneNum;
    this.sector = sector;
    this.studentNumer = studentNum;
    this.selectSectoId = selectSectoId;
  }
}
