import { Table } from "@mantine/core";
import wineData from "../../Assets/wine-data.json"; 
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../../Utility/Statisticals";

export const GammaTable = () => {
    
  const groupedByAlcohol: { [key: string]: number[] } = {}; 

wineData.forEach((entry) => {
    const alcohol = entry.Alcohol;

    const gamma: number = (Number(entry.Ash) * Number(entry.Hue)) / Number(entry.Magnesium);

    if (!groupedByAlcohol[alcohol]) {
            groupedByAlcohol[alcohol] = [];
    }
    
    groupedByAlcohol[alcohol].push(gamma);
});

  const groupedByAlcoholObject = Object.entries(groupedByAlcohol).map(
    ([alcohol, gemma]) => {
      return { alcohol, gemma };
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
    <Table style={{ margin: "30px 0px" }} striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Caption>Gemma Statistics by Alcohol Class</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>
        <Table.Tr>
            <Table.Td>Gemma Mean</Table.Td>
            {groupedByAlcoholObject.map((alcoholClass: { alcohol: string; gemma: number[] }, index: number) => {
                return <Table.Td key={index}>{calculateMean(alcoholClass.gemma).toFixed(3)}</Table.Td>
            })}
        </Table.Tr>
        <Table.Tr>
            <Table.Td>Gemma Median</Table.Td>
            {groupedByAlcoholObject.map((alcoholClass: { alcohol: string; gemma: number[] }, index: number) => {
                return <Table.Td key={index}>{calculateMedian(alcoholClass.gemma).toFixed(3)}</Table.Td>
            })}
        </Table.Tr>
        <Table.Tr>
            <Table.Td>Gemma Mode</Table.Td>
            {groupedByAlcoholObject.map((alcoholClass: { alcohol: string; gemma: number[] }, index: number) => {
                return <Table.Td key={index}>{calculateMode(alcoholClass.gemma).toFixed(3)}</Table.Td>
            })}
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
};
