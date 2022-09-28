import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {Dialog,DialogActions,TextField,DialogContent,DialogContentText,DialogTitle,TableFooter} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom'

import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import CreateApp from '../CreateApp';


import * as Actions from "./../../redux/AppStore/Actions";



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



function AppStoreDashboard(props) {

  const classes = useStyles();
  const [state, setstate] = useState([])
  const {getAppData,appdata,updateApkData,updateapksuccess,hasError} = props;

  console.log(props);

  const [Values, setValues] = useState({
    file:"",
    version:"",
    loading:false,
    appid:"",
    error:"",
    appid:"",
    page:1,
    releasenameerror:false,
    releasenameerrortext:"",
    formData:new FormData()
})
const [open, setOpen] = React.useState(false);


const {releasename,formData,releasenameerror,releasenameerrortext,appid,page} = Values;


  const handleClickOpen = (id) => {
    setValues({...Values,appid:id})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit =()=>{
    updateApkData(formData,appid)


  }

  const handleChange = name => event => {
    let value;



    if(name ==="file")
      {
        // console.log(event.target.files);
         value= event.target.files[0];
         formData.set(name,value);
        //  setValues({...Values,[name]:value})
        }
      else{
        formData.set(name,event.target.value)
      }
 }

  useEffect(()=>{
    getAppData(page)
  },[page])

  useEffect(()=>{
      console.log(appdata);
    setstate(appdata)
  },[appdata])

  useEffect(()=>{
    if(updateapksuccess)
    alert("Successfully updated")
},[updateapksuccess])

// useEffect(()=>{
//   if(hasError)
//   alert("Error in updation")
// },[hasError])
  


const updateApp = () => {
  return (
    <div>
      <Dialog 
      open={open} 
      onClose={handleClose}
       aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Versions</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New version should be greater than the latest version
          </DialogContentText>

          <form action="">
          <TextField
          onChange={handleChange("file")}
            autoFocus
            margin="dense"
            id="name"
            type="file"
            name="file"
            fullWidth
            InputLabelProps={{
              shrink:true
            }}

          />

          <TextField
          onChange={handleChange("version")}
            autoFocus
            margin="dense"
            id="name"
            label="Version no"
            type="text"
            name="releasename"
            fullWidth
            // error={releasenameerror}
            // helperText={releasenameerrortext}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={()=>handleSubmit()}
           color="primary">
            YES
          </Button>
          <Button 
          onClick={handleClose}
           color="primary">
            NO
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const handleChangePage = (event, newPage) => {

  // console.log(newPage)

  setValues({...Values,page:newPage})

};



  return (
    <div style={{height:"80vh",display:"flex",flexDirection:"column",padding:"5%"}}>
    {updateApp()}
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
        </Snackbar> */}
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>App Name</TableCell>
            <TableCell align="right">Device</TableCell>
            <TableCell align="right">Last Update</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.length == 0? <TableRow ><TableCell>No Data Available</TableCell></TableRow> : state.map((row,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
              <Link style={{color:"#fff"}} to={`/appdetail/${row._id}`}> {row.name}</Link> 
              </TableCell>
              <TableCell align="right">{row.devices}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
              {/* <Button variant="contained" onClick={()=>handleClickOpen(row._id)}>
                                      Update
                                    </Button> */}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
          <Pagination onChange={handleChangePage} count={10} />
        </div>
    </TableContainer>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Create App</DialogTitle> */}
        <DialogContent>
          
         <CreateApp step={0} />
        </DialogContent>
       
      </Dialog>
        <Fab onClick={handleClickOpen} style={{position:"absolute",bottom: "50px",right:"60px"}} color="primary" aria-label="add">
          <AddIcon />
        </Fab>   
    </div>
  );
}


const mapStateToProps = (state) => ({
    ...state.AppStore,
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
      ...bindActionCreators({ ...Actions }, dispatch),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AppStoreDashboard);

