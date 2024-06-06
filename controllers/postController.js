const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const CustomError = require("../exceptions/customError");
const uniqueSlug = require("../utils/uniqueSlug");

const store = async (req, res, next) => {
  const { title, content, image, published } = req.body;

  if (typeof title !== "string") {
    return next(new CustomError("Title must be a string", 400));
  }
  if (typeof content !== "string") {
    return next(new CustomError("Content must be a string", 400));
  }
  if (typeof image !== "string") {
    return next(new CustomError("Image must be a string", 400));
  }
  if (typeof published !== "boolean") {
    return next(new CustomError("Published must be a boolean", 400));
  }

  const slug = await uniqueSlug(title);

  const data = {
    title,
    slug,
    content,
    image,
    published,
  };

  try {
    console.log(data);
    const post = await prisma.post.create({ data });
    res.status(200).json({
      message: "Post created successfully",
      post,
    });
  } catch (e) {
    return next(new CustomError(e, 500));
  }
};

module.exports = {
  store,
};
