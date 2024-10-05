import { z, defineCollection } from "astro:content";

function marshallDateTime(val: string): Date {
  const date = new Date(val.replace(" ", "T"));
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }
  return date;
}

const standaloneCollections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform(marshallDateTime),
    lastModified: z.string().transform(marshallDateTime),
  }),
});

const blogCollections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    pubDate: z.string().transform(marshallDateTime),
    lastModified: z.string().transform(marshallDateTime),
    category: z.string(),
  }),
});

const microBlog = defineCollection({
  type: "content",
  schema: null,
});

export const collections = {
  standalones: standaloneCollections,
  blog: blogCollections,
  microblog: microBlog,
};
