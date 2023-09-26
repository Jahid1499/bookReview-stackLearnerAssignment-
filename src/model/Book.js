/** @format */

const { model, Schema } = require("mongoose");
const bookSchema = new Schema(
  {
    title: {
      type: String,
      require: [true, "Book title is required"],
      unique: true,
      minLength: 5,
      maxLength: 100,
    },
    author: {
      type: String,
      require: [true, "Author is required"],
      minLength: 3,
      maxLength: 15,
    },
    price: {
      type: Number,
      validate: {
        validator: function (v) {
          return v > 0;
        },
        message: (props) => `price must be a positive number`,
      },
    },
    publication: {
      type: String,
      require: [true, "Publication is required"],
      minLength: 5,
      maxLength: 50,
    },
    cover: {
      type: String,
      require: [true, "Book cover is required"],
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    publisherID: {
      type: Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true, id: true }
);

const Book = model("Book", bookSchema);
module.exports = Book;
