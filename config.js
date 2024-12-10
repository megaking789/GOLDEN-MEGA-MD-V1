const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubuser content.com/u/106251140?=4",
ALIVE_MSG: process.env.ALIVE_MSG || "hello iam mega md bot iam alive now",
};


                            🍁 │𝙎𝙇 │𝙂𝙊𝙇𝘿𝙀𝙉 𝙈𝙀𝙂𝘼 │𝐌𝐃│𝐕1🍁
