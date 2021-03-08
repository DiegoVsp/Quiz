import React from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const questions = db.questions[0];
  console.log('Perguntas criadas', db.questions);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h3>
              {`Pergunta 1 de ${db.questions.length}`}
            </h3>
          </Widget.Header>
          <img src={questions.image} alt="Descrição" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <Widget.Content>
            <h2>{questions.title}</h2>
            <p>{questions.description}</p>
            <Button>Confirmar</Button>
          </Widget.Content>
        </Widget>
        <LoadingWidget />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/diegovsp" />
    </QuizBackground>
  );
}
