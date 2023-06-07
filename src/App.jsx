import { Post } from './Post';
import { Header } from './components/Header';
import './styles.css';

export function App() {
  return (
    <>
      <h1>Feedback</h1>
      <Header />
      <Post
        author='Mateus Cazuza'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum eos nulla quidem fugit enim accusantium amet optio totam repellat, eius impedit saepe accusamus architecto dicta in qui ipsam odit.'
      />
      <Post
        author='Isaac'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum eos nulla quidem fugit enim accusantium amet optio totam repellat, eius impedit saepe accusamus architecto dicta in qui ipsam odit.'
      />
      <Post
        author='Raimundo Cazuza'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum eos nulla quidem fugit enim accusantium amet optio totam repellat, eius impedit saepe accusamus architecto dicta in qui ipsam odit.'
      />
      <Post />
      <Post />
      <Post />
    </>
  );
}
