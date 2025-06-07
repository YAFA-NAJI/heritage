// server.js 
import express from 'express';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,  // خزّن المفتاح في متغير بيئة
});
const openai = new OpenAIApi(configuration);

app.post('/api/tell-story', async (req, res) => {
  try {
    const prompt = "احكي لي قصة شعبية فلسطينية قصيرة بطريقة مشوقة";
    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });

    const story = completion.data.choices[0].message.content;
    res.json({ story });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'حدث خطأ في جلب القصة' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
