import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { GetChatList } from "../utils/api-calls";
import ChatApp from "../components/chat-gpt";

const Chat = () => {
  const [loading, setLoading] = useState(false)
  const [messageList, setMessageList] = React.useState({});
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

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
  if (loading) return <Loading />;
  return (
    <div
      className={classes.root}
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className={classes.chatSection} style={{ width: "40%" }}>
        {messages.map((msg, index) => (
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
        ))}
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
