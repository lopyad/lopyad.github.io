export const postPath: string = "content/blog"

export interface Metadata {
    date: string;
    title: string;
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

    return hasTitle && hasDate;
}