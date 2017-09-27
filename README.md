<div align="center">

# bandwidth-group-message-webinar

<img src="https://s3.amazonaws.com/bwdemos/BW_Messaging.png"/>

Basic Group Messaging Flow for use with Bandwidth APIs

</div>

## Prerequisites
- Configured Machine with Ngrok/Port Forwarding
  - [Ngrok](https://ngrok.com/)
- [Bandwidth Account](https://catapult.inetwork.com/pages/signup.jsf/?utm_medium=social&utm_source=github&utm_campaign=dtolb&utm_content=_)
- [Node v8.0+](https://nodejs.org/en/)
- [Bandwidth Phone Number](http://dev.bandwidth.com/howto/buytn.html)
- [Account configured for Messaging 2.0 ⚠ coming soon ⚠](http://dev.bandwidth.com/ap-docs/messaging-2/getStarted.html)

## Setup Environment Variables

> [How to setup environment variables](https://www.schrodinger.com/kb/1842)

| Environment Variable     | Description                                                                                                               | Example                |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|:-----------------------|
| `BANDWIDTH_USER_ID`      | [Bandwidth USER Id](http://dev.bandwidth.com/security.html)                                                               | `u-123sdaf9834sd`      |
| `BANDWIDTH_API_TOKEN`    | [Bandwidth API Token](http://dev.bandwidth.com/security.html)                                                             | `t-asdg920358askdf`    |
| `BANDWIDTH_API_SECRET`   | [Bandwidth API Secret](http://dev.bandwidth.com/security.html)                                                            | `asdfkljasd2305jsdlkf` |


👉 👉 You can also set all these in [`config.js`](config.js) 👈 👈

```js
module.exports = {
    creds: {
        userId    : process.env.BANDWIDTH_USER_ID,
        apiToken  : process.env.BANDWIDTH_API_TOKEN,
        apiSecret : process.env.BANDWIDTH_API_SECRET
    }
}
```


## Setup with ngrok

[Ngrok](https://ngrok.com) is an awesome tool that lets you open up local ports to the internet.

Once you have ngrok installed, open a new terminal tab and navigate to it's location on the file system and run:

```bash
./ngrok http 3000
```

You'll see the terminal show you information

![ngrok terminal](https://s3.amazonaws.com/bw-demo/ngrok_terminal.png)

## Run the application

Once you have all your [environment variables](#setup-environment-variables) set.

```bash
npm install
```

```bash
node index.js
```
