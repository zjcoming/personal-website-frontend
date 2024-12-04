import express from 'express';
import cors from 'cors';
import OSS from 'ali-oss';
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

// 初始化 Express 应用
const app = express();
app.use(cors());
app.use(express.json());

// 配置 OSS 客户端
const client = new OSS({
  region: process.env.OSS_REGION,
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  bucket: process.env.OSS_BUCKET,
});


// API 路由：获取图片列表
app.get('/api/images', async (req, res) => {
  console.log('Received request for images');
  try {
    const result = await client.list(
      { prefix: 'girlfriend/girlfriend/', 'max-keys': 5 },
      {}
    );
    const images =
      result.objects?.map((obj) => ({
        name: obj.name,
        url: client.signatureUrl(obj.name),
      })) || [];

    res.json(images);
    console.log("/api/images response size: " + images.length);  // 打印图片数
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});


// API 路由：获取音乐文件链接
app.get('/api/music', async (req, res) => {
  try {
    const musicFile = 'girlfriend/music/because of you.mp3';
    const url = client.signatureUrl(musicFile);
    res.json({ url });
    console.log("/api/music response: "); // Log the number of images sent in the response

  } catch (error) {
    console.error('Error fetching music:', error);
    res.status(500).json({ error: 'Failed to fetch music' });
  }
});

// 启动服务器
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});