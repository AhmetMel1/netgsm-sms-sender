export interface NetGsmConfiguration {
  usercode: string;
  password: string;
  msgheader: string;
}

export interface SendSmsRequest {
  gsmno: string;
  message: string;
  startdate?: string;
  stopDate?: string;
  dil: string;
  filter?: string;
  bayikodu?: string;
  appkey?: string;
}
