import Link from "next/link";
import { useRef, useState } from "react";
import styled from "styled-components";
import { getShadowColor } from "../config/themeConfig";

const PhotoImage = styled.img`
  width: 100%;
  max-height: 10rem;
  border-radius: 10px;
`;

const PhotoDate = styled.div`
  font-size: 0.8rem;
  margin-bottom: 20px;
  padding: 3px 10px;
  background-color: ${({ theme }) => getShadowColor(theme, 0.7, theme.text)};
`;

const PhotoCard = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0
    ${({ theme }) => getShadowColor(theme, 0.7, theme.text)};
  &:hover {
    box-shadow: 0 4px 8px 0
      ${({ theme }) => getShadowColor(theme, 0.6, theme.text)};
  }
`;

const PhotoTitle = styled.h3`
  font-size: 1rem;
`;

const PhotoExcerpt = styled.p`
  font-size: 0.8rem;
  color: grey;
`;

function PhotoContainer({ imageInfo, picIndex, onPicClick }) {
  return (<>
    <PhotoCard>
      <PhotoImage src={imageInfo.frontMatter.image} alt=" " onClick={()=>onPicClick(picIndex)}/>
    </PhotoCard>
    </>
  );
}

export default PhotoContainer;
