import { createContext } from "react";
import initialState from '../stateObjects/resumeState.js';

const ResumeStateContext = createContext(initialState);

export default ResumeStateContext;
