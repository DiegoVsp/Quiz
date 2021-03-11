/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

// eslint-disable-next-line react/prop-types
export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
    // { <pre style={{ color: 'black' }}>
    //   {JSON.stringify(dbExterno.questions, null, 4)}
    // </pre> }

  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          return respostaDoServidor.json();
        }
        throw new Error('Falha ao pegar dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
      .catch((err) => {
        console.error(err);
      });
    console.log('dbExterno', dbExterno);
    console.log('dbExterno', context.query.id);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (error) {
    throw new Error(error);
  }
}
