import React, { useState } from "react";
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Button,
    Grid,
} from "@material-ui/core";
import { Menu, Chat } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    chatWindow: {
        height: "70vh",
        overflowY: "auto",
        border: "1px solid black",
        padding: "10px",
    },
}));

function ChatApp() {
    const classes = useStyles();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello", sender: "me" },
        { id: 2, text: "Hi there!", sender: "other" },
        { id: 3, text: "How are you?", sender: "me" },
    ]);
    const [selectedUser, setSelectedUser] = useState("User 1");

    const handleSendMessage = () => {
        setMessages([
            ...messages,
            { id: messages.length + 1, text: message, sender: "me" },
        ]);
        setMessage("");
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        className={classes.menuButton}
                        onClick={() => console.log("Drawer Toggle")}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Chat App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem
                            button
                            selected={selectedUser === "User 1"}
                            onClick={() => setSelectedUser("User 1")}
                        >
                            <ListItemIcon>
                                <Chat />
                            </ListItemIcon>
                            <ListItemText primary="User 1" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedUser === "User 2"}
                            onClick={() => setSelectedUser("User 2")}
                        >
                            <ListItemIcon>
                                <Chat />
                            </ListItemIcon>
                            <ListItemText primary="User 2" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedUser === "User 3"}
                            onClick={() => setSelectedUser("User 3")}
                        >
                            <ListItemIcon>
                                <Chat />
                            </ListItemIcon>
                            <ListItemText primary="User 3" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Chat with {selectedUser}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.chatWindow}>
                        {messages
                            .filter((m) => m.sender === "me" || m.sender === selectedUser)
                            .map((m) => (
                                <Typography key={m.id} variant="body1">
                                    {m.text}
                                </Typography>
                            ))}
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            label="Type a message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" color="primary" onClick={handleSendMessage}>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

export default ChatApp;