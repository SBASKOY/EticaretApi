
class BaseService {
    constructor(_model) {
        this.Model = _model;
    }
    get(id) {
        if (id) {
            return this.Model.findById(id).populate(basketPopulate);
        }
        return this.Model.find({}).populate(basketPopulate);
    }
    save(data) {
        return new this.Model(data).save()
    }
    findWhere(where) {
        return this.Model.find(where);
    }
    findOne(where) {
        return this.Model.findOne(where);
    }
    delete(id) {
        return this.Model.findByIdAndDelete(id);
    }
    updateWithWhere(where, data) {
        return this.Model.findOneAndUpdate(where, data, { new: true });
    }
    updateWitID (id, data) {
        return this.Model.findByIdAndUpdate(id, data, { new: true });
    }
}