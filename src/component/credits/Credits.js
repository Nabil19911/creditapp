import { useState } from "react";
import { Grid } from "semantic-ui-react";
import CreditData from "../dummyData/CreditData";
import CurrentCredits from "./currentcredits/CurrentCredits";
import MainCredits from "./maincredits/MainCredits";

export default function Credits() {
  const creditData = CreditData;
  const [data, setCreditData] = useState(creditData);
  const getData = (retrieveData) => {
    data.forEach((element) => {
      console.log(
        element.username.toLowerCase() === retrieveData.username.toLowerCase()
      );
    });
    setCreditData((prevData) => [...data, retrieveData]);
    console.log(retrieveData);
  };
  return (
    <Grid textAlign="center">
      <Grid.Column width={5}>
        <MainCredits datas={data} />
      </Grid.Column>
      <Grid.Column width={5}>
        <CurrentCredits onGetDataFromCurrent={getData} datas={data} />
      </Grid.Column>
    </Grid>
  );
}
