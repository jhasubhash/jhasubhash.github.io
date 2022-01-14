import Link from "next/link";
import styled from "styled-components";
import { getShadowColor } from "../config/themeConfig";

const PostImage = styled.img`
  width: 100%;
  max-height: 10rem;
  border-radius: 10px;
`;

const PostDate = styled.div`
  font-size: 0.8rem;
  margin-bottom: 20px;
  padding: 3px 10px;
  background-color: ${({ theme }) => getShadowColor(theme, 0.7, theme.text)};
`;

const PostCard = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0
    ${({ theme }) => getShadowColor(theme, 0.7, theme.text)};
`;

const PostTitle = styled.h3`
  font-size: 1rem;
`;

const PostExcerpt = styled.p`
  font-size: 0.8rem;
  color: grey;
`;

const MoreBtn = styled.a`
  font-size: 0.7rem;
`;

function Post({ post }) {
  return (
    <PostCard>
      <PostImage src={post.frontMatter.cover_image} alt=" " />
      <PostDate>Posted on {post.frontMatter.date}</PostDate>
      <PostTitle>{post.frontMatter.title}</PostTitle>
      <PostExcerpt>{post.frontMatter.excerpt}</PostExcerpt>
      <Link href={`/blog/${post.slug}`}>
        <MoreBtn className="btn">Read More</MoreBtn>
      </Link>
    </PostCard>
  );
}

export default Post;
