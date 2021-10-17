import React from 'react'
import firebase from 'firebase'
import { useState } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { storage, db } from '../components/firbase';
import makeid from '../components/helper/functiond';
import { useHistory } from 'react-router-dom';


const UploadImage =()=> {
    const [image, setImage] = useState(null)
    const [progerss, setProgerss] = useState(0)
    const history = useHistory()

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])

            var selectedImageSrc = URL.createObjectURL(e.target.files[0])
            var imagePreviw = document.getElementById("image_preview");
            imagePreviw.src = selectedImageSrc
            imagePreviw.style.display = "block"

        }
    }
    const handleUpload = () => {
        if (image) {
            const imageName = makeid(10)
            const uploadTask = storage.ref(`images/${imageName}.jpg`)
                .put(image)

            uploadTask.on("state_change", (snapshot) => {

                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setProgerss(progress)
            }, (error) => {
                alert(error)

            }, () => {
                /////get Image Url
                storage.ref("images").child(`${imageName}.jpg`)
                    .getDownloadURL()

                    .then((imageUrl) => {
                        db.collection("UploadImage").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            photoUrl: imageUrl,
                            
                        })
                
                        setProgerss(0)
                        setImage(null)
                        var imagePreviw = document.getElementById("image_preview");
                        imagePreviw.src = ""
                    history.push('/')
                    })

            })
        }
    }
    return (
        <div className=" container">
            <div className='displayFlex'>
                <p>Add image</p>
                <div >
                    <div className="imagePreview">
                        <img id="image_preview" alt="" />
                    </div>
                </div>
                <div className="UploadImageBottom">
                    <div className='imageUpload'>
                        <label htmlFor="fileInput">
                            <AddAPhotoIcon style={{ cursor: "pointer", fontSize: "27px" }} />
                        </label>

                        <input id="fileInput" type="file" accept="image/*" onChange={handleChange} />
                    </div>
                    <button className="uploadBtn" onClick={handleUpload}
                        style={{ color: "black",cursor: "pointer" }}
                    > {`Upload ${progerss !== 0 ? progerss : ""}`}</button>
                </div>
            </div>
            {/* <div  style={{marginTop:"10px"}}>
            <Data />
            </div> */}
           
        </div>
    )
}

export default UploadImage