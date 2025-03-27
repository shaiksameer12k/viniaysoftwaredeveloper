import { Button, Card } from "react-bootstrap";
import BarChartComponent from "./Charts/BarChart";
import "./MainCard.css";
import LineChartComponent from "./Charts/LineChart";
import Reports from "./Reports";
import { useState } from "react";

type mini_card_data_obj = {
  cardIcon: string;
  cardTitle: string;
  cardCount: number;
  size: number;
};

type mini_card_data = {
  cardData: mini_card_data_obj[];
};

const MainCard = ({ cardData }: mini_card_data) => {
  const [activeTab, setActiveTab] = useState<string>("Bar");

  const changeTabHandel = (tabType: string) => {
    if (tabType) {
      setActiveTab(tabType);
    }
  };

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>Case Detail (0)</Card.Title>
        <ul className="d-flex gap-2 list-style">
          <li
            className={`list-group-item  `}
            style={{
              cursor: "pointer",
              color: activeTab === "Bar" ? "green" : "#3c3c3c",
            }}
            onClick={() => changeTabHandel("Bar")}
          >
            Bar
          </li>
          <li
            className={`list-group-item `}
            style={{
              cursor: "pointer",
              color: activeTab === "Line" ? "green" : "#3c3c3c",
            }}
            onClick={() => changeTabHandel("Line")}
          >
            Line
          </li>
          <li
            className={`list-group-item  `}
            style={{
              cursor: "pointer",
              color: activeTab === "Reports" ? "green" : "#3c3c3c",
            }}
            onClick={() => changeTabHandel("Reports")}
          >
            Report
          </li>
          <li
            className={`list-group-item  `}
            style={{
              cursor: "pointer",
              color: activeTab === "Download" ? "green" : "#3c3c3c",
            }}
          >
            Down
          </li>
        </ul>
      </Card.Header>

      <Card.Body className="row">
        {activeTab === "Bar" ? (
          <div className="col-10">
            <BarChartComponent />
          </div>
        ) : activeTab === "Line" ? (
          <div className="col-10">
            <LineChartComponent />
          </div>
        ) : activeTab === "Reports" ? (
          <div className="col-10">
            <Reports />
          </div>
        ) : (
          <div className="col-10">
            <BarChartComponent />
          </div>
        )}

        <div className="col-2 border d-flex flex-column  justify-content-center">
          {cardData?.map((item) => (
            <div className="case_details_card_data_type my-1">
              <span>
                {item?.cardTitle} ({item?.cardCount})
              </span>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default MainCard;
