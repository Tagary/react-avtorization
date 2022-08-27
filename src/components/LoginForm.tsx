import React, {createContext, FC} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useActions } from "../hooks/useActions";



interface Props {
    invalid: string;
}

const LoginWrapper = styled.div `
width: 100%;
min-width: 100vw;
min-height: calc(100vh - 50px);
display: flex;
justify-content: center;
align-items: center;
`



const InputElem = styled.input<Props> `
padding: 15px;
margin-bottom: 10px;
border-radius: 8px;
border: unset;
background-color: #F5F5F5;
outline-color: ${props => props.invalid }
`

const LabelForm = styled.label `
font-size: 16px;
display: flex;
margin-bottom: 10px;
`

const Button = styled.button` 
    background-color: #4A67FF;
    color: #fff;
    border: unset;
    padding: 15px;
    border-radius: 8px;
    cursor: pointer;
`

const InputCheckbox = styled.input`
    
    display: flex;
`

const CheckboxContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const ErrorField = styled.span`
    display: flex;
    margin-bottom: 10px;
    color: #E26F6F;


`

const LogForm = styled.form `
display: flex;
flex-direction: column;
max-width: 640px;
width: 100%;
`

const ErrorLogin = styled.div`
    max-width: 640px;
    width: 100%;
    border: 1px solid #E26F6F;
    background-color: #F5E9E9;
    padding: 10px;
    border-radius:  8px;
`


type Inputs = {
  name: string,
  password: string,
};
const LoginForm: FC = () => {
    const { setIsAuth } = useActions();
    const { register, handleSubmit, formState: { errors  } } = useForm<Inputs>();
    const [disabledButton, setDisabledButton] = React.useState(false);
    const [errorForm, setErrorForm] = React.useState(false);
    const [whoIsThis, setWhoIsThis] = React.useState('');

   




    const onSubmit: SubmitHandler<Inputs> = async data => {
        setDisabledButton(true);
        
          setTimeout(() => {
            setWhoIsThis(data.name);

            if(data.name === 'steve.jobs@example.com' && data.password === 'password') {
                localStorage.setItem('name', data.name);
                
                localStorage.setItem('auth', 'true');
                setIsAuth(true);
                setDisabledButton(false);


            } else {
                setErrorForm(true);
                setDisabledButton(false);
            }
            
            if(rememberPass) {
                localStorage.setItem('remempass', data.password );
            } else {
                localStorage.removeItem('remempass');
            }
        }, 2000)
      
    };
    const [rememberPass, setRememberPassword] = React.useState(false);
    
    
    const handleInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberPassword(e.target.checked);
 
            }
  
    return (
        <LoginWrapper>
        <LogForm onSubmit={handleSubmit(onSubmit)}>
          {errorForm && <ErrorLogin>Пользователя {whoIsThis} не сущетсвует</ErrorLogin>}
          <LabelForm>Логин</LabelForm>
          <InputElem  type="text" invalid={errors.name ? "#E26F6F" : "rgb(16,16,16)"} {...register("name", {required: true})} />
          {errors.name && <ErrorField>Обязательное поле</ErrorField>}
          <LabelForm>Пароль</LabelForm>
          <InputElem invalid={errors.password ? "#E26F6F" : ""} type="password" {...register("password", { required: true })} />
          {errors.password && <ErrorField>Обязательное поле с паролем</ErrorField>}
          <CheckboxContainer>
          <InputCheckbox type="checkbox" onChange={handleInfo} value="Запомнить пароль"/> <div>Запомнить пароль</div>
          </CheckboxContainer>
          <Button type="submit"  disabled={disabledButton} >Войти</Button>
        </LogForm>
        </LoginWrapper>
    );
};

export default LoginForm;