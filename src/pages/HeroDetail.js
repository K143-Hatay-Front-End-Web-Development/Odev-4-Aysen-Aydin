import { useLocation } from "react-router-dom";
import { useLazyGetHeroQuery } from "../store/hero-service";
import { useEffect } from "react";

export const HeroDetail = () => {
  const [getHero] = useLazyGetHeroQuery();
  const { state: heroData = null } = useLocation();
  console.log(heroData, "heroData");

  useEffect(() => {
    if (heroData !== null) return;
    getHero({ id: heroData?.id })
      .unwrap()
      .then((res) => {
        console.log(res);
      });
  }, [getHero, heroData]);

  return (
    <div>
      <img
        width={200}
        src={heroData?.thumbnail.path + "." + heroData?.thumbnail.extension}
        alt={heroData?.name}
      />
      <h1>{heroData.name}</h1>
      <div>{heroData.description}</div>
      <div>
        Comics:
        {heroData.comics.items.slice(0, 10).map((comic) => (
          <div>{comic.name}</div>
        ))}
      </div>
    </div>
  );
};
