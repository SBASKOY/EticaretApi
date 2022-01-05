
const Log = require("../services/Log");
const logService = new Log();
const index = (req, res) => {
    var id = req.params.id;
    logService.get(id).then(response => {
        if (!response) {
            res.status(404).send({
                message: "Log not found"
            });
        }
        res.status(200).send(response);
    })
        .catch(err => res.status(500).send(err));
}
const create=(req,res)=>{
    logService.save(req.body).then(response=>{
        res.status(200).send(response);
    }).catch(err => res.status(500).send(err));
}






module.exports = {
    index,
    create,
}