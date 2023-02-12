export class Campaign {
  id: string;
  name: number;
  startDate: Date;
  bid: string; //ts doesnt support float data type;
  status: Status;
  views: number;
  clicks: number;
  installs: number;
}

enum Status {
  Live = "Live",
  Stopped = "Stopped",
  Pending = "Pending"
}
