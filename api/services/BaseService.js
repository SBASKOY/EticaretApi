
class BaseService {
    constructor(model, populate) {
        this.Model = model;

    }
    get(id) {
        if (id) {
            return this.Model.findById(id)
        }
        return this.Model.find({})
    }
    findById = (id) => this.Model.findById(id);

    save = (data) => new this.Model(data).save()

    findWhere = (where) => this.Model.find(where);

    findOne = (where) => this.Model.findOne(where);

    delete = (id) => this.Model.findByIdAndDelete(id);

    updateWithWhere = (where, data) => this.Model.findOneAndUpdate(where, data, { new: true });

    updateWithID = (id, data) => this.Model.findByIdAndUpdate(id, data, { new: true });

}
module.exports = BaseService;