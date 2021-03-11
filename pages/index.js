import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import styled from 'styled-components';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);

              // router manda pra próxima página
            }}
            >
              <Input
                name="nomeDoUsuario"
                type="text"
                placeholder="Insira seu nome"
                id="nome"
                value={name}
                onChange={(info) => {
                  // console.log(info.target.value);
                  // State
                  setName(info.target.value);
                }}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>

            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((quizExterno) => {
                const [projectName, githubUser] = quizExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={quizExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${projectName}/${githubUser}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/diegovsp" />
    </QuizBackground>
  );
}
