import SupportButton from "@/src/components/SupportButton";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { FiCalendar, FiClock, FiEdit2, FiPlus, FiTrash } from "react-icons/fi";
import styles from "./styles.module.scss";

export default function Board() {
  return (
    <>
      <Head>
        <title>Minhas tarefas</title>
      </Head>
      <main className={styles.container}>
        <form>
          <input type="text" placeholder="Digite sua tarefa" />
          <button type="submit">
            <FiPlus size={25} color="#17181f" />
          </button>
        </form>

        <h1>Voce tem 2 tarefas!</h1>
        <section>
          <article className={styles.taskList}>
            <p>dsfdsgvf dfdsf grfgfgghbghnfjhngnhgh ggvfvd</p>
            <div className={styles.actions}>
              <div>
                <div>
                  <FiCalendar size={20} color="#ffb800" />
                  <time>17 Julho 2021</time>
                </div>
                <button>
                  <FiEdit2 size={20} color="#fff" />
                  <span>Editar</span>
                </button>
              </div>
              <button>
                <FiTrash size={20} color="#ff3636" />
                <span>Excluir</span>
              </button>
            </div>
          </article>
        </section>
      </main>
      <div className={styles.vipContainer}>
        <h3>Obrigado por apoiar esse projeto</h3>
        <div>
          <FiClock size={28} color="#fff" />
          <time>Ultima doaçao foi a 3 dias</time>
        </div>
      </div>
      <SupportButton />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const session =await  getSession({req});
  console.log(session);
  return {
    props: {},
  };
};
