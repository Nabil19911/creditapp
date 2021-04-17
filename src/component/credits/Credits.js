import { useState } from "react";
import { Grid } from "semantic-ui-react";
import CreditData from "../dummyData/CreditData";
import CurrentCredits from "./currentcredits/CurrentCredits";
import MainCredits from "./maincredits/MainCredits";

export default function Credits() {
  const creditData = CreditData;
  const [data, setCreditData] = useState(creditData);
  const getData = (retrieveData) => {
    const usernameIndex = data.findIndex(
      (user) =>
        user.username.toLowerCase() === retrieveData.username.toLowerCase()
    );
    if (usernameIndex >= 0) {
      // Need to fix this
      if (retrieveData.isPaid) {
        data[usernameIndex].amount += retrieveData.amount;
        // data[usernameIndex].isPaid = true;
      } else {
        if (data[usernameIndex].amount > retrieveData.amount) {
          data[usernameIndex].amount -= retrieveData.amount;
        } else {
          data[usernameIndex].amount =
            retrieveData.amount - data[usernameIndex].amount;
          data[usernameIndex].isPaid = false;
        }
      }
      setCreditData([...data]);
      console.log(data);
    } else {
      setCreditData((prevData) => [...prevData, retrieveData]);
    }
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
