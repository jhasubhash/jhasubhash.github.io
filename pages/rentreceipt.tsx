import Link from "next/link";
import styles from '../styles/Rent.module.css'
import Calendar from 'react-calendar'
import { createRef, RefObject, useState } from "react";
import 'react-calendar/dist/Calendar.css'
import numWords from 'num-words'
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import ImageUploading from "react-images-uploading";
import { MdClose } from 'react-icons/md';
import ReactToPdf from 'react-to-pdf'

let ownerName = "Amit kumar";
let ownerPan = "";
let ownerSign;
let beginMonth = "April 2021";
let endMonth ="June 2021"
let beginDate = "01/04/2021";
let endDate = "30/06/2021";


const monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function RentRecipt() {

    const [beginDateVal, setBeginDateVal] = useState(new Date());
    const [endDateVal, setEndDateVal] = useState(new Date());
    const [beginDatePanel, setBeginDatePanel] = useState(false);
    const [endDatePanel, setEndDatePanel] = useState(false);
    const [tenantName, setTenantName] = useState("Enter Tenant Name");
    const [rent, setRent] = useState("Enter rent");
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [address3, setAddress3] = useState('');
    const [address4, setAddress4] = useState('');
    const [address5, setAddress5] = useState('');
    const [images, setImages] = useState([]);
    const [pan, setPan] = useState('');
    const [printView, setPrintView] = useState(false);
    const ref = createRef() as RefObject<HTMLDivElement>;

    const onBeginDateChange = (val)=>{
        console.log(val)
        setBeginDateVal(val);
        setBeginDatePanel(false);
        setEndDatePanel(false);
    }

    const onEndDateChange = (val)=>{
        setEndDateVal(val);
        setBeginDatePanel(false);
        setEndDatePanel(false);
    }


    const toggleBeginDate = ()=>{
        setEndDatePanel(false);
        setBeginDatePanel(!beginDatePanel);
    }

    const toggleEndDate = ()=>{
        setBeginDatePanel(false);
        setEndDatePanel(!endDatePanel);
    }

    const getDateFormat = (val)=>{
        let day = val.getDate();
        let month = val.getMonth()+1;
        let year = val.getFullYear();
        return day+"/"+month+"/"+year;
    }

    const getMonthFormat = (val)=>{
        let month = val.getMonth();
        let year = val.getFullYear();
        return monthMap[month]+" "+year;
    }

    const onRentChange = (val)=> {
        setRent(val)
    }

    const onRentEdit = (val)=> {
        setRent('')
    }

    const onTenantNameChange = (val)=> {
        setTenantName(val)
    }

    const onTenantNameEdit = (val)=> {
        setTenantName('')
    }

    const onImageChange = (imageList, addUpdateIndex)=>{
        console.log(imageList)
        setImages(imageList);
    }

    const confirmCalled = () =>{
        setPrintView(true);
    }
    const resetCalled = () =>{
        setBeginDateVal(new Date());
        setEndDateVal(new Date());
        setTenantName("Enter tenant name");
        setRent("Enter rent");
        setAddress1('');
        setAddress2('');
        setAddress3('');
        setAddress4('');
        setAddress5('');
        setImages([]);
        setPan('');
    }

    const printCalled = () =>{
    }
    const backCalled = () =>{
        setPrintView(false);
    }

    return <>
    <div  >
    <div className={styles.containerStyle}>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'800px', minWidth:'800px', marginBottom:'100px', marginTop:'50px', padding:'2rem'}} ref={ref}>
        <h1> RENT RECEIPT</h1>
        <div style={{marginTop:'2rem', width:'100%'}}>
            <div className={styles.rowStyle}>
                <div>Received a sum of Rs.</div>
                <div style={{ width:'80%', borderBottom: '1px solid black', paddingLeft:'1rem', paddingRight:'3rem'}}>
                <EditText value={rent} style={{ margin:0, padding:0}} onChange={onRentChange} onEditMode={onRentEdit}/>
                </div> 
                <div>(in words </div>
                <div style={{width:'100%', borderBottom: '1px solid black'}}></div>
            </div>
            <div className={styles.rowStyle}>
                <div style={{width:'100%', borderBottom: '1px solid black', textTransform:'capitalize', paddingLeft:'1rem'}}>{numWords(parseInt(rent))} {numWords(parseInt(rent)).length >0 ? 'only' : ''}</div>
                <span>)</span>
            </div>
            <div className={styles.rowStyle}>
                <div>from Mr./Ms/Mrs.</div>
                <div style={{width:'100%', borderBottom: '1px solid black', paddingLeft:'1rem'}}>
                    <EditText value={tenantName} onChange={onTenantNameChange} onEditMode={onTenantNameEdit} style={{padding:0, margin:0}}/>
                </div>
                <div>towards rent </div>
            </div>
            <div className={styles.rowStyle}>
                <div>of the premises as mentioned in the below month of</div>
                <div className={styles.blankStyle}>
                    <div style={{display:'flex', width:'100%'}}>
                        <div style={{position:'relative', width:'70px', border:'1px'}}>
                            {beginDatePanel && <div style={{position:'absolute', zIndex:9}}>
                                <Calendar value={beginDateVal} onChange={onBeginDateChange}/>
                            </div>}
                            <div className={styles.dateField} onClick={toggleBeginDate}>{getMonthFormat(beginDateVal)}</div>
                        </div>
                        <div style={{position:'relative', width:'70px'}}>
                        <div style={{position:'absolute', paddingLeft:'1rem', paddingRight:'1rem'}}>-</div>
                        </div>
                        <div style={{position:'relative', width:'70px'}}>
                            {endDatePanel && <div style={{position:'absolute', zIndex:9}}><Calendar value={endDateVal} onChange={onEndDateChange}/></div>}
                            <div className={styles.dateField} onClick={toggleEndDate}>{getMonthFormat(endDateVal)}</div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className={styles.rowStyle}>
                <div>( From</div>
                <div className={styles.blankStyle} style={{width:'fit-content', paddingRight:'2rem'}}>{getDateFormat(beginDateVal)}</div> 
                <div>To</div>
                <div className={styles.blankStyle} style={{width:'fit-content', paddingRight:'2rem'}} >{getDateFormat(endDateVal)}</div> 
                <div>)</div>
            </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', width:'100%', marginTop:'3rem', marginBottom:'3rem'}}>
            <div style={{display:'flex', flexDirection:'column', width:'50%', alignItems:'center'}}>
                <div style={{margin:'1rem'}}>Address of the House <br/>for which Rent is paid</div>
                <div style={{width:'100%', borderBottom: '1px solid black'}}>
                    <EditText value={address1} onChange={(val)=>setAddress1(val)} style={{padding:0, margin:0, paddingLeft:'1rem'}}/>
                </div>
                <div style={{width:'100%', borderBottom: '1px solid black'}}>
                    <EditText value={address2} onChange={(val)=>setAddress2(val)}  style={{padding:0, margin:0, paddingLeft:'1rem'}}/>
                </div>
                <div style={{width:'100%', borderBottom: '1px solid black'}}>
                    <EditText value={address3} onChange={(val)=>setAddress3(val)} style={{padding:0, margin:0,  paddingLeft:'1rem'}}/>
                </div>
                <div style={{width:'100%', borderBottom: '1px solid black'}}>
                    <EditText value={address4} onChange={(val)=>setAddress4(val)} style={{padding:0, margin:0,  paddingLeft:'1rem'}}/>
                </div>
                <div style={{width:'100%', borderBottom: '1px solid black'}}>
                    <EditText value={address5} onChange={(val)=>setAddress5(val)} style={{padding:0, margin:0,  paddingLeft:'1rem'}}/>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}>
                    <div style={{width:'100%', marginTop:'2rem', marginBottom:'0.5rem', borderStyle:'solid', borderWidth:'1px', textTransform: 'uppercase', letterSpacing:'4px'}}>
                    <EditText value={pan} onChange={(val)=>setPan(val)} style={{padding:0, margin:0, textAlign:'center'}}/>
                    </div>
                    <div>PAN of Landlord</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <ImageUploading
                    value={images}
                    onChange={onImageChange}
                    maxNumber={1}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps
                    }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        {imageList.length > 0 && imageList.map((image, index) => (
                        <div key={index} style={{display:'flex', alignItems:'center'}} >
                            <img src={image["data_url"]} alt="" style={{width:'180px'}} />
                            {!printView && <div className={styles.removeSignBtn} onClick={() => onImageRemove(index)}><MdClose/></div>}
                        </div>
                        ))}
                        {!imageList.length && !printView && <div className="btn btn-back" style={{margin:'1rem'}} onClick={onImageUpload} >Upload Sign</div>}
                    </div>
                    )}
                </ImageUploading>
                <div>Signature of the Landlord</div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div style={{display:'flex' , justifyContent:'center',}} >
        {!printView && <div className="btn btn-back" style={{margin:'1rem'}} onClick={confirmCalled}>Confirm</div>}
        {!printView && <div className="btn btn-back" style={{margin:'1rem'}} onClick={resetCalled}>Reset</div>}
        {printView &&  <ReactToPdf options={{w:1200}} targetRef={ref} filename="rent-receipt.pdf">
            {({toPdf}) => (
                <div className="btn btn-back" style={{margin:'1rem'}} onClick={toPdf}>Print</div>
            )}
        </ReactToPdf>}
        {printView && <div className="btn btn-back" style={{margin:'1rem'}} onClick={backCalled}>Back</div>}
    </div>
    </>;
}

export default RentRecipt;