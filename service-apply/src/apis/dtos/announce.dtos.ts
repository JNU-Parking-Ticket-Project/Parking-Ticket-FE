export interface announce {
  announceId: number;
  announceTitle: string;
  announceCreatedAt: string;
}

export class AllAnnounce {
  announces: announce[];
  lastPage: number;
  nextPage: number;
  constructor({
    announces,
    lastPage,
    nextPage,
  }: {
    announces: announce[];
    lastPage: number;
    nextPage: number;
  }) {
    this.announces = announces;
    this.lastPage = lastPage;
    this.nextPage = nextPage;
  }
}

export class Announce {
  announceId: number;
  announceTitle: string;
  announceContent: string;
  announceCreatedAt: string;
  imageUrls: string[];
  constructor({
    announceId,
    announceTitle,
    announceContent,
    announceCreatedAt,
    imageUrls,
  }: {
    announceId: number;
    announceTitle: string;
    announceContent: string;
    announceCreatedAt: string;
    imageUrls: string[];
  }) {
    this.announceId = announceId;
    this.announceTitle = announceTitle;
    this.announceContent = announceContent;
    this.announceCreatedAt = announceCreatedAt;
    this.imageUrls = imageUrls;
  }
}

export class LastAnnounce {
  announceId: number;
  announceTitle: string;
  constructor({
    announceId,
    announceTitle,
  }: {
    announceId: number;
    announceTitle: string;
  }) {
    this.announceId = announceId;
    this.announceTitle = announceTitle;
  }
}
