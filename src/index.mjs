import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "fake-api-key",
});

async function doWork() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "Hello, how are you?",
      },
    ],
  });

  console.log(response);
}

doWork().catch((err) => {
  console.error(err);
});
