var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    // 定义数据类型
    title: String,
    doctor: String,
    language: String,
    country: String,
    summary: String,
    flash: String,
    poster: String,
    year: Number,
    // meta 更新或录入数据的时间记录
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        },
    }
});

// movieSchema.pre 表示每次存储数据之前都先调用这个方法
movieSchema.pre('save', function (next) {
    if (this.isNew) {  // 数据是否是新加的，设置创建时间
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next(); // 流程进行下去
});

// movieSchema 模式的静态方法，模型编译实例化后才会执行
movieSchema.statics = {
    fetch: function (cb) {
        return this
            .find({}) // 取出目前数据库中所有的数据
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb)
    }
}

// 导出movieSchema模式
module.exports = movieSchema;
