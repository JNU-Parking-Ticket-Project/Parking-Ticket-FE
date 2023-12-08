interface Registration {
  affiliation: string;
  sectorName: string;
  carNum: string;
  email: string;
  isLight: boolean;
  name: string;
  phoneNum: string;
  registrationId: number;
  studentNum: string;
}

export class RegistrationResponse {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  studentNumber: string;
  isCompact: boolean;
  carNumber: string;
  affiliation: string;
  sectorName: string;

  constructor(data: Registration) {
    this.id = data.registrationId;
    this.name = data.name;
    this.email = data.email;
    this.phoneNumber = data.phoneNum;
    this.studentNumber = data.studentNum;
    this.isCompact = data.isLight;
    this.carNumber = data.carNum;
    this.affiliation = data.affiliation;
    this.sectorName = data.sectorName;
  }
}
