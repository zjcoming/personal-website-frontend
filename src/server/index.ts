import express, { Request, Response } from 'express';
import cors from 'cors';
// import dotenv from 'dotenv';
import OSS from 'ali-oss';
const dotenv = require('dotenv')
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OSS({
  region: process.env.OSS_REGION,
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  bucket: process.env.OSS_BUCKET,
});

app.get('/api/images', async (req: Request, res: Response) => {
  try {
    const result = await client.list({
      prefix: 'images/',
      'max-keys': 10
    }, {});  // 修正：传递正确的第二个参数，通常为一个空对象

    const images = result.objects?.map((obj: { name: string }) => ({
      name: obj.name,
      url: client.signatureUrl(obj.name),  // 确保 'name' 是正确的
    })) || [];

    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

app.get('/api/music', async (req: Request, res: Response) => {
  try {
    const musicFile = 'music/background-music.mp3';
    const url = client.signatureUrl(musicFile);
    res.json({ url });
  } catch (error) {
    console.error('Error fetching music:', error);
    res.status(500).json({ error: 'Failed to fetch music' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
