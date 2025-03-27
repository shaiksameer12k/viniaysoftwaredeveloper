import { Card } from "react-bootstrap";
import "./MiniCard.css";

type mini_card_data_obj = {
  cardIcon: string;
  cardTitle: string;
  cardCount: number;
  size: number;
};

type mini_card_data = {
  cardData: mini_card_data_obj[];
};

const MiniCard = ({ cardData }: mini_card_data) => {
  console.log("cardData", cardData);
  return (
    <Card className="mini_card">
      <Card.Body className="mini_card_body">
        <div className="container">
          <div className="row">
            <div className="col-3 p-0  d-flex justify-content-center">
              <div className="mini_card_icon">{cardData[0]?.cardIcon} H</div>
            </div>
            {cardData?.map((item) => (
              <div
                className={`text-center  p-0 col-${item.size} ${
                  item?.cardTitle.includes("All")
                    ? "mini_card_item_divider"
                    : ""
                }`}
              >
                <h3 className="mini_card_title">{item?.cardTitle}</h3>
                <span className="mini_card_Count">{item?.cardCount}</span>
              </div>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MiniCard;
