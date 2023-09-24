import React from 'react';

type FormState = {
  React: boolean;
  Vue: boolean;
  Angular: boolean;
  comments: string;
};

export function handleCounterInputChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setQuantity: (value: number) => void
) {
  const inputValue = parseInt(e.target.value) || 0;

  if (inputValue > 100) {
    setQuantity(100);
  } else {
    setQuantity(inputValue);
  }
}

export function handleIncrement(quantity: number, setQuantity: React.Dispatch<React.SetStateAction<number>>) {
  if (quantity < 100) {
    setQuantity(quantity + 1);
  }
}

export function handleDecrement(quantity: number, setQuantity: React.Dispatch<React.SetStateAction<number>>) {
  if (quantity > 0) {
    setQuantity(quantity - 1);
  }
}

export function handleCheckboxChange(
  e: React.ChangeEvent<HTMLInputElement>,
  name: string,
  form: FormState,
  setForm: (value: FormState) => void,
) {
  const { checked } = e.target;

  setForm({ ...form, [name]: checked });
}

export function handleTextareaChange(
  e: React.ChangeEvent<HTMLTextAreaElement>,
  form: FormState,
  setForm: (value: FormState) => void
) {
  setForm({ ...form, comments: e.target.value });
}

export function handleSubmit(
  isFormValid: boolean,
  setError: (value: boolean) => void,
  setSuccess: (value: boolean) => void,
  setShowModal: (value: boolean) => void,
) {
  if (isFormValid) {
    setError(false);
    setSuccess(true);
    setShowModal(true)
  } else {
    setError(true);
  }
}

export function handleClose(
  setShowModal: (value: boolean) => void,
) {
    setShowModal(false)
    setTimeout(() => {
      window.location.reload()   
    }, 10000);
}

export function validateForm(
  quantity: number,
  form: FormState,
  setIsFormValid: (value: boolean) => void,
  setError: (value: boolean) => void
) {
  if (quantity > 0 && (form.React || form.Vue || form.Angular)) {
    setIsFormValid(true);
    setError(false);
  } else {
    setIsFormValid(false);
  }
}
