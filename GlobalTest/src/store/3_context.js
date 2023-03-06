import { createContext, useContext, useReducer, useState } from "react";
import { createAction } from "../utils/createAction";

export const myContext = createContext();
export const userContext = createContext();

export const useUserContext = () => useContext(userContext);
export const useMyContext = () => useContext(myContext);

export const ADD_LIST = createAction("ADD_LIST");

const list = (state, action) => {
    switch (action.type) {
        case "ADD_LIST":
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    nickname: action.payload.nickname,
                },
            ];
    }
};

const AllUserList = ({ children }) => {
    const [userList, dispatch] = useReducer(list, [{ id: 1, name: "홍길동", nickname: "히히" }]);

    console.log(userList);
    return (
        <>
            <myContext.Provider value={userList}>
                <userContext.Provider value={dispatch}>{children}</userContext.Provider>
            </myContext.Provider>
        </>
    );
};
export default AllUserList;
