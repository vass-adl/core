import Channel from './Channel';

export default class Bank {
  private name: string;
  private channelMovil: Channel;
  private channelVirtual: Channel;

  constructor(name: string, channelMovil: Channel, channelVirtual: Channel) {
    this.name = name;
    this.channelMovil = channelMovil;
    this.channelVirtual = channelVirtual;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getChannelMovil(): Channel {
    return this.channelMovil;
  }

  setChannelMovil(channelMovil: Channel) {
    this.channelMovil = channelMovil;
  }

  getChannelVirtual(): Channel {
    return this.channelVirtual;
  }

  setChannelVirtual(channelVirtual: Channel) {
    this.channelVirtual = channelVirtual;
  }
}
