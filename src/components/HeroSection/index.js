import React, { useState } from 'react';
import Video from '../../videos/slow-rain.mp4';
import {Button} from '../ButtonElements';
import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='/slow-rain/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Rino Longo Massage</HeroH1>
                <HeroP>
                    Sign up for a massage today and
                     receive $50 in credit towards 
                     your next massage.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="false"
                        dark="true"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact={'true'} 
                        offset={-80}
                     >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
