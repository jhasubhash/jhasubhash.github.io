import '../css/App.css';
import '../css/Photos.css';
import * as InstagramFeed from '../third-party/InstagramFeed';
import React, {useRef, useEffect} from 'react';

/*
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}*/

export const Photos = () => {
    const picListRef = useRef(null);
    /*const forceUpdate = useForceUpdate();
    const callback = () => {
        forceUpdate();
    }*/

    useEffect(() => {
        (function(){
            new InstagramFeed({
                'tag': "pseudo_coder333",
                'container': picListRef.current,
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'display_captions': false,
                'callback': null,
                'styling': false,
                'items': 24,
                'items_per_row': 24,
                'margin': 1,
                'lazy_load': true,
                'on_error': console.error
            });
        })()
    }, []);
    return (
        <div>
        <div className="picBlock" ref={picListRef}>
        <div className="loader">Loading...</div>
        </div>
        </div>
    )
}