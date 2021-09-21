const con = require("../../../modules/mysql");

const boardController = {
    postUpload: (req, res, next) => {
        const { title, content, writer, writeTime } = req.body;

        con.query(
            `INSERT INTO board (title, content, writer, writeTime) VALUES (?, ?, ?, ?)`,
            [title, content, Number(writer), new Date()],
            (err, result, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: "업로드 실패",
                    });
                }

                res.status(200).json({
                    message: "업로드 성공",
                });
            }
        );
    },

    postLoad: (req, res, next) => {
        const { idx } = req.params;

        if (Number(idx)) {
            con.query(
                `SELECT * FROM board WHERE boardIdx = ?`,
                [Number(idx)],
                (err, result, fields) => {
                    if (err) {
                        return res.status(500).json({
                            message: "해당 게시글 조회 실패",
                        });
                    }

                    res.status(200).json({
                        message: "헤당 게시글 조회 성공",
                        data: result,
                    });
                }
            );
        } else {
            con.query(`SELECT * FROM board`, (err, result, fields) => {
                if (err) {
                    res.status(500).json({
                        message: "전체 게시글 조회 실패",
                    });
                }

                res.status(200).json({
                    message: "전체 게시글 조회 성공",
                    data: result,
                });
            });
        }
        con.query;
    },

    postDelete: (req, res, next) => {
        console.log("aaa");
        const { idx } = req.params;
        console.log(idx);
        con.query(
            `DELETE FROM board WHERE boardIdx = ?`,
            [Number(idx)],
            (err, result, fields) => {
                if (err) {
                    res.status(500).json({
                        message: "헤당 게시글 삭제 실패",
                    });
                }

                res.status(200).json({
                    message: "해당 게시글 삭제 성공",
                    data: result,
                });
            }
        );
    },
};

module.exports = boardController;
