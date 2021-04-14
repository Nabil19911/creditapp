import { Grid } from "semantic-ui-react";
import CreditData from "../dummyData/CreditData";
import CurrentCredits from "./currentcredits/CurrentCredits";
import MainCredits from "./maincredits/MainCredits";

export default function Credits() {
  const data = CreditData;
  return (
    <Grid textAlign="center">
      <Grid.Column width={5}>
        <MainCredits datas={data} />
      </Grid.Column>
      <Grid.Column width={5}>
        <CurrentCredits datas={data} />
      </Grid.Column>
    </Grid>
  );
}
