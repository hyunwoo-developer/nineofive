const con = require("../../../modules/mysql");

const todosController = {
  todoUpload: (req, res, next) => {
    const { content } = req.body;

    con.query(
      "INSERT INTO todos (content, checked) VALUES (?, ?);",
      [content, 0],
      (err, result, fields) => {
        if (err) {
          return res.status(500).json({
            message: "todo 생성 실패",
          });
        }

        return res.status(200).json({
          message: "todo 생성 성공",
        });
      }
    );
  },

  todoLoad: (req, res, next) => {
    con.query(`SELECT * FROM todos;`, (err, result, fields) => {
      if (err) {
        res.status(500).json({
          message: "전체 todo 조회 실패",
        });
      }

      res.status(200).json({
        message: "전체 todo 조회 성공",
        data: result,
      });
    });
  },
  todoUpdate: (req, res, next) => {
    const { todosIdx } = req.params;

    const { content, checked } = req.body;
    con.query(
      `UPDATE todos SET content = ?, checked = ? WHERE todosIdx = ?`,
      [content, checked, Number(todosIdx)],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "todo 체크 수정 실패",
          });
        }

        res.status(200).json({
          message: "todo 체크 수정 성공",
        });
      }
    );
  },
  todoDelete: (req, res, next) => {
    const { todosIdx } = req.params;
    console.log(todosIdx);

    con.query(
      `DELETE FROM todos WHERE todosIdx = ?`,
      [Number(todosIdx)],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "todo 삭제 실패",
          });
        }
        res.status(200).json({
          message: "todo 삭제 성공",
        });
      }
    );
  },
};

module.exports = todosController;
