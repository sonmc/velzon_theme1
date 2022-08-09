import React from "react";
import { Grid, _ } from "gridjs-react";

const data = [
  ["01", "Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
  ["02", "Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
  ["03", "Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
  ["04", "Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
  ["05", "Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
  ["06", "Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
  ["07", "Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
  ["08", "Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
  ["09", "Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
  ["10", "Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
];

// Base Example
const BaseExample = () => {
  return (
    <React.Fragment>
      <Grid
        data={data}
        columns={[
          {
            name: "ID",
            formatter: (cell) => _(<span className="fw-semibold">{cell}</span>),
          },
          "Name",
          {
            name: "Email",
            formatter: (cell) => _(<a href="/#"> {cell} </a>),
          },
          "Position",
          "Company",
          "Country",
          {
            name: "Actions",
            width: "120px",
            formatter: (cell) =>
              _(
                <a href="/#" className="text-reset text-decoration-underline">
                  {" "}
                  Details{" "}
                </a>
              ),
          },
        ]}
        search={true}
        sort={true}
        pagination={{ enabled: true, limit: 5 }}
      />
    </React.Fragment>
  );
};

export { BaseExample };
