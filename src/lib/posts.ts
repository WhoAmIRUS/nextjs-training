import path from "path";
import fs from "fs";

const postsDirectoryPath = path.join(process.cwd(), "public/posts");

export function getPostContent(slug: string) {
    const filePath = `${postsDirectoryPath}/${slug}.md`;
    const fileContent = fs.readFileSync(filePath, "utf8");

    return fileContent;
}