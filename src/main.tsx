import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './store/Counter.ts';
import UrlReducer from './store/UrlSaver.ts';
import todoListReducer from './store/todoList.ts';

//生出實體
const store = configureStore({
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* 放入Provider */}
      <Provider store={store}>
        <App></App>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
