export const sortByDate: any = (a: { frontMatter: { date: string | number | Date; }; }, b: { frontMatter: { date: string | number | Date; }; })=>{
    return (new Date(b.frontMatter.date) as any) - (new Date(a.frontMatter.date) as any);
}