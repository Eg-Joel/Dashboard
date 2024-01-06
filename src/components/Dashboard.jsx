import { React, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PeopleIcon from "@mui/icons-material/People";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sub-container">
        <div className="filter-buttons">
          <div className="button-group">
            <button value="today" className="selected-button">
              Today
            </button>
            <button value="weekly" className="nonselected-button">
              Weekly
            </button>
            <button value="monthly" className="nonselected-button">
              Monthly
            </button>
          </div>
          <div className="date-btn">
            <button value="date" className="date-button">
              Date <CalendarTodayIcon></CalendarTodayIcon>
            </button>
          </div>
        </div>

        <div className="cards">
          <div className="first-cards">
            <div className="big-card">
              <div className="card-inner">
                <h3>Number of Paid Invoices</h3>
              </div>
              <h1>324</h1>
              <div className="card-inner">
                <h3>Value of Paid Invoices</h3>
              </div>
              <h1>2705.96</h1>
            </div>
            <div className="small-cards">
              <div className="small-card">
                <div className="card-inner">
                  <h3>Invoices Created</h3>
                </div>
                <h1>342</h1>
              </div>
              <div className="small-card">
                <div className="card-inner">
                  <h3>Number of Customers</h3>
                </div>
                <h1>971</h1>
              </div>
              <div className="small-card">
                <div className="card-inner">
                  <h3>Value of Transactions</h3>
                </div>
                <h1>857</h1>
              </div>
              <div className="small-card">
                <div className="card-inner">
                  <h3>Expirig Invoices</h3>
                </div>
                <h1>15</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="button-row">
          <div className="buttonss">
            <button className="action-btn ">
              Create Invoice <ReceiptLongIcon></ReceiptLongIcon>
            </button>
            <button className="action-btn ">
              Add Customer <PeopleIcon></PeopleIcon>
            </button>
          </div>
        </div>

        <div className="table-row">
          <div className="tables">
            <div className="table">
              <div className="heading">
                <h3 className="table-heading-text">Today's Invoice</h3>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                  <TableHead
                    sx={{ minHeight: "30px", backgroundColor: "#f0f0f0" }}
                  >
                    <TableRow>
                      <TableCell>Payment Ref</TableCell>
                      <TableCell>Invoice Value</TableCell>
                      <TableCell>Invoice Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody >
                    <TableRow>
                      <TableCell align="center">No Data Found</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            <div className="table">
              <div className="heading">
                <h3 className="table-heading-text">Today's Paid Invoice</h3>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                  <TableHead
                    sx={{ minHeight: "30px", backgroundColor: "#f0f0f0" }}
                  >
                    <TableRow>
                      <TableCell>Payment Ref</TableCell>
                      <TableCell>Invoice Value</TableCell>
                      <TableCell>commission</TableCell>
                      <TableCell>Transaction ID</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody >
                    <TableRow>
                      <TableCell align="center">No Data Found</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
