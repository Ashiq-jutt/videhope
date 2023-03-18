import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { GetChatList } from "../utils/api-calls";
import ChatApp from "../components/chat-gpt";
import { Card } from "@material-ui/core";

const Chat = () => {
  const [loading, setLoading] = useState(false)
  const [messageList, setMessageList] = React.useState([]);
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  console.log("messsssage====>",messages)
  const [input, setInput] = useState("");
const arryUSer=["ALtaf","Ashiq","Alam","Aslam"];
  const onMessageSend = () => {
    if (input === "") {
      return;
    }

    setMessages((msgs) => [...msgs, input]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onMessageSend();
    }
  };
  useEffect(() => {

    (async () => {
      setLoading(true)
      const res = await GetChatList();
      console.log("res in servises callss=>", res?.data);
      setMessageList(res?.data || {});
      setLoading(false)
    })();
  }, []);

  const handleMessage=(item) => {
    setMessages(item)
  }
  if (loading) return <Loading />;
  return (
    <div className="d-flex">
      <div className="col-md-6" >
        {messageList?.map((item)=>{
          return (
            <Card onClick={()=>handleMessage(item)} className="col-md-8" style={{marginTop:'10px',padding:'10px'}}>
            <h5>{item.userName}</h5>
          <div className="d-flex" style={{justifyContent:'space-between'}}>
          <p>{item?.lastMessage?.description}</p>
          <p>{item?.lastMessage?.createdAt}</p>
          </div>
           
          
      
               </Card>
          )
        })

        }
      
      </div>
      <div className="col-md-6" style={{backgroundColor:'green'}}>
    <div
      className={classes.root}
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className={classes.chatSection} style={{ width: "50%" }}>
        {arryUSer?.map((msg, index) => {
          return(
          <div
            key={index}
            className={
              index % 2 === 0 ? classes.chatMessage : classes.chatMessageRight
            }
          >
            <div>
              <p>{msg}</p>
            </div>
          </div>
        )})}
      </div>

      <div className={classes.chatInput}>
        <TextField
          fullWidth
          label="Message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <Button variant="contained" color="primary" onClick={onMessageSend}>
          Send
        </Button>
      </div>
    </div>
    </div>
    </div>
    
    // <ChatApp />
  );
}

export default Chat;


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  chatSection: {},
  chatMessage: {
    backgroundColor: "aqua",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px 0",
    alignSelf: "flex-start",
    width: "50%",
    overflowWrap: 'break-word'
  },
  chatMessageRight: {
    backgroundColor: "#008080",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px 0",
    justifyContent: "flex-end",
    width: "50%",
    marginLeft: "50%",
    overflowWrap: 'break-word'
  },
  chatInput: {
    marginTop: "auto",
  },
}));
