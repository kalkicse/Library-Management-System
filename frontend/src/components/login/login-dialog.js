import React, { useState, forwardRef } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
} from '@mui/material';

// Transition component for dialog animation
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// Login Dialog Component
export const LoginDialog = ({ open, handleClose, handleSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(username, password);
    };

    const handleEnterKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit(event);
        }
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            onKeyDown={handleEnterKeyDown}
        >
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="contained" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

// Register Dialog Component
export const RegisterDialog = ({ open, handleClose, handleSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(username, password, email);
    };

    const handleEnterKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit(event);
        }
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            onKeyDown={handleEnterKeyDown}
        >
            <DialogTitle>Register</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="contained" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

// Main App Component
const App = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const handleLoginClose = () => setIsLoginOpen(false);
    const handleRegisterClose = () => setIsRegisterOpen(false);

    const handleLoginSubmit = (username, password) => {
        console.log('Login submitted:', { username, password });
        // Handle login logic here
        setIsLoginOpen(false);
    };

    const handleRegisterSubmit = (username, password, email) => {
        console.log('Register submitted:', { username, password, email });
        // Handle registration logic here
        setIsRegisterOpen(false);
        setIsLoginOpen(true); // Open login dialog after registration
    };

    return (
        <div>
            <Button variant="contained" onClick={() => setIsRegisterOpen(true)}>
                Register
            </Button>
            <RegisterDialog
                open={isRegisterOpen}
                handleClose={handleRegisterClose}
                handleSubmit={handleRegisterSubmit}
            />
            <LoginDialog
                open={isLoginOpen}
                handleClose={handleLoginClose}
                handleSubmit={handleLoginSubmit}
            />
        </div>
    );
};

export default App;
