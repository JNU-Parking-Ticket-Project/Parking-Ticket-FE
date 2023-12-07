export interface RegistrationRequestProps {
  email: string;
  name: string;
  studentNumber: string;
  carNumber: string;
  isLightCar: boolean;
  phoneNumber: string;
  selectSectorId: number;
  isRegistration: boolean;
}

export class RegistrationRequest {
  name: string;
  studentNum: string;
  carNum: string;
  isLight: boolean;
  phoneNum: string;
  selectSectorId: number;
  isRegistration: boolean;
  constructor({
    name,
    studentNumber,
    carNumber,
    isLightCar,
    phoneNumber,
    selectSectorId,
    isRegistration,
  }: RegistrationRequestProps) {
    this.name = name;
    this.studentNum = studentNumber;
    this.carNum = carNumber;
    this.isLight = isLightCar;
    this.phoneNum = phoneNumber;
    this.selectSectorId = selectSectorId;
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
    sectorName: string;
    sectorColleges: string;
  }[];
  selectSectorId?: number;
  constructor({
    carNum,
    email,
    isLight,
    name,
    phoneNum,
    sector,
    studentNum,
    selectSectorId,
    affiliation,
  }: RegistrationResponseProps) {
    this.carNumber = carNum;
    this.email = email;
    this.isCompact = isLight;
    this.studentName = name;
    this.phoneNumber = phoneNum;
    this.sector = sector;
    this.studentNumber = studentNum;
    this.selectSectorId = selectSectorId;
    this.affiliation = affiliation;
  }
}
