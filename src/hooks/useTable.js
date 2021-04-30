import React from 'react'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Table, TableHead, TableRow, TableCell,  TablePagination, TableSortLabel } from '@material-ui/core'



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#3f51b5",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


export const useTable = (records,headCells) => {


    
   // const classes = useStyles();

    const TblContainer = props => (
        <Table >
            {props.children}
        </Table>
    )

    const TblHeader = props => {

        return (  <TableHead>
            <TableRow>
                {headCells.map( headCell=>(
                        <StyledTableCell key={headCell.id} align="right">
                            {headCell.label}
                            </StyledTableCell>
        ))
                  }
            </TableRow>
        </TableHead> )
    }

    return {TblContainer,TblHeader}
}

export default useTable;