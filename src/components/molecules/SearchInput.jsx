import styled from "styled-components";

import { Input } from "../atoms/input/Input";
import { PrimaryButton } from "../atoms/button/PrimaryButton/";

export const SearchInput = () => {
  return (
    <SCountainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SCountainer>
  );
};

const SCountainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
