import Link from "next/link";
import Pagination from "next-pagination";
import "next-pagination/dist/index.css";
import Head from "next/head";
import PhotoContainer from "../components/PhotoContainer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";

let page = 1;
let size = 9;
function Gallery({photos}) {

    return (
        <>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        <span style={{ color: "grey", fontSize: "0.8rem" }}>
          <i>
            "A picture is worth a thousand words."
          </i>
        </span>
      </p>
      <div className="posts">
        {photos
          .filter(
            (post, index) => index >= (page - 1) * size && index < page * size
          )
          .map((post, index) => (
            <PhotoContainer imageInfo={photos} key={index} />
          ))}
      </div>
      <Pagination total={photos.length} sizes={[9, 18, 27, 36]} />
      <br />
    </>
    );
}

export default Gallery;


export async function getStaticProps() {
    const files = fs.readdirSync(path.join("photos"));
  
    const photos = files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const markdownWithMeta = fs.readFileSync(
        path.join("photos", fileName),
        "utf-8"
      );
      const { data: frontMatter } = matter(markdownWithMeta);
      return { slug, frontMatter };
    });
    return {
      props: {
        photos: photos.sort(sortByDate),
      },
    };
  }
  