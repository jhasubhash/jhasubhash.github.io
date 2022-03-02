import Link from "next/link";
import Pagination from "next-pagination";
import "next-pagination/dist/index.css";
import Head from "next/head";
import PhotoContainer from "../components/PhotoContainer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useState } from "react";

import { isMobile } from 'react-device-detect';


import styled from "styled-components";

const PhotoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const SliderContainer = styled.div`
width:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
backdrop-filter: brightness(0.4);
align-items: center;
justify-content: center;
display:flex;
`


let page = 1;
let size = 9;
function Gallery({photos}) {
  const [picClicked, setPicClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onPicClicked = (index) => {
    setSelectedIndex(index);
    setPicClicked(true);
  }

  const onPicClose = (event) => {
    if(event.target.id=="container"){
      setSelectedIndex(0);
      setPicClicked(false);
    }
  }

    return (
        <>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      {
          !isMobile && picClicked &&
          <SliderContainer onClick={onPicClose} id={'container'}>
          <div style={{width:'60vw'}}>
          <AwesomeSlider selected={selectedIndex}>
            {photos.map((photo, index) => (
              <div key={index}>
                <PhotoImage src={photo.frontMatter.image}/>
              </div>
            ))}
          </AwesomeSlider>
          </div>
          </SliderContainer>
        }
        {  (isMobile || !picClicked) &&
          <>
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
                (photo, index) => index >= (page - 1) * size && index < page * size
              )
              .map((photo, index) => (
                <PhotoContainer imageInfo={photo} key={index} picIndex={index} onPicClick={onPicClicked}/>
              ))}
          </div>
          <Pagination total={photos.length} sizes={[9, 18, 27, 36]} />
          </>
        }
      </div>
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
  