const express = require('express');
const app = express();
const port = 3001;  // Reactのデフォルトポート3000と異なる番号を使用
const cors = require('cors');
app.use(cors());


// JSON形式のリクエストボディを解析するためのミドルウェア
app.use(express.json());

app.post('/absence', (req, res) => {
  console.log('受け取ったデータ:', req.body);
  // ここでデータの保存や処理を行うことができます（例：データベースに保存など）
  res.status(200).json({ message: '欠席連絡を受け取りました！' });
});

app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました`);
});
