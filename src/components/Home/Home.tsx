import MainCard from "./Cards/MainCard";
import MiniCard from "./Cards/MiniCard";

const Home = () => {
  const miniCardData = [
    {
      size: 5,
      data: [
        { cardIcon: "", cardTitle: "All Cases", cardCount: 800, size: 3 },
        { cardIcon: "", cardTitle: "Open Cases", cardCount: 450, size: 3 },
        { cardIcon: "", cardTitle: "Closed Cases", cardCount: 350, size: 3 },
      ],
    },
    {
      size: 4,
      data: [
        { cardIcon: "", cardTitle: "My Open Cases", cardCount: 10, size: 4 },
        { cardIcon: "", cardTitle: "My Closed Cases", cardCount: 50, size: 4 },
      ],
    },
    {
      size: 3,
      data: [
        {
          cardIcon: "",
          cardTitle: "Waiting on Client Cases",
          cardCount: 20,
          size: 8,
        },
      ],
    },
  ];
  return (
    <div className="container py-2">
      
      <div className="row g-2 my-2">
        {miniCardData.map((item) => (
          <div className={`col-${item.size} px-1`}>
            <MiniCard cardData={item.data} />
          </div>
        ))}
      </div>

      <MainCard cardData={miniCardData[0]?.data} />
    </div>
  );
};

export default Home;
