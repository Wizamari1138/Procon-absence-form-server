const express = require('express');
const app = express();
const port = 3000;

// ミドルウェア（例: JSONのパース）
app.use(express.json());

// ルート
app.post('/absent', (req, res) => {
  const { name, reason } = req.body;
  res.json({ message: `欠席連絡を受け付けました: ${name}, 理由: ${reason}` });
});

// モジュールとしてエクスポート（Vercelで必要）
module.exports = app;
