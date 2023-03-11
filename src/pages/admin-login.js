import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Switch,
    Box,
    Typography,
    TextField,
} from "@mui/material";
import React from "react";
import {
    createpanaelLoginImage,
    CustomerServicesImage,
} from "../assets/images";
// import Masonry from "@mui/lab/Masonry";
import { useNavigate } from "react-router-dom";
import { onLogin } from "../services/api/api-actions";
import { useDispatch } from "react-redux";
import useToken from "../hooks/use-token";
// Email= "Hervinmb@kankira.com",
// Password="Zikk@1234"
const AdminLogin = () => {
    const { setToken } = useToken()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [payload, setPayload] = React.useState({
        email: '',
        password: '',
    });
    const onSubmit = () => {
        try {
            dispatch(onLogin(payload, setLoading, setToken));
        } catch (error) {
            console.log('error=>', error);
        }
    }
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection="column"
            mt={-5}
        >
            <Box
                sx={{
                    //   width: "cal(100% - 700px)",
                    boxShadow: "1px 1px 2px  #000",
                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                    display: "flex",
                    bgcolor: "white",
                    flexDirection: "column",
                    mb: 1,
                }}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    mb={1.5}
                    sx={{
                        px: { sm: 14, xs: 3 },
                        //   width: "cal(100% - 700px)",
                        // bgcolor: "green",
                        boxShadow: "1px 1px 2px  #000",
                        borderBottomLeftRadius: "40px",
                        borderBottomRightRadius: "40px",
                        pt: 4,
                        pb: 1,
                    }}
                >
                    <img src={createpanaelLoginImage} width="220px" height="232px" />
                </Box>

                <Box py={7}>
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: 28,
                            fontWeight: "700",
                            color: "blue",
                        }}
                    >
                        Login
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { width: { sm: "30ch", xs: 'auto' }, },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            onChange={(event) => {
                                setPayload({ ...payload, email: event?.target?.value })
                                console.log('event value', event?.target?.value);
                            }}
                            id="standard-basic"
                            label="username"
                            variant="standard"
                            autoComplete="off"
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { width: { sm: "30ch", xs: 'auto' }, },
                        }}
                        noValidate
                        autoComplete="off"
                        mb={7}
                    >
                        <TextField
                            onChange={(event) => {
                                setPayload({ ...payload, password: event?.target?.value })
                                console.log('pass event value', event?.target?.value);
                            }}
                            id="standard-basic"
                            label="password"
                            variant="standard"
                            autoComplete="off"
                        />
                    </Box>
                    <Button
                        onClick={onSubmit}
                        sx={{
                            bgcolor: "blue",
                            color: "white",
                            borderRadius: "50px",
                            px: { sm: 12, xs: 8 },
                            py: 1,
                            textTransform: 'capitalize',
                        }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AdminLogin;
