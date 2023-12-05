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
  carNumber: string;
  email: string;
  isCompact: boolean;
  studentName: string;
  phoneNumber: string;
  studentNumber: string;
  sector: {
    sectorId: number;
    sectorName: string;
    sectorColleges: string;
  }[];
  selectSectoId?: number;
  constructor({
    carNum,
    email,
    isLight,
    name,
    phoneNum,
    sector,
    studentNum,
    selectSectoId,
  }: RegistrationResponseProps) {
    this.carNumber = carNum;
    this.email = email;
    this.isCompact = isLight;
    this.studentName = name;
    this.phoneNumber = phoneNum;
    this.sector = sector;
    this.studentNumber = studentNum;
    this.selectSectoId = selectSectoId;
  }
}
