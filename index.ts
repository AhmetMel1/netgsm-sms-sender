import { NetGsmConfiguration, SendSmsRequest } from "./types";

export class NetGsmSMSService {
  netGsmConfiguration: NetGsmConfiguration;

  constructor(netGsmConfiguration: NetGsmConfiguration) {
    this.netGsmConfiguration = netGsmConfiguration;
  }

  sendSMS(request: SendSmsRequest): void {
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
    fetch("https://api.netgsm.com.tr/sms/send/get", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Something went wrong!! Error code: ", response.status);
          const htmlError: Promise<string> = response.text();
          console.error("HTML Error:", htmlError);
          throw new Error("Response not OK");
        }

        return response.text();
      })
      .then((responseData: string) => {
        console.log("Non-JSON Response:", responseData);
        return responseData;
      })
      .catch((err: Error) => {
        console.error("Error: " + err);
      });
  }
}
