import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';



// Set a cookie
const setCookie = (token) => {
    Cookies.set('accessToken', token, { expires: 7 });
    alert('Cookie "username" has been set!');
};

// Get a cookie
const getCookie = () => {
    const value = Cookies.get('accessToken');
    data = value || 'Cookie not found';
};

// Delete a cookie
const deleteCookie = () => {
    Cookies.remove('username');
    alert('Cookie "username" has been deleted!');
};


const initialState = {
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccesToken(state, action) {
            setCookie(action.payload);
        },
        setUser(state, action) {
            console.log("Action Payload:", action.payload);
            
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        },
    },
});

export const { setUser, clearUser, setAccesToken } = authSlice.actions;
export default authSlice.reducer;
