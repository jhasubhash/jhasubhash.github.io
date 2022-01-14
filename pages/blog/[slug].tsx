import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import hljs from "highlight.js";
import styled from "styled-components";

import "highlight.js/styles/default.css";

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { getShadowColor } from "../../config/themeConfig";

const ShareDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row-reverse;
  gap: 0.7rem;
`;

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code, ["cpp", "javascript"]).value;
  },
});

const PostCardPage = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0
    ${({ theme }) => getShadowColor(theme, 0.7, theme.text)};
  padding: 15px 30px;
  margin-bottom: 30px;
`;

const PostDate = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 3px 10px;
  background-color: ${({ theme }) => getShadowColor(theme, 0.7, theme.text)};
`;

const PostTitle = styled.h3`
  font-size: 1.2rem;
`;

const PostBody = styled.div`
  ul,
  ol {
    font-size: 110%;
    line-height: 2.3;
    font-weight: bold;
    margin: 10px 0;
  }
  &:pre {
    padding: 20px;
    margin: 20px 0;
    line-height: 2.3;
  }
  font-size: 0.9rem;
`;

export default function PostPage({
  frontMatter: { title, date, cover_image },
  slug,
  content,
  url,
}) {
  return (
    <>
      <Link href="/blog">
        <div className="btn btn-back">Back</div>
      </Link>
      <PostCardPage>
        <PostTitle>{title}</PostTitle>
        <PostDate>Posted on {date}</PostDate>
        <img style={{ width: "100%" }} src={cover_image} alt="" />
        <PostBody>
          <div
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
          ></div>
        </PostBody>
        <ShareDiv>
          <EmailShareButton
            children={<EmailIcon size={32} round={true} />}
            url={url}
          />
          <FacebookShareButton
            children={<FacebookIcon size={32} round={true} />}
            url={url}
          />
          <LinkedinShareButton
            children={<LinkedinIcon size={32} round={true} />}
            url={url}
          />
          <TwitterShareButton
            children={<TwitterIcon size={32} round={true} />}
            url={url}
          />
          <WhatsappShareButton
            children={<WhatsappIcon size={32} round={true} />}
            url={url}
          />
        </ShareDiv>
      </PostCardPage>
      <Link href="/blog">
        <div className="btn btn-back">Back</div>
      </Link>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const url = "https://subhashjha.in/blog/" + slug;
  return {
    props: {
      frontMatter,
      slug,
      content,
      url,
    },
  };
}
