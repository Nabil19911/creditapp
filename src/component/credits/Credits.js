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
    // Check the user input and update the Current credit table
    if (usernameIndex >= 0) {
      // Fixing bug
      if (retrieveData.isPaid) {
        data[usernameIndex].amount += retrieveData.amount;
        console.log("1" + retrieveData.isPaid);
      } else {
        if (data[usernameIndex].amount > retrieveData.amount) {
          data[usernameIndex].amount -= retrieveData.amount;

          console.log("2" + [...data]);
        } else {
          if (
            data[usernameIndex].amount < retrieveData.amount &&
            data[usernameIndex].isPaid
          ) {
            console.log("3" + [...data]);
            data[usernameIndex].isPaid = false;
          } else {
            data[usernameIndex].isPaid = true;
            console.log("4" + [...data]);
          }
          data[usernameIndex].amount =
            retrieveData.amount - data[usernameIndex].amount;
          console.log("5" + [...data]);
        }
      }
      setCreditData([...data]);
    } else {
      setCreditData([...data, retrieveData]);
      console.log(retrieveData);
      console.log("6" + [...data]);
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
