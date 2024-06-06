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
    const post = await prisma.post.create({ data });
    res.status(200).json({
      message: "Post created successfully",
      post,
    });
  } catch (e) {
    return next(new CustomError(e.message, 500));
  }
};

const show = async (req, res, next) => {
  const { slug } = req.params;

  try {
    const post = await prisma.post.findUnique({ where: { slug: slug } });

    if (post) {
      res.status(200).json({
        message: "Post found",
        post,
      });
    } else {
      return next(new CustomError("Post not found", 404));
    }
  } catch (e) {
    return next(new CustomError(e.message, 500));
  }
};

const index = async (req, res, next) => {
  const { published, filterString } = req.query;
  const where = {};

  if (published === "true") {
    where.published = true;
  } else if (published === "false") {
    where.published = false;
  }
  if (filterString) {
    where.OR = [
      {
        title: {
          contains: filterString,
        },
      },
      {
        content: {
          contains: filterString,
        },
      },
    ];
  }

  try {
    const posts = await prisma.post.findMany({ where });
    res.status(200).json({
      message: `${posts.length} Posts found`,
      posts,
      where,
    });
  } catch (e) {
    return next(new CustomError(e.message, 500));
  }
};

module.exports = {
  store,
  show,
  index,
};
