const fetch = require("node-fetch");

async function chat() {
  const response = await fetch("https://www.holmesai.xyz/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      messages: [
        {
          role: "user",
          content: "Hello!"
        }
      ]
    })
  });

  const data = await response.json();
  console.log(data);
}

chat();
