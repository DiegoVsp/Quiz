/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

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
function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit,
}) {
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

        <form onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          onSubmit();
        }}
        >
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

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const totalQuestions = db.questions.length;
  const question = db.questions[questionIndex];

  // [React chama de: Efeitos || Effects]
  // useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  useEffect(() => {
    // fetch()...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
    // Nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            onSubmit={handleSubmitQuiz}
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <div>Você acertou X questões, Parabéns!</div>}

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/diegovsp" />
    </QuizBackground>
  );
}
