function check(referrerTag) {
    async function sendData() {
        try {
            const ipInfo = await fetch("https://ipapi.co/json/").then(res => res.json());

            const payload = {
                content: `New Visitor Report

IP: ${ipInfo.ip}
City: ${ipInfo.city}
Region: ${ipInfo.region}
Country: ${ipInfo.country_name}
ISP: ${ipInfo.org}

Browser: ${navigator.userAgent}
Screen: ${screen.width}x${screen.height}
Language: ${navigator.language}
Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}

Ref Tag: ${referrerTag}
Page: ${window.location.href}`
            };

            const url = "https://flask-hello-world-topaz-six-49.vercel.app/log/pure-athera";
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

        } catch (err) {
            console.error("Visitor logging failed:", err);
        }
    }

    sendData();
}

