import styled from "styled-components";
import * as ds from "../../design";

export const ProfileCard = () => {
  return (
    <ProfileCardWrapper>
      <BgPatternCardWrapper>
        <ds.icons.BgPatternCard />
      </BgPatternCardWrapper>

      <ProfileInfoWrapper>
        <AvatarWrapper />

        <AvatarInfoWrapper>
          <UserInfoWrapper>
            <ds.typographies.body1.component>
              Victor Crest
            </ds.typographies.body1.component>

            <ds.typographies.subtitle2.component
              style={{
                color: `${ds.colors.darkGray.color}`,
                marginLeft: "8px",
                marginTop: "3px",
              }}
            >
              26
            </ds.typographies.subtitle2.component>
          </UserInfoWrapper>
          <UserLocationWrapper>
            <ds.typographies.subtitle2.component
              style={{
                color: `${ds.colors.darkGray.color}`,
              }}
            >
              London
            </ds.typographies.subtitle2.component>
          </UserLocationWrapper>
        </AvatarInfoWrapper>
      </ProfileInfoWrapper>

      <SocialMediaInfoWrapper>
        <SocialMedia title={"80K"} subtitle={"Followers"} />
        <SocialMedia title={"803K"} subtitle={"Likes"} />
        <SocialMedia title={"1.4K"} subtitle={"Photos"} />
      </SocialMediaInfoWrapper>
    </ProfileCardWrapper>
  );
};

const SocialMedia = ({title, subtitle}:{title: string, subtitle: string}) => {
  return (
    <SocialMediaWrapper>
      <ds.typographies.body1.component>{title}</ds.typographies.body1.component>
      <ds.typographies.subtitle2.component
        style={{ color: `${ds.colors.darkGray.color}` }}
      >
        {subtitle}
      </ds.typographies.subtitle2.component>
    </SocialMediaWrapper>
  );
};

const UserLocationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-content: center;
`;

const AvatarInfoWrapper = styled.div`
  margin-top: 16px;
`;

const SocialMediaWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
`;

const SocialMediaInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 16px;

  border-top: 1px solid ${ds.colors.darkGray.color};
`;

const AvatarWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: ${ds.shapes.circleRadius.value};
  background-color: ${ds.colors.darkGray.color};

  margin-top: -55px;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BgPatternCardWrapper = styled.div`
  width: 350px;
  height: 140px;

  display: flex;
`;

const ProfileCardWrapper = styled.div`
  width: 350px;
  height: 390px;
  background-color: ${ds.colors.white.color};
  border-radius: ${ds.shapes.largeRadius.value};

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px 1fr 80px;
`;
