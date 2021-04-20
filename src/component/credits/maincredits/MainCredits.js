import { Table } from "semantic-ui-react";
import Head from "../../UI/Head";
import PushData from "../pushData/PushData";

export default function MainCredits({ datas }) {
  return (
    <>
      <Table textAlign="center" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Head>MAIN CREDIT</Head>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>DATE</Table.HeaderCell>
            <Table.HeaderCell>USERNAME</Table.HeaderCell>
            <Table.HeaderCell>AMOUNT</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {datas.map(({ id, date, username, credit, isPaid }) => {
            if (credit !== 0) {
              return (
                <Table.Row key={id}>
                  <Table.Cell>{date}</Table.Cell>
                  <Table.Cell>{username.toUpperCase()}</Table.Cell>
                  <Table.Cell
                    style={
                      isPaid
                        ? { backgroundColor: "#C8F966" }
                        : { backgroundColor: "#F9A266" }
                    }
                  >
                    {credit}
                  </Table.Cell>
                </Table.Row>
              );
            }
            return undefined;
          })}
        </Table.Body>
      </Table>
      <PushData />
    </>
  );
}
