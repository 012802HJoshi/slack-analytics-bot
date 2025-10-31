import express from "express";
import { configDotenv } from "dotenv";
import { slack_init,sendSlackMessage } from "./Helper/slack.js";

configDotenv({path:`./.env` });

const PORT = process.env.PORT;
const token = process.env.SLACK_BOT_TOKEN;
const channel = process.env.SLACK_CHANNEL_ID;

const app = express();

const slack_web =slack_init(token);

app.get('/message',(req,res)=>{
    const {message} = req.query;
    sendSlackMessage(slack_web,channel,message);
})

app.get("/",(req,res)=>{
 res.send("Slack Analytics Bot");
})

app.listen(PORT, ()=>{
    console.log(`[SERVER]: server listening at port ${PORT}`);
})