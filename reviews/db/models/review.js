const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const reviewSchema = mongoose.Schema({
  businessId: Number,
  user: {
    userId: Number,
  },
  businessRating: Number,
  dateCreated: Date,
  text: String,
  images: [String],
  reviewRating: {
    useful: Number,
    funny: Number,
    cool: Number,
  },
});

const userSchema = mongoose.Schema({
  userId: { type: Number, unique: true },
  username: String,
  location: String,
  image: String,
  friends: Number,
  reviews: Number,
  photos: Number,
});

reviewSchema.index({
  text: 'text',
});

const businessSchema = mongoose.Schema({
  businessId: { type: Number, unique: true },
  businessName: String,
});

const ReviewModel = mongoose.model('Review', reviewSchema);
const UserModel = mongoose.model('User', userSchema);
const BusinessModel = mongoose.model('Business', businessSchema);

const models = {
  reviews: ReviewModel,
  users: UserModel,
  businesses: BusinessModel,
};

// Database Methods
const insertData = (dbModel, data) => new models[dbModel](data).save();

const retrieveData = (dbModel, query, sortBy) => models[dbModel].find(query).lean().sort(sortBy).exec();

const countData = (dbModel, query) => models[dbModel].count(query).exec();

module.exports.insertData = insertData;
module.exports.retrieveData = retrieveData;
module.exports.countData = countData;
module.exports.models = models;

