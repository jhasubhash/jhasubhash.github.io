import * as PIXI from 'pixi.js'
import { Graphics, Stage, Sprite, withFilters, Container } from '@inlet/react-pixi';
import profilePic from '../assets/profile400.jpg';
import profileDepthMap from '../assets/profile-depth400.jpg';
import React, { useCallback }  from 'react';
import { isMobileOnly } from "react-device-detect";

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

let gWidth = isMobileOnly ? 150 : 200;
let gHeight = isMobileOnly ? 150 : 200;

const texture = PIXI.Sprite.from(profilePic).texture;
const ProfilePic = ({ config }) => {
    const displacementSpriteRef = React.useRef();
    const mask = React.useRef();
    const [renderFilter, setRenderFilter] = React.useState(false);

    React.useEffect(() => {
        displacementSpriteRef.current.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        setRenderFilter(true);
    }, []);

    const draw = useCallback((g) => {
        g.clear();
        g.lineStyle ( 2 , 0x000000,  1);
        g.beginFill(0x000000);
        g.drawCircle(gWidth/2, gWidth/2, gWidth/2);
        g.endFill();
      }, []);

    return (
        <>
        <Sprite 
        image={profileDepthMap}
        ref={displacementSpriteRef} width={gWidth} height={gHeight}/>
        {renderFilter && (
            <Filters displacement = {{ construct: [displacementSpriteRef.current],
                scale: { x: config.x, y: config.y }}}>
                <Sprite texture={texture} width={gWidth} height={gHeight} mask= {mask.current}/>
            </Filters>
        )}
        <Graphics
            preventRedraw={true}
            draw={draw}
            ref={mask}
        />
        </>
    );
}

export const Profile = () => {

    const [displacementConfig, setDisplacementConfig] = React.useState(
        config.displacement
    );
    let shift = isMobileOnly ? 120 : 200;
    window.onpointermove = function(e){
        setDisplacementConfig((config) => ({ ...config, x: (window.innerWidth/2 - e.clientX)/shift }));
        setDisplacementConfig((config) => ({ ...config, y: (window.innerHeight/2 - e.clientY)/shift }));
    }

    return (
        <Stage width={gWidth} height={gHeight} options={{ transparent: true, antialias: true}}>
            <ProfilePic config={displacementConfig}/>
        </Stage>
    );
}