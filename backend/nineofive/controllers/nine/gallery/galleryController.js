const con = require("../../../modules/mysql");

const galleryController = {
    imgUpload: (req, res, next) => {
        const file = req.file;

        con.query(
            `INSERT INTO gallery (img) VALUES (?);`,
            [file.location],
            (err, result, fields) => {
                if (err) {
                    return res.status(500).json({
                        message: "업로드 실패",
                    });
                }

                res.status(200).json({
                    message: "업로드 성공",
                    data: file.location,
                });
            }
        );
    },

    imgLoad: (req, res, next) => {
        con.query(`SELECT * FROM gallery;`, (err, result, fields) => {
            if (err) {
                return res.status(500).json({
                    message: "전체 이미지 조회 실패",
                });
            }

            res.status(200).json({
                message: "전체 이미지 조회 성공",
                data: result,
            });
        });
    },
};

module.exports = galleryController;
