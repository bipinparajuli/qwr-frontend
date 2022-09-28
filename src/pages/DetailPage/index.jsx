import React,{useState,useEffect} from 'react'
import './DetailPage.css'
import {Button} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {useHistory} from 'react-router-dom'
import {Dialog,DialogActions,TextField,DialogContent,DialogContentText,DialogTitle,TableFooter} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import {Link} from "react-router-dom"
import {connect} from "react-redux"
import { bindActionCreators } from "redux";


import * as Actions from "./../../redux/AppStore/Actions";



const DetailPage = ({getAppDetail,appdetail,updateApkData,updateVersion,updateapksuccess,isLoading,match}) => {

  const history = useHistory();

  const [detail,setDetail] = useState([])

    const [Values, setValues] = useState({
        title:"",
        apkpath:"",
        loading:false,
        update:"",
        error:"",
        appid:"",
        versions:[],
        published_version:"",
        description:"",
        package_name:"",
        formdata:new FormData()
    })
const [open, setOpen] = React.useState(false);


const handleClickOpen = (id) => {
    // setValues({...Values,appid:id})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const {title,appid,update,loading,packageurl,versions,formdata,published_version,package_name,description} = Values;

    // const handleSubmit =(e)=>{
    
    //   setValues({...Values,loading:true})
    //     console.log(Array.from(formData));
    //     updateApp(data.token,data.id,e,formData).then((data)=>{
    //       // console.log(data);
    //       toast("Updated Succesfully",{type:"success"})
    //       setValues({...Values,loading:false})
    //     }).catch((e)=>{
    //       toast("Failed to update",{type:"error"})
    //       setValues({...Values,loading:false})

    //       console.log(e);
    //     })

    // }
    
    // const handleChange = name => event => {
    //     let value;

    //     if(name ==="apkpath")
    //       {
    //         console.log(event.target.files);
    //          value= event.target.files[0];
    //       }
    //       else{
    //          value= event.target.value;
    //       }

        
    //    console.log(value);
    //     formData.set(name,value);
    //     setValues({...Values,[name]:value})         
    //         }
            
            const releaseHandler = (id,version) => {
              updateVersion(id,version)
            }

            const preload = () => {
           getAppDetail(match.params.appid);


            }

            useEffect(()=>{
console.log(appdetail)

                setValues({...appdetail,
                  versions:appdetail.versions,
                  update:appdetail.updatedAt,
                  published_version:appdetail.published_version,
                  package_name:appdetail.package_name,
                  title:appdetail.name,
                  description:appdetail.description,
                  formdata:new FormData()});

                setDetail([appdetail])
                
              },[appdetail])
  
  

            useEffect(()=>{

              preload();
              
            },[])
            useEffect(()=>{

              preload();
              setOpen(false);
              
            },[updateapksuccess])

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
              
                       {isLoading ? <CircularProgress /> : <form action="">
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
                        </form>}
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
              
              const handleSubmit =()=>{
                updateApkData(formdata,match.params.appid)
            
            
              }
            
              const handleChange = name => event => {
                let value;
            
            
            
                if(name ==="file")
                  {
                    // console.log(event.target.files);
                     value= event.target.files[0];
                     formdata.set(name,value);
                    //  setValues({...Values,[name]:value})
                    }
                  else{
                    formdata.set(name,event.target.value)
                  }
             }


    return (
      <div className="update-application">
          <Typography variant="h4">
            {title}
          </Typography>

          <Link to="/appstoredashboard" style={{position:"absolute",right:"20px",color:"white"}}>
          <KeyboardBackspaceIcon />
          </Link>

          <div className="update-area">
            <div className="left">
              <div className="apk">
                <Typography variant="h6" >
                    APK
                </Typography>
          

              </div>

              <div className="current-apk">
                <Typography variant="h6" >
                   CURRENT APK
                </Typography>

                <Typography variant="subtitle1" >
                 { update == undefined ? "" : <span><strong> published on: </strong>{update.substr(0,10)}</span>}
                </Typography>
                  
              </div>  
            </div>
            
            <div className="right">
            {/* <Button variant="contained" onClick={()=>deleteHandler(appid)} >
               Delete Project
            </Button> */}
            </div>

          </div>

            <hr />
          <div className="package-area">

            <div className="package-name">
              <Typography variant="subtitle1" color="initial">
                Package name
              </Typography>

              <Typography variant="h6" color="initial">
              {package_name}
              </Typography>
            </div>

            <div className="version">
            <Typography variant="subtitle1" color="initial">
               Latest Version
              </Typography>

              <Typography variant="h6" color="initial">
                {published_version}
              </Typography>

            </div>

            <div className="description">
            <Typography variant="subtitle1" color="initial">
               Description
              </Typography>

              <Typography variant="h6" color="initial">
                {description}
              </Typography>

            </div>

          </div>

          <hr />

          <div className="previous-apk">
          <Typography variant="h6" >
                   PREVIOUS APK
            </Typography>

            <TableContainer component={Paper}>
            <Table 
            // className={classes.table}
             aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>VERSION</TableCell>
                  <TableCell align="right">UNIQUE ID</TableCell>
                  <TableCell align="right">Release</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {detail== undefined?<h3>Could not found App in server </h3> :detail.map((row,index) => (
                    //   <TableRow key={row.name}>
                    <>
                       {
                         versions == undefined ? <CircularProgress /> :versions.map((v,index)=>(
                             <TableRow key={index}>
                        <TableCell component="th" scope="row">
                        {row.name}
                        </TableCell>
                        <TableCell align="right">
                           {v}
                            </TableCell>
                        <TableCell align="right">{row._id}</TableCell>
                        <TableCell align="right">
                        <Button variant="contained" onClick={()=>releaseHandler(row._id,v)} >
                            Release Apk
                        </Button>
                            </TableCell> 
                        </TableRow>
                           ))
                       }
                      </>  
                //   </TableRow>
                )
                     )
                    }
              </TableBody>
            </Table>
          </TableContainer>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Create App</DialogTitle> */}
        <DialogContent>
          
        {updateApp()}
        </DialogContent>
       
      </Dialog>
        <Fab onClick={handleClickOpen} style={{position:"absolute",bottom: "50px",right:"60px"}} color="primary" aria-label="add">
          <AddIcon />
        </Fab>   
            
          </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    ...state.AppStore,
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
      ...bindActionCreators({ ...Actions }, dispatch),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
