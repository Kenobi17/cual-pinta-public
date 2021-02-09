import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CerveceriasAPI from "../apis/CerveceriasAPI";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const CerveceriaPageRoute = () => {
  const { id } = useParams();
  const [cerveceria, setCerveceria] = useState({});
  const FetchData = async () => {
    try {
      const response = await CerveceriasAPI.get(`/${id}`);
      setCerveceria(response.data.data.cerveceria);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="CerveceriaPageRoute">
      <div></div>
    </div>
  );
};

export default CerveceriaPageRoute;
