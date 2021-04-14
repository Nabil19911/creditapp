import { Table } from "semantic-ui-react";
import Head from "../../UI/Head";

export default function MainCredits({ datas }) {
  return (
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
        {datas.map(({ id, date, username, credit }) => {
          if (credit !== 0) {
            return (
              <Table.Row key={id}>
                <Table.Cell>{date}</Table.Cell>
                <Table.Cell>{username}</Table.Cell>
                <Table.Cell>{credit}</Table.Cell>
              </Table.Row>
            );
          }
        })}
      </Table.Body>
    </Table>
  );
}
