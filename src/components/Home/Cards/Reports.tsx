import { Table } from "react-bootstrap";

const Reports = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th
              scope="col"
              className="case_details_report_table_label "
              style={{ borderTopLeftRadius: "8px" }}
            ></th>
            <th scope="col" className="case_details_report_table_label ">
              All Cases
            </th>
            <th scope="col" className="case_details_report_table_label ">
              Open Cases
            </th>
            <th
              scope="col"
              className="case_details_report_table_label "
              style={{ borderTopRightRadius: "8px" }}
            >
              Closed Cases
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr className="">
            <th
              scope="row"
              className="case_details_report_table_label"
              style={{ borderBottomLeftRadius: "8px" }}
            >
              Benfit Research
            </th>
            <td>200</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Reports;
