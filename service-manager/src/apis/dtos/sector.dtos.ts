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
  }: {
    id: number;
    name: string;
    sectorNumber: string;
    sectorCapacity: number;
    reserve: number;
    issueAmount: number;
  }) {
    this.id = id;
    this.name = name;
    this.sectorNumber = sectorNumber;
    this.sectorCapacity = sectorCapacity;
    this.reserve = reserve;
    this.issueAmount = issueAmount;
  }
}
