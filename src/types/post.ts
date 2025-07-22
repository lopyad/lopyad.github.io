export const postPath: string = "content/blog"

export interface Metadata {
    date: string;
    title: string;
    category: string;
}

export interface Post {
    slug: string;
    contentHtml: string;
    metadata: Metadata;
}

export interface PostPreview {
    slug: string;
    metadata: Metadata;
}

export function isMetadata(obj: object): obj is Metadata{
    if(obj === null || typeof obj !== "object") return false;

    const hasTitle = "title" in obj && typeof obj.title === "string";
    const hasDate = "date" in obj && typeof obj.date === "string";
    const hasCategory = "category" in obj && typeof obj.category === "string";

    return hasTitle && hasDate && hasCategory;
}