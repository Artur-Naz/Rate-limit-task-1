module.exports = (req, res, next) => {
    if(req.headers['authorization'] !== 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoxLCJmaXJzdE5hbWUiOiJKb2huI'){
        res.status(401);
        return res.json({
            code: 401,
            message : 'UnAuthorized'
        });
    }
    return next()
}