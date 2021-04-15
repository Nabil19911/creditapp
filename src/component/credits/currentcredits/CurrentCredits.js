import { Table } from "semantic-ui-react";
import PopUpModal from "../../modal/PopUpModal";
import Head from "../../UI/Head";

export default function CurrentCredits({ datas }) {
  return (
    <>
      <Table textAlign="center" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Head>CURRENT CREDIT</Head>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>DATE</Table.HeaderCell>
            <Table.HeaderCell>USERNAME</Table.HeaderCell>
            <Table.HeaderCell>CREDIT</Table.HeaderCell>
            <Table.HeaderCell style={{ backgroundColor: "#DEDF5B" }}>
              PAID
            </Table.HeaderCell>
            <Table.HeaderCell style={{ backgroundColor: "#DF915B" }}>
              NOT PAID
            </Table.HeaderCell>
            <Table.HeaderCell>AMOUNT</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {datas.map(({ id, date, username, credit, isPaid, amount }) => {
            return (
              <Table.Row key={id}>
                <Table.Cell>{date}</Table.Cell>
                <Table.Cell>{username}</Table.Cell>
                <Table.Cell>{credit}</Table.Cell>
                <Table.Cell>{isPaid ? amount : 0}</Table.Cell>
                <Table.Cell>{!isPaid ? amount : 0}</Table.Cell>
                <Table.Cell
                  style={
                    isPaid && credit < amount
                      ? { backgroundColor: "#C8F966" }
                      : { backgroundColor: "#F9A266" }
                  }
                >
                  {isPaid
                    ? credit > amount
                      ? credit - amount
                      : amount - credit
                    : credit + amount}
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <PopUpModal datas={datas} />
    </>
  );
}
