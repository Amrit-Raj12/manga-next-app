export const searchChapter = (chapters: any, searchTerm: string) => {
    const filteredChapters = chapters.filter((chapter: any) => chapter.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return filteredChapters;
}