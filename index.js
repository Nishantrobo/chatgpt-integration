import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration({
  organization: "org-3p0DCnDsFNivt5XyczDaSrM7",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  const { messages } = req.body;
  console.log(messages);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "you are designgpt useful in graphics design chatbot",
      },
    //   ...messages,
      {role: "user", content : "hello world"},
    ],
  });

  res.json({
    completion: completion.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
