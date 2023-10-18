import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import axios, { AxiosError } from "axios";
import { LoginResponse } from "../interfaces/auth.interface";
import { PREFIX } from "../helpers/API";
import { Profile } from "../interfaces/user.interface";
import { RootState } from "./store";

export const JWT_PERSISTENT_STATE = "userData";

export interface UserState {
  jwt: string | null;
  loginErrorMessage?: string;
  profile?: Profile;
}

export interface UserPersistentState {
  jwt: string | null;
}

const initialState: UserState = {
  jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

export const login = createAsyncThunk("user/login", async (params: { email: string; password: string }) => {
  try {
    const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
      email: params.email,
      password: params.password,
    });
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data.message);
    }
  }
});

// создадим новый async thunk
export const getProfile = createAsyncThunk<Profile, void, { state: RootState }>("user/profile", async (_, thunkApi) => {
  const jwt = thunkApi.getState().user.jwt;
  const { data } = await axios.get<Profile>(`${PREFIX}/user/profile`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    logout: (state) => {
      state.jwt = null;
    },
    clearLoginError: (state) => {
      state.loginErrorMessage = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.jwt = action.payload.access_token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginErrorMessage = action.error.message;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
