import React, { Dispatch, SetStateAction } from 'react';
import * as S from './styled';
import HeaderBackground from '../../../public/header.png';
import Checkbox from '../Checkbox';
import Counter from '../Counter';
import { handleCheckboxChange, handleClose, handleCounterInputChange, handleSubmit, handleTextareaChange, validateForm } from '@/Events';
import { useStickerFormState } from '@/states';
import ModalBase from '../Modal';

export default function Form() {
  const {
    showModal,
    setShowModal,
    quantity,
    setQuantity,
    isFormValid,
    setIsFormValid,
    success,
    setSuccess,
    error,
    setError,
    form,
    setForm,
  } = useStickerFormState();

  React.useEffect(() => {
    validateForm(quantity, form, setIsFormValid, setError);
  }, [quantity, form]);

  return (
    <S.Container>
      <div>
        <S.Header background={HeaderBackground.src}>
          <S.Title>
            Formulário<br />
            para compra de<br />
            <span>Pacote de Stickers</span>
          </S.Title>
        </S.Header>
        <S.Body>
          <S.Fieldset>
            <S.Label>Quais stickers:</S.Label>
            <S.BoxCheckbox>
              <Checkbox
                success
                name="React"
                disabled={!form.React && success}
                checked={form.React}
                error={!form.React && error && !form.Vue && error && !form.Angular && error}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => !success && handleCheckboxChange(e, "React", form, setForm)}
              />
              <Checkbox
                name="Vue"
                success
                disabled={!form.Vue && success}
                checked={form.Vue}
                error={!form.React && error && !form.Vue && error && !form.Angular && error}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => !success && handleCheckboxChange(e, "Vue", form, setForm)}
              />
              <Checkbox
                name="Angular"
                success
                disabled={!form.Angular && success}
                checked={form.Angular}
                error={!form.React && error && !form.Vue && error && !form.Angular && error}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => !success && handleCheckboxChange(e, "Angular", form, setForm)}
              />
              {!form.React && error && !form.Vue && error && !form.Angular && error && <S.TextError>Obrigatório ao menos uma stack.</S.TextError>}
            </S.BoxCheckbox>
          </S.Fieldset>
          <S.Fieldset>
            <S.Label>Quantos stickers de cada?</S.Label>
            <Counter
              disabled={success}
              quantity={quantity}
              setQuantity={setQuantity as Dispatch<SetStateAction<number>>}
              error={quantity === 0 && error}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCounterInputChange(e, setQuantity)}
            />
            {quantity === 0 && error && <S.TextError>Defina uma quantidade de sticker.</S.TextError>}
          </S.Fieldset>
          <S.Fieldset>
            <S.Label>Observações:</S.Label>
            <S.TextArea
              id="description-textarea"
              name="descricao"
              disabled={success}
              placeholder="Alguma dúvida? Recado?"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleTextareaChange(e, form, setForm)}
            />
          </S.Fieldset>
        </S.Body>
        <S.Footer success={success}>
          {success && <S.TextSuccess>Formulário enviado com sucesso!</S.TextSuccess>}
          <S.SubmitButton
            onClick={() => !success && handleSubmit(isFormValid, setError, setSuccess, setShowModal)}
            disabled={success}
          >
            Enviar
          </S.SubmitButton>
        </S.Footer>
      </div>
      <ModalBase isOpen={showModal} onClose={() => handleClose(setShowModal)}>
        <S.ContainerModal>
          {form.React && <S.TextRequests>{`${quantity} ${quantity === 1 ? 'sticker' : 'stickers'}  de React`}</S.TextRequests>}
          {form.Vue && <S.TextRequests>{`${quantity} ${quantity === 1 ? 'sticker' : 'stickers'}  de Vue`}</S.TextRequests>}
          {form.Angular && <S.TextRequests>{`${quantity} ${quantity === 1 ? 'sticker' : 'stickers'}  de Angular`}</S.TextRequests>}
        </S.ContainerModal>
        <div>
          <S.Thanks>Obrigado</S.Thanks>
        </div>
      </ModalBase>
    </S.Container>
  );
}
