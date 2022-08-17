import React from "react";
import Router, { useRouter } from "next/router";
import { getHouseById } from "../../utils/getHouseById";

const HousePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const house = getHouseById(Number(id));

  return <div>{house?.address}</div>;
};

export default HousePage;
