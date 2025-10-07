/* eslint-disable no-unused-vars */
import "./App.css";
import { db, auth } from "./firebaseConnection";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { useState, useEffect } from "react";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [posts, setPosts] = useState([]);
  const [idPost, setIdPost] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    async function loadPosts() {
      const unSub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPosts = [];

        snapshot.forEach((doc) => {
          listaPosts.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });

        setPosts(listaPosts);
      });
    }

    loadPosts();
  }, []);

  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Se tem usuário logado ele entra aqui...
          console.log(user);
          setUser(true);
          setUserDetail({
            uid: user.uid,
            email: user.email,
          })
        } else {
          // Não possui nenhum usuário logado.
          setUser(false);
          setUserDetail({});
        }
      });
    }

    checkLogin();
  }, []);

  async function handleAdd() {
    // Dessa forma, é salvo no banco um post com ID passado manualmente (12345)
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    //   .then(() => {
    //     console.log("Os dados foram salvos no banco com sucesso!!!");
    //   })
    //   .catch((erro) => {
    //     console.log("Ocorreu um erro!" + erro);
    //   });

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("Dados salvos com sucesso!!!");
        setTitulo("");
        setAutor("");
      })
      .catch((erro) => {
        console.log("Ocorreu um erro" + erro);
      });
  }

  async function buscarPosts() {
    // const postRef = doc(db, "posts", "vcLe1IrAZEZEelP1q5W4");

    // await getDoc(postRef)
    //   .then((snapshot) => {
    //     setTitulo(snapshot.data().titulo);
    //     setAutor(snapshot.data().autor);
    //   })
    //   .catch((erro) => {
    //     console.log("Ocorreu um erro" + erro);
    //   });

    const postRef = collection(db, "posts");
    await getDocs(postRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            autor: doc.data().autor,
            titulo: doc.data().titulo,
          });
        });

        setPosts(lista);
      })
      .catch((erro) => {
        console.log("Ocorreu um erro!!!" + erro);
      });
  }

  async function editarPost() {
    const docRef = doc(db, "posts", idPost);

    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("Post atualizado!!!");
        setTitulo("");
        setAutor("");
        setIdPost("");
      })
      .catch((erro) => {
        console.log("Ocorreu um erro" + erro);
      });
  }

  async function excluirPost(id) {
    const docRef = doc(db, "posts", id);

    await deleteDoc(docRef)
      .then(() => {
        console.log("Post excluído com sucesso!!!");
      })
      .catch((erro) => {
        console.log("Ocorreu um erro!!!");
      });
  }

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        console.log("Usuário cadastrado com sucesso!!");
        setEmail("");
        setSenha("");
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          alert("Senha muito fraca!!!");
        } else if (error.code === "auth/email-already-in-use") {
          alert("E-mail informado já existe!!!");
        }
      });
  }

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        console.log("Usuário autenticado com sucesso!");
        console.log(value.user);

        setUserDetail({
          uid: value.user.uid,
          email: value.user.email,
        });
        setUser(true);

        setEmail("");
        setSenha("");
      })
      .catch((error) => {
        console.log(`Ocorreu um erro ${error}`);
      });
  }

  async function fazerLogout() {
    await signOut(auth);
    setUser(false);
    setUserDetail({});
  }

  return (
    <div>
      <h1>React js + Firebase</h1>

      {user && (
        <div>
          <strong>Seja bem vindo(a) (Você está logado!!!)</strong>
          <br />
          <span>
            ID: {userDetail.uid} - Email: {userDetail.email}
            <br />
            <br />
            <button onClick={fazerLogout}>Sair da conta</button>
            <br />
            <br />
          </span>
        </div>
      )}

      <div className="container">
        <h2>Usuários</h2>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <br />

        <label>Senha:</label>
        <input
          type="text"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />
        <br />
        <button onClick={novoUsuario}>Cadastrar</button>
        <br />
        <button onClick={logarUsuario}>Fazer login</button>
      </div>

      <br />
      <br />
      <hr />

      <div className="container">
        <h2>Posts</h2>
        <label>ID do Post: </label>
        <input
          type="text"
          placeholder="Digite o ID do post"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        />
        <br />

        <label>Título:</label>
        <textarea
          placeholder="Digite um título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>

        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPosts}>Buscar posts</button>
        <br />
        <button onClick={editarPost}>Atualizar post</button>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong>
                <br />
                <span>Título: {post.titulo}</span>
                <br />
                <span>Autor: {post.autor}</span>
                <br />
                <button onClick={() => excluirPost(post.id)}>Excluir</button>
                <br />
                <br />
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
