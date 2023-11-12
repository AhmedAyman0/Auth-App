import { ReactNode } from "react";

type HomeProps = {
  children?: ReactNode;
};
const Home = (props: HomeProps) => {
  return (
    <>
      <h1>Welcome to the application.</h1>
    </>
  );
};

export default Home;
