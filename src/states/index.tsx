import { useReducer } from 'react';

type FormState = {
  React: boolean;
  Vue: boolean;
  Angular: boolean;
  comments: string;
};

type StickerFormState = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  isFormValid: boolean;
  setIsFormValid: (value: boolean) => void;
  success: boolean;
  setSuccess: (value: boolean) => void;
  error: boolean;
  setError: (value: boolean) => void;
  form: FormState;
  setForm: (value: FormState) => void;
};

type Action =
  | { type: string; payload: number }
  | { type: string; payload: boolean }
  | { type: string; payload: boolean }
  | { type: string; payload: boolean }
  | { type: string; payload: FormState };

const initialState: StickerFormState = {
  showModal: false,
  setShowModal: () => { },
  quantity: 0,
  setQuantity: () => { },
  isFormValid: false,
  setIsFormValid: () => { },
  success: false,
  setSuccess: () => { },
  error: false,
  setError: () => { },
  form: {
    React: false,
    Vue: false,
    Angular: false,
    comments: '',
  },
  setForm: () => { },
};

const actionTypes = {
  SET_SHOWMODAL: 'SET_SHOWMODAL',
  SET_QUANTITY: 'SET_QUANTITY',
  SET_IS_FORM_VALID: 'SET_IS_FORM_VALID',
  SET_SUCCESS: 'SET_SUCCESS',
  SET_ERROR: 'SET_ERROR',
  SET_FORM: 'SET_FORM',
};

function stickerFormReducer(state: StickerFormState, action: Action): StickerFormState {
  switch (action.type) {
    case actionTypes.SET_SHOWMODAL:
      return { ...state, showModal: action.payload as boolean };
    case actionTypes.SET_QUANTITY:
      return { ...state, quantity: action.payload as number };
    case actionTypes.SET_IS_FORM_VALID:
      return { ...state, isFormValid: action.payload as boolean };
    case actionTypes.SET_SUCCESS:
      return { ...state, success: action.payload as boolean };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload as boolean };
    case actionTypes.SET_FORM:
      return { ...state, form: { ...state.form, ...action.payload as unknown as Action } };
    default:
      return state;
  }
}

export function useStickerFormState(): StickerFormState {
  const [state, dispatch] = useReducer(stickerFormReducer, initialState);

  return {
    showModal: state.showModal,
    setShowModal: (value) => dispatch({ type: actionTypes.SET_SHOWMODAL, payload: value }),
    quantity: state.quantity,
    setQuantity: (value) => dispatch({ type: actionTypes.SET_QUANTITY, payload: value }),
    isFormValid: state.isFormValid,
    setIsFormValid: (value) => dispatch({ type: actionTypes.SET_IS_FORM_VALID, payload: value }),
    success: state.success,
    setSuccess: (value) => dispatch({ type: actionTypes.SET_SUCCESS, payload: value }),
    error: state.error,
    setError: (value) => dispatch({ type: actionTypes.SET_ERROR, payload: value }),
    form: state.form,
    setForm: (value) => dispatch({ type: actionTypes.SET_FORM, payload: value }),
  };
}
