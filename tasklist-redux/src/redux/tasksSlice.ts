import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status, Task } from "../types";
import axios from "axios";
type ProductsState = {
    data: Task[];
    status: Status;
    modal: boolean;
};

const initialState: ProductsState = {
    data: [],
    status: Status.IDLE,
    modal: false,
};

export const TasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        toggleModal(state) {
            state.modal = state.modal!;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTask.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(getTask.fulfilled, (state, action) => {
            if (action.payload != undefined) {
                state.data = action.payload as Task[];
            } else {
                alert("undefined");
            }
            state.status = Status.SUCSESS;
        });
        builder.addCase(getTask.rejected, (state) => {
            state.status = Status.ERROR;
        });
        builder.addCase(postTask.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(postTask.fulfilled, (state, action) => {
            state.data = [...state.data, action.payload] as Task[];
            state.status = Status.SUCSESS;
        });
        builder.addCase(postTask.rejected, (state) => {
            state.status = Status.ERROR;
        });
        builder.addCase(deleteTask.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(deleteTask.fulfilled, (state, action) => {
            console.log("deleteTask", action.payload);
            const filteredData = state.data.filter(
                (task) => task.id !== (action.payload as number)
            );
            state.data = filteredData;
            state.status = Status.SUCSESS;
        });
        builder.addCase(deleteTask.rejected, (state) => {
            state.status = Status.ERROR;
        });
        builder.addCase(updateTask.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(updateTask.fulfilled, (state, action) => {
            const remId = action.payload.id;
            const filteredData = state.data.filter(
                (task) => task.id !== (remId as number)
            );
            filteredData.push(action.payload)
            state.data = filteredData;
            state.status = Status.SUCSESS;
        });
        builder.addCase(updateTask.rejected, (state) => {
            state.status = Status.ERROR;
        });
    },
});

export const getTask = createAsyncThunk("tasks", async () => {
    const { data } = await axios.get(
        "https://a0eb368905608e1a.mokky.dev/tasks"
    );
    return data;
});

export const postTask = createAsyncThunk("postTask", async (taskData: any) => {
    const { data } = await axios.post(
        "https://a0eb368905608e1a.mokky.dev/tasks",
        {
            title: taskData.title,
            description: taskData.description,
            status: taskData.status,
        }
    );
    return data;
});

export const deleteTask = createAsyncThunk("deleteTask", async (id: number) => {
    const { data } = await axios.delete(
        `https://a0eb368905608e1a.mokky.dev/tasks/${id}`
    );
    return id;
});

export const updateTask = createAsyncThunk("updateTask", async (task: Task) => {
    const baseUrl = "https://a0eb368905608e1a.mokky.dev/tasks/";
    const { data } = await axios.patch(baseUrl + task.id, task);
    return data;
});
