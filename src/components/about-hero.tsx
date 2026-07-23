"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  cubicBezier,
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTime,
  useTransform,
} from "framer-motion";

const cardScrollEase = cubicBezier(0.22, 1, 0.36, 1);

function useCardMotionY(
  scrollY: MotionValue<string>,
  time: MotionValue<number>,
  floatOffset: number,
  duration: number,
) {
  const floatingY = useTransform(time, (currentTime) =>
    Math.sin((currentTime / (duration * 1000)) * Math.PI * 2) * floatOffset,
  );

  return useTransform([scrollY, floatingY], ([scrollValue, floatValue]) =>
    `calc(${scrollValue} + ${floatValue}px)`,
  );
}

const heroCards = [
  {
    id: "open-signal",
    image: "/images/project-open-signal-03.jpg",
    label: "版式 / Open Signal",
    cardClass: "left-[5%] top-[24%] lg:left-[11%] lg:top-[22%]",
    labelClass: "-right-8 -bottom-3 bg-[#c41b30]",
    arrowClass: "left-3 border-r-[#c41b30]",
    floatOffset: -6,
    delay: 0.16,
    duration: 5.8,
  },
  {
    id: "mood-index",
    image: "/images/project-mood-index-04.jpg",
    label: "视觉 / Mood Index",
    cardClass: "right-[5%] top-[19%] lg:right-[12%] lg:top-[31%]",
    labelClass: "-left-8 -bottom-3 bg-[#8054c7]",
    arrowClass: "right-3 border-l-[#8054c7]",
    floatOffset: 9,
    delay: 0.28,
    duration: 5.4,
  },
  {
    id: "hello",
    image: "/images/dynamic-hello-38.jpg",
    label: "动态 / Hello",
    cardClass: "right-[18%] top-[68%] lg:right-[24%] lg:top-[67%]",
    labelClass: "-right-7 -bottom-3 bg-[#168cdb]",
    arrowClass: "left-3 border-r-[#168cdb]",
    floatOffset: -8,
    delay: 0.4,
    duration: 5.1,
  },
  {
    id: "envelope",
    image: "/images/about/about-envelope-card.jpg",
    label: "版式 / Open Signal",
    cardClass: "left-[28%] top-[72%] lg:left-[30%] lg:top-[69%]",
    labelClass: "-left-8 -bottom-3 bg-[#1d8f82]",
    arrowClass: "right-3 border-l-[#1d8f82]",
    floatOffset: 7,
    delay: 0.52,
    duration: 5.7,
  },
] as const;

export function AboutHero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothedScrollProgress = useSpring(scrollYProgress, {
    damping: 22,
    mass: 0.5,
    restDelta: 0.001,
    stiffness: 210,
  });
  const time = useTime();
  const firstCardScrollY = useTransform(
    smoothedScrollProgress,
    [0, 0.4, 1],
    ["0rem", "7.5rem", "7.5rem"],
    { ease: cardScrollEase },
  );
  const secondCardScrollY = useTransform(
    smoothedScrollProgress,
    [0, 0.4, 1],
    ["0rem", "4rem", "4rem"],
    { ease: cardScrollEase },
  );
  const thirdCardScrollY = useTransform(
    smoothedScrollProgress,
    [0, 0.4, 1],
    ["0rem", "-8rem", "-8rem"],
    { ease: cardScrollEase },
  );
  const fourthCardScrollY = useTransform(
    smoothedScrollProgress,
    [0, 0.4, 1],
    ["0rem", "-6rem", "-6rem"],
    { ease: cardScrollEase },
  );
  const cardScrollTransforms = [
    {
      x: useTransform(smoothedScrollProgress, [0, 0.4, 1], ["0vw", "22vw", "22vw"], { ease: cardScrollEase }),
      y: useCardMotionY(
        firstCardScrollY,
        time,
        heroCards[0].floatOffset,
        heroCards[0].duration,
      ),
    },
    {
      x: useTransform(smoothedScrollProgress, [0, 0.4, 1], ["0vw", "-20vw", "-20vw"], { ease: cardScrollEase }),
      y: useCardMotionY(
        secondCardScrollY,
        time,
        heroCards[1].floatOffset,
        heroCards[1].duration,
      ),
    },
    {
      x: useTransform(smoothedScrollProgress, [0, 0.4, 1], ["0vw", "-14vw", "-14vw"], { ease: cardScrollEase }),
      y: useCardMotionY(
        thirdCardScrollY,
        time,
        heroCards[2].floatOffset,
        heroCards[2].duration,
      ),
    },
    {
      x: useTransform(smoothedScrollProgress, [0, 0.4, 1], ["0vw", "11.5vw", "11.5vw"], { ease: cardScrollEase }),
      y: useCardMotionY(
        fourthCardScrollY,
        time,
        heroCards[3].floatOffset,
        heroCards[3].duration,
      ),
    },
  ] as const;

  return (
    <section
      className="relative isolate overflow-hidden bg-ink px-4 pt-32 text-paper lg:pt-40"
      ref={heroRef}
    >
      <div className="relative mx-auto min-h-[54.4rem] max-w-[100rem] lg:min-h-[62.8rem]">
        <div className="absolute left-1/2 top-1/2 z-20 w-[min(90%,54rem)] -translate-x-1/2 -translate-y-1/2">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-center font-taipei text-[clamp(3rem,4.92vw,5.1875rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-white"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#48a4dc]">持续</span>练习，保持开放。
          </motion.h1>
        </div>

        {heroCards.map((card, index) => (
          <motion.div
            aria-hidden="true"
            className={`absolute z-10 w-[5.9rem] sm:w-[7.25rem] lg:w-[8.25rem] ${card.cardClass}`}
            key={card.id}
            style={
              shouldReduceMotion
                ? { scale: 1.2 }
                : { ...cardScrollTransforms[index], scale: 1.2 }
            }
          >
            <motion.figure
              animate={{ opacity: 1 }}
              className="m-0 w-full"
              initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
              transition={{
                opacity: { delay: card.delay, duration: 0.5 },
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[0.8rem] bg-paper/10 shadow-[0_12px_26px_rgba(0,0,0,0.28)]">
                <Image
                  alt=""
                  className="rounded-[0.6rem] object-cover"
                  fill
                  sizes="(min-width: 1024px) 132px, 116px"
                  src={card.image}
                />
              </div>
              <figcaption
                className={`absolute flex h-7 items-center whitespace-nowrap rounded-full px-3 font-montserrat text-[0.625rem] font-medium tracking-[-0.01em] text-white sm:h-8 sm:px-3.5 sm:text-xs ${card.labelClass}`}
              >
                <span
                  className={`absolute top-1/2 h-0 w-0 -translate-y-1/2 border-y-[5px] border-y-transparent ${card.arrowClass}`}
                />
                {card.label}
              </figcaption>
            </motion.figure>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
