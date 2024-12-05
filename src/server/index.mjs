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
    // 请求参数
    const prefix = 'girlfriend/girlfriend/';
    const maxKeys = 100; // 加大获取对象的数量上限以增加随机挑选的范围

    // 列出对象
    const result = await client.list({ prefix, 'max-keys': maxKeys }, {});

    // 检查对象列表
    if (!result.objects || !Array.isArray(result.objects)) {
      console.warn('No objects found or objects is not an array.');
      return res.json([]); // 返回空数组
    }

    // 过滤图片文件
    const imageUrls = result.objects
      .filter((obj) => /\.(jpg|jpeg|png|gif)$/i.test(obj.name)) // 筛选图片文件
      .map((obj) => ({
        name: obj.name,
        url: client.signatureUrl(obj.name),
      }));

    // 如果没有可用图片，返回空数组
    if (imageUrls.length === 0) {
      console.warn('No valid image files found.');
      return res.json([]);
    }

    // 随机挑选3张图片
    const randomImages = [];
    const imageCount = Math.min(3, imageUrls.length); // 确保不会超过可用图片数量

    while (randomImages.length < imageCount) {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const randomImage = imageUrls[randomIndex];

      // 确保不会重复选择同一图片
      if (!randomImages.includes(randomImage)) {
        randomImages.push(randomImage);
      }
    }

    // 返回随机挑选的图片
    res.json(randomImages);
    console.log(`/api/images response size: ${randomImages.length}`); // 打印返回图片数量
  } catch (error) {
    // 错误处理
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