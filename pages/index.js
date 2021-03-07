import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin:auto 10%;
  
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
            <meta name="title" content="Quiz World of Warcraft"></meta>
            <meta name="description" content=""></meta>

            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content="https://quiz-git-main-diegovespa.vercel.app/"></meta>
            <meta property="og:title" content="Quiz World of Warcraft"></meta>
            <meta property="og:description" content=""></meta>
            <meta property="og:image" content="https://i1.wp.com/www.game-change.co.uk/wp-content/uploads/2016/10/wowpaper.jpg?fit=1920%2C1080&ssl=1"></meta>

            <meta property="twitter:card" content="summary_large_image"></meta>
            <meta property="twitter:url" content="https://quiz-git-main-diegovespa.vercel.app/"></meta>
            <meta property="twitter:title" content="Quiz World of Warcraft"></meta>
            <meta property="twitter:description" content=""></meta>
            <meta property="twitter:image" content="https://i1.wp.com/www.game-change.co.uk/wp-content/uploads/2016/10/wowpaper.jpg?fit=1920%2C1080&ssl=1"></meta>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
