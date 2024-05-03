import { NetGsmConfiguration, SendSmsRequest } from "./types";

export class NetGsmSMSService {
  netGsmConfiguration: NetGsmConfiguration;

  constructor(netGsmConfiguration: NetGsmConfiguration) {
    this.netGsmConfiguration = netGsmConfiguration;
  }

  async sendSMS(request: SendSmsRequest): Promise<string> {
    const formData = new FormData();
    formData.append("usercode", this.netGsmConfiguration.usercode);
    formData.append("password", this.netGsmConfiguration.password);
    formData.append("msgheader", this.netGsmConfiguration.msgheader);
    formData.append("gsmno", request.gsmno);
    formData.append("message", request.message);
    formData.append("dil", request.dil);
    if (request.startdate) {
      formData.append("startdate", request.startdate);
    }
    if (request.stopDate) {
      formData.append("stopDate", request.stopDate);
    }
    if (request.filter) {
      formData.append("filter", request.filter);
    }
    if (request.bayikodu) {
      formData.append("bayikodu", request.bayikodu);
    }
    if (request.appkey) {
      formData.append("appkey", request.appkey);
    }
    try {
      const response = await fetch("https://api.netgsm.com.tr/sms/send/get", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Response not OK");
      }
      const responseData = await response.text();
      return responseData;
    } catch (err) {
      throw err;
    }
  }
}
