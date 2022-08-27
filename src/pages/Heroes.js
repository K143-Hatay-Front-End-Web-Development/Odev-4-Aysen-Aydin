import s from "../features/hero/card/hero.module.scss";
import { useGetHeroesQuery } from "../store/hero-service";
import { useNavigate } from "react-router-dom";

export const Heroes = () => {
  const { data, error, isLoading } = useGetHeroesQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  function navigateToHeroDetail(heroData) {
    console.log(heroData, "heroData");
    navigate(`/hero/${heroData.id}`, { state: heroData });
  }

  return (
    <>
      {data.map((hero) => (
        <div
          key={hero.id}
          className={s.root}
          onClick={() => navigateToHeroDetail(hero)}
        >
          <h1>{hero.name}</h1>
          <img
            src={hero.thumbnail.path + "." + hero.thumbnail.extension}
            alt={hero.name}
          />
        </div>
      ))}
    </>
  );
};
