const fetch = require("node-fetch");

const COOKIE = process.env.COOKIE;

async function sign() {
    try {
        const res = await fetch("https://www.super-i.cn/user/userSign.php", {
            method: "GET",
            headers: {
                "Cookie": COOKIE,
                "User-Agent": "Mozilla/5.0",
                "Referer": "https://www.super-i.cn/"
            }
        });

        const data = await res.json();
        console.log("签到结果:", data);
    } catch (err) {
        console.log("错误:", err);
    }
}

sign();
