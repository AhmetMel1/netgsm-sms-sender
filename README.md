
# NetGSM SMS Service NPM Package

This package is a Node.js module for sending SMS using NetGSM.

## Installation

You can add the package to your project using npm or yarn.

```bash
npm install netgsm-sms-service
```

or

```bash
yarn add netgsm-sms-service
```

## Usage
```js
import { SMSService, NetGsmConfiguration, SendSmsRequest } from "netgsm-sms-service";

// Define your NetGSM account details
const netGsmConfig: NetGsmConfiguration = {
  usercode: "YOUR_NETGSM_USERCODE",
  password: "YOUR_NETGSM_PASSWORD",
  msgheader: "YOUR_NETGSM_MSGHEADER"
};

// Create an SMS service
const smsService = new NetGsmSMSService(netGsmConfig);

// Create an SMS send request
const smsRequest: SendSmsRequest = {
  gsmno: "RECIPIENT_PHONE_NUMBER",
  message: "YOUR_SMS_MESSAGE",
  dil: "TR" 
};

// Send the SMS
smsService.sendSMS(smsRequest);
```

## API Reference

### SMSService Class

#### Constructor

```js
constructor(netGsmConfiguration: NetGsmConfiguration)
```

Creates an instance of SMSService with the provided NetGSM account details.

#### Methods

```js
sendSMS(request: SendSmsRequest): void
```
Performs the specified SMS send request.


### Interfaces

#### NetGsmConfiguration

```js
interface NetGsmConfiguration {
  usercode: string;
  password: string;
  msgheader: string;
}
```
An interface representing NetGSM account details.


#### SendSmsRequest

```js
interface SendSmsRequest {
  gsmno: string;
  message: string;
  startdate?: string;
  stopDate?: string;
  dil: string;
  filter?: string;
  bayikodu?: string;
  appkey?: string;
}
```

An interface representing an SMS send request.


## License

This project is licensed under the ISC License - see the LICENSE.md file for details.

