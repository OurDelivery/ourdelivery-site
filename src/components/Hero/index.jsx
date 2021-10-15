import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroOverlay,
    HeroP,
    VideoBg
} from './HeroElements'
import {Button} from '../ButtonElements'

const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (

        <HeroContainer id='home'>
            <HeroBg>
                <HeroOverlay>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroOverlay>
            </HeroBg>
            <HeroContent>
                <HeroH1> Matar a Fome Nunca Foi Tão Fácil</HeroH1>
                <HeroP>Adquira para seu restaurante e se junte a nós para alimentarmos o mundo.</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Comece Já {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>


        </HeroContainer>
    )
}

export default Hero
