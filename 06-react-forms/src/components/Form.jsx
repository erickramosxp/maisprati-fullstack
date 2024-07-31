import { useState } from "react";
import "./Form.css"

function Form() {
    
    const [warongPassw , setError] = useState('');
    
    const [email , setEmailError] = useState('');
    
    const [form, setFormulario] = useState(
        {
            nome: '',
            email: '',
            senha: '',
            confirmSenha: ''
        }
    );
    
    const validEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        return emailRegex.test(email);
    }

    const handlerInput = (event) => {
        const { name , value } = event.target;

        if (name == 'confirmSenha') {
            if (value != form.senha) {
                setError('Senhas não concidem*');
            } else {
                setError('');
            }
        }
        if (name == 'senha') {
            if (value == form.confirmSenha) {
                setError('');
            }
        }
        if (name == 'email') {
            if (!validEmail(value) && value.length > 0) {
                setEmailError("Email em formato inválido");
            } else {
                setEmailError('');
            }
        }
        setFormulario(prevFormulario => (
            {
                ...prevFormulario,
                [name]: value
            }
        ));
    }
    const hendlerSubmit = (event) => {
        event.preventDefault();
        if (!form.nome || !form.email || !form.senha || !form.confirmSenha || !validEmail(form.email) || form.senha.length < 8 || form.senha != form.confirmSenha) {
            if (!validEmail(form.email)) {
                alert("Email em formato inválido!");
            } else if (form.senha.length < 8) {
                alert("Senha contem menos de 8 caracteres!");
            } else if (form.senha != form.confirmSenha) {
                alert("Senha de confirmação diferente!");
            } else {
                alert("Um dos campos está vazio");
            }
        } else {
            alert("Cadastro efetuado com sucesso");
            event.target[0].value = '';
            event.target[1].value = '';
            event.target[2].value = '';
            event.target[3].value = '';
        }
    }
    return (
        <>
            <form onSubmit={hendlerSubmit}>
                <label htmlFor="">
                    <p>Nome:</p>
                    <input type="text" name="nome" onChange={handlerInput}/>
                </label>
                <label htmlFor="">
                    <p>E-mail:</p>
                    <input type="text" name="email" onChange={handlerInput} />
                    <p className="check_error">{email}</p>
                </label>
                <label htmlFor="">
                    <p>Senha:</p>
                    <input type="password" name="senha" onChange={handlerInput} />
                </label>
                <label htmlFor="">
                    <p>Confirmar senha:</p>
                    <input type="password" name="confirmSenha" onChange={handlerInput}/>
                    <p className="check_error">{warongPassw}</p>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Form;