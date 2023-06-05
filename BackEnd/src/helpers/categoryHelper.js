const categorySchema = require('../models/category')

module.exports.GetAllCategories = function(){
    return categorySchema.find()
}

module.exports.GetCategoryById = function(id){
   return categorySchema.findById(id)
}

module.exports.SaveCategory = function(category){
    return categorySchema(category).save()   
}

