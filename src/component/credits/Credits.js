import { useState } from "react";
import { Grid } from "semantic-ui-react";
import CurrentCreditData from "../dummyData/CurrentCreditData";
import MainCreditData from "../dummyData/MainCreditData";
import CurrentCredits from "./currentcredits/CurrentCredits";
import MainCredits from "./maincredits/MainCredits";

export default function Credits() {
  const mainCreditData = MainCreditData;
  const [mainData, setMainData] = useState(mainCreditData);
  // Current Credit Function
  const creditData = CurrentCreditData;
  const [data, setCreditData] = useState(creditData);

  const getData = (retrieveData) => {
    const usernameIndex = data.findIndex(
      (user) =>
        user.username.toLowerCase() === retrieveData.username.toLowerCase()
    );
    // Check the user input and update the Current credit table
    if (usernameIndex >= 0) {
      // Testing
      if (data[usernameIndex].isPaid && retrieveData.isPaid) {
        data[usernameIndex].amount += retrieveData.amount;
      } else {
        if (data[usernameIndex].amount > retrieveData.amount) {
          data[usernameIndex].amount -= retrieveData.amount;
        } else {
          if (
            data[usernameIndex].amount < retrieveData.amount &&
            data[usernameIndex].isPaid
          ) {
            data[usernameIndex].isPaid = false;
          } else {
            data[usernameIndex].isPaid = true;
          }
          data[usernameIndex].amount =
            retrieveData.amount - data[usernameIndex].amount;
        }
      }
      setCreditData([...data]);
    } else {
      setCreditData([...data, retrieveData]);
    }
  };
  // Main Credit Function

  return (
    <Grid textAlign="center">
      <Grid.Column width={5}>
        <MainCredits datas={mainData} />
      </Grid.Column>
      <Grid.Column width={5}>
        <CurrentCredits onGetDataFromCurrent={getData} datas={data} />
      </Grid.Column>
    </Grid>
  );
}
