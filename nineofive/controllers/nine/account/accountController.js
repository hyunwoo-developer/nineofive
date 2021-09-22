const con = require("../../../modules/mysql");

const accuntController = {
  getUser: (req, res) => {
    const sql = "select * from account";
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "회원 조회 실패",
        });
      }
      res.status(200).json({
        message: "회원 조회 성공",
        data: result,
      });
    });
  },
  signupUser: (req, res, next) => {
    const { name, email, password } = req.body;

    // 3개 필수입력 사항
    // 프론트에서 필드에 입력이 안되어 있을겅우에 전송을 못하게 할건지
    // 전송을 하면 서버에서 다시 하라고 할건지
    // 둘 중에 하나를 선택

    con.query(
      `SELECT * FROM account WHERE email = ?;`,
      [email],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "이메일 중복 검사 실패",
          });
        }

        if (result.length == 0) {
          con.query(
            `INSERT INTO account (name, email, password) VALUES (?, ?, ?);`,
            [name, email, password],
            (err, result, fields) => {
              if (err) {
                return res.status(500).json({
                  message: "회원가입 실패",
                });
              }

              res.status(200).json({
                message: "회원가입 완료",
              });
            }
          );
        } else {
          res.status(500).json({
            message: "이미 존재하는 이메일입니다.",
          });
        }
      }
    );
  },

  signinUser: (req, res, next) => {
    const { email, password } = req.body;

    con.query(
      `SELECT * FROM account WHERE email = ? AND password = ?`,
      [email, password],
      (err, result, fields) => {
        if (err) {
          return res.status(500).json({
            message: "로그인 실패",
          });
        }

        if (result.length == 0) {
          res.status(400).json({
            message: "아이디 또는 비밀번호가 다릅니다.",
          });
        } else {
          res.status(200).json({
            message: "로그인 성공",
            data: result,
          });
        }
      }
    );
  },
};

module.exports = accuntController;
