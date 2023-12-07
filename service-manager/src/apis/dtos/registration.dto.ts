interface Registration {
  id: number;
  name: string;
  email: string;
  phoneNum: string;
  studentNum: string;
  isLigth: boolean;
  carNum: string;
  affiliation: string;
  sectorName: string;
}

export class RegistrationRequest {
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
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phoneNumber = data.phoneNum;
    this.studentNumber = data.studentNum;
    this.isCompact = data.isLigth;
    this.carNumber = data.carNum;
    this.affiliation = data.affiliation;
    this.sectorName = data.sectorName;
  }
}
