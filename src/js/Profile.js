import * as PIXI from 'pixi.js'
import { Graphics, Stage, Sprite, withFilters, Container, applyDefaultProps } from '@inlet/react-pixi';
import profilePic from '../assets/profile400.jpg';
import profileDepthMap from '../assets/profile-depth400.jpg';
import React, { useCallback }  from 'react';
import { isMobileOnly } from "react-device-detect";
import '../css/Profile.css';

const config = {
    displacement: {
      x: 0,
      y: 0
    }
};
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
PIXI.settings.RESOLUTION = 4;
PIXI.settings.FILTER_RESOLUTION = 4;

const Filters = withFilters(Container, {
    displacement: PIXI.filters.DisplacementFilter
});

const texture = PIXI.Sprite.from(profilePic).texture;
const ProfilePic = ({ config, width, height }) => {
    const displacementSpriteRef = React.useRef();
    const mask = React.useRef();
    const [renderFilter, setRenderFilter] = React.useState(false);

    React.useEffect(() => {
        displacementSpriteRef.current.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        setRenderFilter(true);
    }, []);

    return (
        <>
        <Sprite 
        image={profileDepthMap}
        ref={displacementSpriteRef} width={width} height={height}/>
        {renderFilter && (
            <Filters displacement = {{ construct: [displacementSpriteRef.current],
                scale: { x: config.x, y: config.y }}}>
                <Sprite texture={texture} width={width} height={height}/>
            </Filters>
        )}
        </>
    );
}

export const Profile = (props) => {

    const [displacementConfig, setDisplacementConfig] = React.useState(
        config.displacement
    );
    let shift = isMobileOnly ? 120 : 200;
    window.onpointermove = function(e){
        setDisplacementConfig((config) => ({ ...config, x: (window.innerWidth/2 - e.clientX)/shift }));
        setDisplacementConfig((config) => ({ ...config, y: (window.innerHeight/2 - e.clientY)/shift }));
    }

    return (
        <Stage width={props.width} height={props.height} options={{ transparent: true, antialias: true}}>
            <ProfilePic config={displacementConfig} width={props.width} height={props.height}/>
        </Stage>
    );
}