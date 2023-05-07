import React, { useState } from "react";
import { Container } from "@mui/material";
import ManagementNav from "./ManagementNav";
import ManageSearch from "./ManageSearch";
import ManagementMark from "./ManagementMark";
import ManagementOffer from "./ManagementOffer";
import ManagementNotice from "./ManagementNotice";
import ManagementCms from "./ManagementCms";

const ManagementHome = () => {
  //   const [active, setActive] = useState(true);
  const [id, setId] = useState(1);

  const handleId = (id) => {
    console.log(id);
    setId(id);
  };

  return (
    <Container>
      <ManagementNav id={id} handleId={handleId} />
      {id == 1 ? <ManageSearch /> : ""}
      {id == 2 ? <ManagementMark /> : ""}
      {id == 3 ? <ManagementOffer /> : ""}
      {id == 4 ? <ManagementNotice /> : ""}
      {id == 5 ? <ManagementCms /> : ""}

    </Container>
  );
};

export default ManagementHome;
