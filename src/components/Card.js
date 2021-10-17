import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CloseIcon from '@material-ui/icons/Close';
import { Container } from '@material-ui/core';



function ImageContainer({ id, post, photoUrl }) {
 
    const [model, setModel] = useState(false)
    const [tempImgScr, setTempImgScr] = useState('')

    const getImg = (image) => {

        setTempImgScr(image)
        setModel(true)
    }
    return (
        <div>
            <div className={model ? "model  open" : "model"}>
                <img src={tempImgScr} alt="" />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <Container> 
                <Card elevation={2} style={{ width: "100%",marginTop:"1px" }}>
                    <div className="pics">
                        <img src={photoUrl} alt="" style={{ width: "100%", objectFit: "fill" }}
                            onClick={() => getImg(photoUrl)}
                        />
                    </div>
                   
                </Card>
            </Container>
        </div>
    )
}

export default ImageContainer