import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { FiXCircle } from "react-icons/fi";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FiCheckCircle } from "react-icons/fi";
import 'react-toastify/dist/ReactToastify.css';
import Mstyles from '../../../Style/home.module.css';
import LoadingButton from '@mui/lab/LoadingButton';
import { ToastContainer, toast } from 'react-toastify';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs({ Type, product }) {

    const [open, setOpen] = useState(Type);
    const [FormBox, setFormBox] = useState(true);
    const [Loading, setLoading] = useState(false);
    const [LoadingBtn, setLoadingBtn] = useState(false);
    const [MobileNumber, setMobileNumber] = useState('');
    const [FullName, setFullName] = useState('');
    const [assignedTo, setAssignedTo] = useState('none');
    const [Email, setEmail] = useState('');

    const [Service, setService] = useState(product);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeName = () => {
        const N = document.querySelector('#FullName').value
        setFullName(N)

    }
    const handleChangeEmail = () => {
        const Em = document.querySelector('#Email').value
        setEmail(Em)

    }
    const handleChangeMob = () => {
        const Mob = document.querySelector('#Mobile').value
        setMobileNumber(Mob)

    }
   



    const notify = (text) => toast(text, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const handleChangeService = (event) => {
        setService(event.target.value);

    };



    const FromSubmitbtn = async () => {
        if (FullName !== '' && MobileNumber !== '' && Email !== '' && Service !== null) {

            SendEnq()


        } else {
            notify('Please enter all required fields')
        }


    }

    const SendEnq = async () => {
        setLoadingBtn(true)
        const sendUM = { name: FullName, mobile: MobileNumber, email: Email, service: Service }
        const data = await fetch("/api/SendEnq", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setLoadingBtn(false)
                if (parsed.Data.ReqData.isActive == true) {
                    notify('Enquary Submitted')
                    setOpen(false)

                } else {
                    notify('Something went wrong')
                }
                console.log(parsed.ReqData)

            })


    }
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {!Type &&


                <div className={Mstyles.TopBtn} onClick={handleClickOpen}>
                    <div className={Mstyles.TopBtnIcon}>
                        <FiArrowRight size={20} />
                    </div>
                    <div className={Mstyles.TopBtnText}>
                        <span>Get Started Today</span>
                    </div>
                </div>
            }

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >

                {FormBox &&

                    <div className={Mstyles.DialogBox}>
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            Get a Free Callback
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <FiXCircle />
                        </IconButton>

                        <DialogContent dividers>
                            <div className={Mstyles.mainbox}>
                                <div className={Mstyles.inputBox}>
                                    <lable>Full Name</lable>
                                    <input type="text" placeholder='Name' id='FullName' onChange={handleChangeName} value={FullName} />
                                </div>
                                <div className={Mstyles.inputBox}>
                                    <lable>Email Address</lable>
                                    <input type="text" placeholder='Email' id='Email' onChange={handleChangeEmail} value={Email} />
                                </div>
                                <div className={Mstyles.inputBox}>
                                    <lable>Contact Number</lable>
                                    <input type="number" placeholder='' id='Mobile' onChange={handleChangeMob} value={MobileNumber} />
                                </div>

                                <div className={Mstyles.inputBox}>
                                    <lable>Select Service</lable>
                                    <select value={Service} onChange={handleChangeService}>

                                        <option value={Service}>{Service}</option>
                                        <option value="Virtual Assistant">Virtual Assistant</option>
                                        <option value="Webiste Development">Webiste Development</option>
                                        <option value="App Delevopment">App Delevopment</option>
                                        <option value="Graphic Design">Graphic Design</option>
                                        <option value="Social media management">Social media management</option>
                                        <option value="Video Making">Video Making</option>
                                    </select>
                                </div>
                            </div>

                        </DialogContent>
                        <DialogActions>

                            <div className={Mstyles.CenterDilog}>
                                <div style={{ height: '50px' }}></div>
                                <LoadingButton
                                    size="large"
                                    style={{ width: '60%', backgroundColor: '#00a6ff', color: 'white' }}
                                    endIcon={<FiChevronRight />}
                                    loading={LoadingBtn}
                                    loadingPosition="end"
                                    variant="contained"
                                    onClick={FromSubmitbtn}
                                >
                                    <span>Submit Form</span>
                                </LoadingButton>
                            </div>
                            <div style={{ height: '30px' }}></div>
                        </DialogActions>

                    </div>
                }



            </BootstrapDialog>
        </div>
    );
}
