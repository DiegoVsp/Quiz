/* eslint-disable react/prop-types */
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
function QuestionWidget({ question, totalQuestions, questionIndex }) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img src={question.image} alt="Descrição" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form action="">
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeID = `alternative_${alternativeIndex}`;
            return (
              <Widget.Topic as="label" htmlFor={alternativeID}>
                <input
                  // style={{ display: 'none' }}
                  id={alternativeID}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const questionIndex = 1;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  console.log('Perguntas criadas', db.questions);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget
          question={question}
          totalQuestions={totalQuestions}
          questionIndex={questionIndex}
        />
        <LoadingWidget />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/diegovsp" />
    </QuizBackground>
  );
}
