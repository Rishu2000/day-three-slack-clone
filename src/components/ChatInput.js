import React from 'react'
import styled from "styled-components"
import SendIcon from '@material-ui/icons/Send';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CropFreeIcon from '@material-ui/icons/CropFree';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachmentIcon from '@material-ui/icons/Attachment';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..."/>
                    {/* <SendButton>
                        <Send/>
                    </SendButton> */}
                </form>
            </InputContainer>
            <ImageContainer>
                <LeftImages>
                    <ImgIcon><CodeIcon/></ImgIcon>
                    <ImgIcon><LinkIcon/></ImgIcon>
                    <ImgIcon><FormatListNumberedIcon/></ImgIcon>
                    <ImgIcon><FormatListBulletedIcon/></ImgIcon>
                    <ImgIcon><CropFreeIcon/></ImgIcon>
                </LeftImages>
                <RightImages>
                    <ImgIcon><EmojiEmotionsIcon/></ImgIcon>
                    <ImgIcon><AttachmentIcon/></ImgIcon>
                    <SendIconImg/>
                </RightImages>
            </ImageContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left:20px;
    padding-right:20px;
    border:1px solid #8D8D8E;
    border-radius:4px;
    margin:20px;
`

const InputContainer =styled.div`
border-bottom:1px solid #cccccc;

    form{
        display:flex;
        height:42px;
        align-items:center;
        padding-left:10px;

        input{
            flex:1;
            border:none;
            font-size:20px;
        }

        input:focus{
            outline:none;
        }
    }
`

// const SendButton = styled.div`
//     background:#007a5a;
//     border-radius:2px;
//     width:32px;
//     height:32px;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     margin-right:5px;
//     cursor:pointer;
    
// .MuiSvgIcon-root{
//     width:18px;
// }

// :hover{
//     background:#148567
// }
// `

// const Send = styled(SendIcon)`
//     color:#D9D9D9
// `

const ImageContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding-top:8px;
    padding-bottom:4px;
    color:#808080;
`

const LeftImages = styled.div`
display:flex;
`

const RightImages = styled.div`
display:flex;
`

const ImgIcon = styled.div`
    padding-right:6px;
    padding-left:6px;

    :hover{
        background:#cccccc;
        border-radius:4px;
        cursor:pointer;
        color:black;
    }
`

const SendIconImg = styled(SendIcon)`
padding-right:6px;
padding-left:6px;
    :hover{
        background:#148567;
        color:white;
    }
`