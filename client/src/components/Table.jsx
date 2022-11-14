import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <p>Döviz Kodu</p>
              <p>Currency Code</p>
            </TableCell>
            <TableCell align="right">
              <p>Birim</p>
              <p>Unit</p>
            </TableCell>
            <TableCell align="right">
              <p>Döviz Cinsi</p>
              <p>Currency</p>
            </TableCell>
            <TableCell align="right">
              <p>Döviz Alış</p>
              <p>Forex Buying</p>
            </TableCell>
            <TableCell align="right">
              <p>Döviz Satış</p>
              <p>Forex Selling</p>
            </TableCell>
            <TableCell align="right">
              <p>Efektif Alış</p>
              <p>Baknote Buying</p>
            </TableCell>
            <TableCell align="right">
              <p>Efektif Satış</p>
              <p>Banknote Selling</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row?.Isim._text}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?._attributes.CurrencyCode}/TRY
              </TableCell>
              <TableCell align="right">{row?.Unit?._text}</TableCell>
              <TableCell align="right">{row?.Isim?._text}</TableCell>
              <TableCell align="right">{row?.ForexBuying._text}</TableCell>
              <TableCell align="right">{row?.ForexSelling._text}</TableCell>
              <TableCell align="right">{row?.BanknoteBuying._text}</TableCell>
              <TableCell align="right">{row?.BanknoteSelling._text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
