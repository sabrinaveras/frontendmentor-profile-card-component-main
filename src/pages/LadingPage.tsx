import styled from "styled-components";
import * as ds from "../design";
import { ProfileCard } from "./components/ProfileCard";

export const LadingPage = () => {
  return (
    <LadingPageWrapper>
      <BgPatternWrapper>
        <BgPatternTopWrapper>
          <ds.icons.BgPatternTop />
        </BgPatternTopWrapper>
        <BgPatternBottomWrapper>
          <ds.icons.BgPatternBottom />
        </BgPatternBottomWrapper>
      </BgPatternWrapper>

      <ProfileCardWrapper>
        <ProfileCard/>
      </ProfileCardWrapper>
    </LadingPageWrapper>
  );
};

const ProfileCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${ds.zIndex.modal.value};
  position: absolute;
`;

const BgPatternBottomWrapper = styled.div`
  position: fixed;
  bottom: -430px;
  right: -250px;
`;

const BgPatternTopWrapper = styled.div`
  position: fixed;
  top: -380px;
  left: -240px;
`;

const BgPatternWrapper = styled.div`
  display: flex;
`;

const LadingPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${ds.colors.darkCyan.color};

  display: flex;
  justify-content: center;
  align-items: center;
`;
