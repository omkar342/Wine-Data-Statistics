import { Table } from "@mantine/core";
import wineData from "../../Assets/wine-data.json"; 
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../../Utility/Statisticals";

export const FlavnoidsTable = () => {
  const groupedByAlcohol: { [key: string]: number[] } = {}; 

  wineData.forEach((entry: any) => {
    const alcohol = entry.Alcohol;

    if (!groupedByAlcohol[alcohol]) {
      groupedByAlcohol[alcohol] = [];
    }
    groupedByAlcohol[alcohol].push(entry["Flavanoids"]);
  });

  const groupedByAlcoholObject = Object.entries(groupedByAlcohol).map(
    ([alcohol, flav]) => {
      return { alcohol, flav };
    }
  );

  const ths = (
    <Table.Tr>
      <Table.Th>Measure</Table.Th>
      {groupedByAlcoholObject.map((alcoholClass, index)=>{
        return <Table.Th key={index}>Class {index + 1}</Table.Th>
      })}
    </Table.Tr>
  );

  return (
    <Table style={{ margin: "50px 0px" }} striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Caption>Flavanoids Statistics by Alcohol Class</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>
        <Table.Tr>
            <Table.Td>Flavanoids Mean</Table.Td>
            {groupedByAlcoholObject.map((alcoholClass: { alcohol: string; flav: number[] }, index: number) => {
                return <Table.Td key={index}>{calculateMean(alcoholClass.flav).toFixed(3)}</Table.Td>
            })}
        </Table.Tr>
        <Table.Tr>
            <Table.Td>Flavanoids Median</Table.Td>
            {groupedByAlcoholObject.map((alcoholClass: { alcohol: string; flav: number[] }, index: number) => {
                return <Table.Td key={index}>{calculateMedian(alcoholClass.flav).toFixed(3)}</Table.Td>
            })}
        </Table.Tr>
        <Table.Tr>
            <Table.Td>Flavanoids Mode</Table.Td>
            {groupedByAlcoholObject.map((alcoholClass: { alcohol: string; flav: number[] }, index: number) => {
                return <Table.Td key={index}>{calculateMode(alcoholClass.flav)}</Table.Td>
            })}
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
};
