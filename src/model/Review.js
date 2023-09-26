/** @format */

const { model, Schema } = require("mongoose");
const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      require: [true, "Give a rating, it's required."],
    },
    comment: {
      type: String,
      require: [true, "Comment is required."],
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    book: {
      type: Schema.ObjectId,
      ref: "Book",
    },
    publisher: {
      type: Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true, id: true }
);

const Review = model("Review", reviewSchema);
module.exports = Review;
