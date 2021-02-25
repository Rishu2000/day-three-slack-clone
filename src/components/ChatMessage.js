import React from 'react'
import styled from "styled-components"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MessageIcon from '@material-ui/icons/Message';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function ChatMessage() {
    return (
        <Container>
            <UserContainer>
            <UserAvtar>
                <img src="https://randomuser.me/api/portraits/women/43.jpg" alt=""/>
            </UserAvtar>
            <MessageContent>
                <Name>
                    Rishav Kumar
                    <span>2/23/2021 6:00 AM</span>
                </Name>
                <Text>
                    How is Channel
                </Text>
            </MessageContent>
            </UserContainer>
            <ImagesContainer>
                <InsertEmoticonIconImg/>
                <MessageIconImg/>
                <ReplyIconImg/>
                <MoreVertIconImg/>
            </ImagesContainer>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div`
    padding:8px 20px;
    display:flex;
    aling-items:center;
    :hover{
        background:#f2f2f2
    }
`

const UserAvtar = styled.div`
    width:36px;
    height:36px;
    border-radius:20px;
    overflow:hidden;
    margin-right:8px;

    img{
        width:100%;
    }
`

const MessageContent = styled.div`
    display:flex;
    flex-direction:column;
`

const Name = styled.span`
    font-weight:900;
    font-size:15px;
    line-height:1.4;
    span{
        margin-left:8px;
        font-weight:400;
        color: rgb(97,96,97);
        font-size:13px;
    }
`

const Text = styled.span``

const UserContainer = styled.div`
    display:flex;
    flex:1;
`

const ImagesContainer = styled.div`
    display:flex;
    align-items:center;
    color:#b3b3b3

`

const InsertEmoticonIconImg = styled(InsertEmoticonIcon)`
margin-right:9px;
:hover{
    background:#cccccc;
    color:white;
}
padding:5px;
cursor:pointer;
`

const MessageIconImg = styled(MessageIcon)`
margin-right:9px;
:hover{
    background:#cccccc;
    color:white;
}
padding:5px;
cursor:pointer;
`

const ReplyIconImg = styled(ReplyIcon)`
margin-right:6px;
:hover{
    background:#cccccc;
    color:white;
}
padding:5px;
cursor:pointer;
`

const MoreVertIconImg = styled(MoreVertIcon)`
    margin-right:6px;
    :hover{
        background:#cccccc;
        color:white;
    }
    padding:5px;
    cursor:pointer;
`
