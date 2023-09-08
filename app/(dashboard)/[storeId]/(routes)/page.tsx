import React from "react";

type DeshboardProps = {
  params: { storeId: string };
};

const DashboardPage: React.FC<DeshboardProps> = async ({ params }) => {
  return <div>{params.storeId}</div>;
};

export default DashboardPage;
