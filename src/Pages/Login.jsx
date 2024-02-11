// // LoginPage.jsx

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Form } from './LoginStyle';
// import Input from '../../Components/Inputs/Input.jsx';
// import Botao from '../../Components/Botao/Botao.jsx';

// const LoginPage = () => {
//   const [matricula, setMatricula] = useState('');
//   const [senha, setSenha] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/login', { matricula, senha });
//       console.log(response.data);
//       alert('Login bem-sucedido');
//     } catch (error) {
//       console.error(error.response.data);
//       alert('Erro durante o login. Verifique suas credenciais e tente novamente.');
//     }
//   };

//   return ( 
//     <Container>
//       <Form>
//         <h1>Login IFRO</h1>
//         <Input
//           placeholder={'Matricula'}
//           onChange={(e) => setMatricula(e.target.value)}
//         />
//         <Input
//           placeholder={'Senha'}
//           type={'password'}
//           onChange={(e) => setSenha(e.target.value)}
//         />
//         <Botao text={'Login'} onClick={handleLogin} />
//       </Form>
//     </Container>
//   );
// }

// export default LoginPage;
