import React, { useState, useRef, useEffect, Fragment } from 'react'

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './TimeLineStyles'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { TimeLineData } from '../../constants/constants'

const TOTAL_CAROUSEL_COUNT = TimeLineData.length

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef()

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id='about'>
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        I am fond to combine science and technology using bioinformatics analysis.
      </SectionText>
      <CarouselContainer ref={carouselRef}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            ></CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
    </Section>
  )
}

export default Timeline
