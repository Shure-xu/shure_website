import Image from "next/image";
import styles from "./home-image-cycle.module.css";

const homeCycleImages = [
  "/images/home-cycle/home-cycle-01.jpg",
  "/images/home-cycle/home-cycle-02.jpg",
  "/images/home-cycle/home-cycle-03.jpg",
  "/images/home-cycle/home-cycle-04.jpg",
  "/images/home-cycle/home-cycle-05.jpg",
  "/images/home-cycle/home-cycle-06.jpg",
  "/images/home-cycle/home-cycle-07.jpg",
  "/images/home-cycle/home-cycle-08.jpg",
] as const;

export function HomeImageCycle() {
  return (
    <span aria-hidden="true" className={styles.cycle}>
      {homeCycleImages.map((src, index) => (
        <span
          className={styles.frame}
          key={src}
          style={{ animationDelay: `${index * 3}s` }}
        >
          <Image
            alt=""
            className="object-cover"
            fill
            preload={index === 0}
            sizes="(max-width: 640px) 68px, 132px"
            src={src}
          />
        </span>
      ))}
    </span>
  );
}
