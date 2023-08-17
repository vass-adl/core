import AnalystVASS from './analyst/AnalystVASS';

export default class Incident {
  private urlTicket: string;
  private originAdl: boolean;
  private urlPosmorten: string;
  private analystVASS: AnalystVASS;

  constructor(
    urlTicket: string,
    originAdl: boolean,
    urlPosmorten: string,
    analystVASS: AnalystVASS
  ) {
    this.urlTicket = urlTicket;
    this.originAdl = originAdl;
    this.urlPosmorten = urlPosmorten;
    this.analystVASS = analystVASS;
  }

  getUrlTicket(): string {
    return this.urlTicket;
  }

  setUrlTicket(urlTicket: string) {
    this.urlTicket = urlTicket;
  }

  isOriginAdl(): boolean {
    return this.originAdl;
  }

  setOriginAdl(originAdl: boolean) {
    this.originAdl = originAdl;
  }

  getUrlPosmorten(): string {
    return this.urlPosmorten;
  }

  setUrlPosmorten(urlPosmorten: string) {
    this.urlPosmorten = urlPosmorten;
  }

  getAnalystVASS(): AnalystVASS {
    return this.analystVASS;
  }

  setAnalystVASS(analystVASS: AnalystVASS) {
    this.analystVASS = analystVASS;
  }
}
