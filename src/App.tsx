import { UserAPIData } from "./type";

const MOCK_API: UserAPIData = {
  userData: [
    {
      name: "Eun Cho",
      company: "오늘의집",
    },
  ],
};

const User = (): JSX.Element => {
  const { name, company } = MOCK_API.userData[0];
  return (
    <div>
      <h1>{name}</h1>
      <h2>{company}</h2>
    </div>
  );
};

export default function App() {
  return <User />;
}
