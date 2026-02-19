import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Counter.ts';
import UrlReducer from './UrlSaver.ts';
import todoListReducer from './todoList.ts';

//生出實體
export const store = configureStore({
    reducer: {
        CounterReducer: reducer,
        UrlReducer: UrlReducer,
        todoListReducer: todoListReducer,
    }
})

type RootState = ReturnType<typeof store.getState>
type RootDispatch = typeof store.dispatch

export const useRootSelector = useSelector.withTypes<RootState>()
export const useRootDispatch = useDispatch.withTypes<RootDispatch>()