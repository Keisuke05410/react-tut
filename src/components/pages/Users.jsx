import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Keisuke${val}`,
    image: "https://source.unsplash.com/phS37wg8cQg",
    email: "aaaa@gmial.com",
    tel: "1234567890",
    company: {
      name: "test Company"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>All Users</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={users.id} user={user} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
`;
