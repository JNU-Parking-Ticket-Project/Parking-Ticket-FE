export class Sector {
  id: number;
  name: string;
  sectorNumber: string;
  sectorCapacity: number;
  reserve: number;
  issueAmount: number;
  constructor({
    id,
    issueAmount,
    name,
    reserve,
    sectorCapacity,
    sectorNumber,
  }: Sector) {
    this.id = id;
    this.name = name;
    this.sectorNumber = sectorNumber;
    this.sectorCapacity = sectorCapacity;
    this.reserve = reserve;
    this.issueAmount = issueAmount;
  }
}

class MessageResponse {
  message: string;
  constructor({ message }: MessageResponse) {
    this.message = message;
  }
}

export class PutSectorResponse extends MessageResponse {}
export class PostSectorResponse extends MessageResponse {}
export class DeleteSectorResponse extends MessageResponse {}
export class PostSettingsResponse extends MessageResponse {}
export class PutSettingsResponse extends MessageResponse {}
