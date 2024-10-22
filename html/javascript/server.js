const express = require("express");
const mysql = require("mysql"); // 데이터베이스를 사용할 경우
const cors = require("cors"); // CORS 패키지 불러오기
const app = express();

app.use(cors()); // CORS 미들웨어 사용

const connection = mysql.createConnection({
  host: "localhost", // 데이터베이스 호스트
  user: "root",
  password: "Tjmj367v^^",
  database: "mart"
});

app.get("/getData", (req, res) => {
  connection.query("SELECT * FROM size", (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results); // 결과를 JSON으로 응답
  });
});

// PORT 설정
const PORT = process.env.PORT || 5400;

// 서버를 특정 IP 주소와 포트로 실행
const HOST = "127.0.0.1"; // 모든 인터페이스에서 접근 가능 (또는 원하는 IP 주소)
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
