import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { GetChatList, GetMessage, SendMessage } from "../utils/api-calls";
import ChatApp from "../components/chat-gpt";
import { Box, Card, Typography } from "@material-ui/core";
import { IMAGE_BASE_URL } from "../utils/constant";
import Avatar from "react-avatar";
import { bgcolor } from "@mui/system";

const Chat = () => {
  const user = JSON.parse(localStorage.getItem('usemsg'));

  // Parse the JSON string back into a JavaScript object
  // const user = (userString);
  const [loading, setLoading] = useState(false)
  const [messageList, setMessageList] = useState([]);
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [flag, setFlag] = useState(false);

  const [input, setInput] = useState("");
  const [id, setId] = useState(-1);
  const onMessageSend = async () => {
    if (input === "") {
      return;
    }
    else if (id === -1) {
      setInput("");
      alert('please select user first!')
      return;
    } else {
      try {

        var formDate = new FormData();
        formDate.append("IsSeen", false);
        formDate.append("IsFromAdmin", true);
        formDate.append("IsToAdmin", false);
        formDate.append("Type", 'text');
        formDate.append("Description", input);
        formDate.append("To", id);
        formDate.append("From", 0);

        // console.log("🚀 ~ file: chat.js:39 ~ onMessageSend ~ formDate:", formDate)
        const res = await SendMessage(formDate);
        console.log("🚀 ~ file: chat.js:51 ~ onMessageSend ~ res:", res)
        const newMessage = {
          image: user.image,
          description: input,
        }

        setMessages([...messages, { newMessage }]);
      } catch (error) {
        console.log('error........', error?.response?.data?.Message)
      }
    }
    setInput("");
    setFlag(!flag);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onMessageSend();
    }

  };

  const handleGetMessage = async (id) => {
    setImage(id?.image);
    setName(id?.userName);
    setId(id?.userId);
    const res = await GetMessage(id?.userId);
    setMessages(res?.data || []);
  }
  const getChat = async () => {
    const res = await GetChatList();
    console.log("res in servises callss=>", res?.data);
    setMessageList(res?.data || []);
    // handleGetMessage(res?.data[0])


  }
  useEffect(() => {
    getChat();
  }, [flag])


  // useEffect(() => {
  //   getChat();
  // }, []);

  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }


  if (loading) return <Loading />;
  return (
    <div className="d-flex">
      <Box className="col-md-6"
        style={{
          bgcolor: '#FFFFFF',
          boxShadow: "1px 1px 5px  #000",
          marginRight: '30px',
          height: '520px', /* set the height of the container to limit its size */
          overflow: 'auto', /* enable scrolling */
        }}
      >
        {messageList?.map((item) => {
          return (

            <Card key={item?.userId} onClick={() => handleGetMessage(item)} className="col-md-11"
              style={{ marginTop: '4px', padding: '7px', margin: '10px' }}>
              <div className="d-flex " style={{ justifyContent: 'space-between' }}>
                <div className="d-flex" style={{ alignItems: 'center' }}>
                  <div>
                    {item?.image != '' ? (<img
                      alt={"img"}
                      src={`${IMAGE_BASE_URL}${item?.image}`}
                      style={{
                        height: '50px',
                        width: '50px',
                        borderRadius: "100px",

                      }}
                    />) : <Avatar name={item?.userName} size="50" round={true} />}
                  </div>
                  <div style={{ marginLeft: '10px' }}>
                    <Typography sx={{
                      fontFamily: "gilroy",
                      lineHeight: '5px',
                      fontStyle: 'normal',
                    }}
                      style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#787676',
                      }}
                    >{item.userName}
                    </Typography>
                    <Typography variant="body1" sx={{
                      fontFamily: "gilroy",
                    }}
                      style={{
                        fontSize: '12px',
                        fontWeight: '400',
                        lineHeight: '25px',
                        fontStyle: 'normal',
                        color: '#060000',
                        marginLeft: '6px',
                      }}
                    >{item?.lastMessage?.description.substring(0, 45)}
                    </Typography>
                  </div>
                </div>

                <div
                  sx={{ fontFamily: "gilroy", }}
                  style={{

                    fontSize: '12px',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    color: '#858381',
                  }}>{formatTime(item?.lastMessage?.createdAt)}
                </div>
              </div>




            </Card>



          )
        })

        }

      </Box>
      <Box className="col-md-6"
        style={{
          bgcolor: 'red',
          boxShadow: "1px 1px 5px  #000",
          marginLeft: '30px',
          height: '520px', /* set the height of the container to limit its size */

        }}

      >
        <div
          className={classes.root}
          style={{
            // justifyContent: "center",
            display: "flex",
            // alignItems: "center",
          }}
        >
          <div className="d-flex" style={{ height: '78px' }}>
            {image && <>
              {image ? (<img
                alt={"Profile here"}
                src={`${IMAGE_BASE_URL}${image}`}
                style={{
                  height: '80px',
                  width: '80px',
                  borderRadius: "100px",
                }}
              />) : <Avatar name={name} size="80" round={true} />}
              <Typography
                sx={{
                  fontFamily: "gilroy",

                }}
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  lineHeight: '70px',
                  color: '#060000',
                  marginLeft: '10px', fontStyle: 'normal',
                }}>{name}
              </Typography>
            </>}
          </div>
          <Box className={classes.chatSection}
            sx={{
              width: "85%",
              bgcolor: 'grey',
              height: '380px',
              overflow: 'auto',
              // '&::-webkit-scrollbar': { display: 'none' }
              /* enable scrolling */
            }}>
            {messages?.map((msg) => {
              return (
                <div key={msg?.id} className="d-flex"
                  style={{ flexDirection: msg.to == user.id ? 'row' : 'row-reverse', }}>
                  {image && msg.to == user.id ? (
                    <img
                      alt={"Profile here"}
                      src={`${IMAGE_BASE_URL}${image}`}
                      style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: "100px",
                        marginTop: '10px'
                      }}
                    />
                  ) : (
                    <img
                      alt={"Profile here"}
                      src={`${IMAGE_BASE_URL}${user.profile}`}
                      style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: "100px",
                        marginTop: '10px'
                      }}
                    />
                    // <Avatar name={name} size="40" round={true} />
                  )}
                  <div
                    className={
                      msg?.to === user?.id ? classes.chatMessage : classes.chatMessageRight
                    }
                  >
                    <Typography style={{ fontFamily: 'gilroy', lineStyle: 'normal', }}
                      sx={{
                        fontSize: '16px',
                        fontWeight: '500',

                        color: '#060000',
                        top: '10px',
                      }}>
                      {msg?.description}
                    </Typography>
                  </div>
                </div>
              );
            })}

          </Box>

          <div className={classes.chatInput}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <TextField
              style={{ width: '87%' }}
              label="type here message"
              // multiline
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />

            <Button variant="contained" color="primary" onClick={onMessageSend}>
              Send
            </Button>
          </div>
        </div>
      </Box>
    </div >

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
    backgroundColor: "#ECECEC",
    borderRadius: "20px",
    padding: '.03px',
    paddingLeft: '17px',
    paddingRight: '17px',
    margin: "10px",

    // alignItems: "center",
    // width: "50%",
    overflowWrap: 'break-word'
  },
  chatMessageRight: {
    backgroundColor: "#B6E8FE",
    borderRadius: "20px",
    padding: '.03px',
    paddingLeft: '17px',
    paddingRight: '17px',
    margin: "10px",

    // alignItems: "center",
    // width: "50%",
    overflowWrap: 'break-word',
  },
  chatInput: {
    // marginTop: "auto",
  },
}));
