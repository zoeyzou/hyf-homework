import * as React from 'react';
import { StyledAvatarWithInfo } from 'src/components/AvatarWithInfo';
import styled, { breakpoint } from 'src/themes/themes';
import { searchGithubUser, searchGithubUserDetail } from 'src/helpers/api';
import { RouteComponentProps } from 'react-router';
import { GithubUserBrief } from './HomePage';
import { StyledTripleLoader } from 'src/components/Loader';
import { StyledInfoRow } from 'src/components/InfoRow';
import { StyledBadge } from 'src/components/Badge';
import { StyledAvatar } from 'src/components/Avatar';

type GithubUserDetail = GithubUserBrief & {
  name: string;
  location: string | undefined;
  bio: string | undefined;
  hireable: boolean;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
};

export enum UserInfoRow {
  repos = 'public_repos',
  gists = 'public_gists',
  followers = 'followers',
  following = 'following'
}

type ProfilePageProps = RouteComponentProps & {
  className?: string;
};

type ProfilePageState = {
  isLoading: boolean;
  isDetailLoading: boolean;
  errorMsg: string;
  user: GithubUserDetail | undefined;
  selectedPropRow: UserInfoRow;
  selectedPropDetail: any;
};

const StyledInfoWrapper = styled('div')`
  flex: 1 1 calc(50% - 10vw);
  max-width: calc(300px + 10vw);
  max-height: calc(450px + 15vh);
  margin: calc(10px + 3vw) calc(5px + 3vw);
`;

const StyledDetailWrapper = styled('div')`
  flex: 1 1 calc(50% - 10vw);
  margin: calc(10px + 1vh) calc(2px + 5vw);
  padding: calc(5px + 2vh) calc(5px + 2vw);
  max-width: calc(300px + 10vw);
  max-height: calc(450px + 15vh);

  & > h2 {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(20px + 0.5vw);

    & > img {
      width: calc(20px + 1.5vw);
      height: calc(20px + 1.5vw);
      margin-right: calc(4px + 1vw);
    }
  }

  & > div {
    display: flex;
    flex-flow: row wrap;
    margin: calc(5px + 0.5vh) calc(5px + 0.5vw);
    overflow-y: auto;
    max-height: calc(450px + 8vh);
  }

  @media (min-width: ${breakpoint.web}) {
    box-shadow: var(--box-shadow);
  }
`;

class ProfilePage extends React.Component<ProfilePageProps, ProfilePageState> {
  public state: ProfilePageState = {
    isLoading: false,
    isDetailLoading: false,
    errorMsg: '',
    user: undefined,
    selectedPropRow: UserInfoRow.repos,
    selectedPropDetail: []
  };

  public componentDidMount() {
    if (this.props.match.params['id']) {
      this.getUser(this.props.match.params['id']);
    } else {
      this.getUser('zoeyzou');
    }
    this.getUserDetailByParam(this.state.selectedPropRow);
  }

  public render() {
    const { className } = this.props;
    const {
      isLoading,
      isDetailLoading,
      errorMsg,
      user,
      selectedPropRow,
      selectedPropDetail
    } = this.state;

    return (
      <main className={className}>
        {isLoading ? (
          <StyledTripleLoader />
        ) : errorMsg ? (
          <div>{errorMsg}</div>
        ) : (
          <>
            <StyledInfoWrapper>
              <StyledAvatarWithInfo
                name={user && user.name && user.name}
                imgUrl={user ? user.avatar_url : ''}
                forHire={user ? user.hireable : false}
                location={user && user.location && user.location}
                bio={user && user.bio && user.bio}
                width="calc(60px + 4vw)"
              />
              {Object.keys(UserInfoRow).map(item => (
                <StyledInfoRow
                  key={item}
                  propName={item}
                  propValue={user ? user[UserInfoRow[item]] : ''}
                  isSelected={UserInfoRow[item] === selectedPropRow}
                  clickHandler={this.changeSelectedRow(UserInfoRow[item])}
                />
              ))}
            </StyledInfoWrapper>
            <StyledDetailWrapper>
              <h2>
                <img src="https://img.icons8.com/windows/96/000000/pin.png" />
                Detail Area
              </h2>
              {isDetailLoading ? (
                <StyledTripleLoader />
              ) : errorMsg ? (
                <div>{errorMsg}</div>
              ) : (
                <div>
                  {selectedPropDetail.map((item: any) =>
                    selectedPropRow === UserInfoRow.repos ||
                    selectedPropRow === UserInfoRow.gists ? (
                      <StyledBadge
                        name={item['name'] || item['id']}
                        key={item.id}
                      />
                    ) : (
                      <StyledAvatar
                        imgUrl={item['avatar_url']}
                        key={item.id}
                        login={item['login']}
                      />
                    )
                  )}
                </div>
              )}
            </StyledDetailWrapper>
          </>
        )}
      </main>
    );
  }

  private changeSelectedRow = (row: UserInfoRow) => () => {
    this.setState({ selectedPropRow: row });
    this.getUserDetailByParam(row);
  };

  private getUser = (login: string) => {
    this.setState({ isLoading: true });
    searchGithubUser(login)
      .then(response => {
        if (response.message) {
          this.setState({
            isLoading: false,
            errorMsg: response.message
          });
        } else {
          this.setState({
            isLoading: false,
            user: response as GithubUserDetail
          });
        }
      })
      .catch(error => this.setState({ isLoading: false, errorMsg: error }));
  };

  private getUserDetailByParam = (selectedDetail: UserInfoRow) => {
    let searchParam: string;
    switch (selectedDetail) {
      case UserInfoRow.repos:
        searchParam = 'repos';
        break;
      case UserInfoRow.gists:
        searchParam = 'gists';
        break;
      case UserInfoRow.followers:
        searchParam = 'followers';
        break;
      default:
        searchParam = 'following';
    }

    this.setState({ isDetailLoading: true });
    searchGithubUserDetail(this.props.match.params['id'], searchParam)
      .then(response => {
        if (response.message) {
          this.setState({
            isLoading: false,
            errorMsg: response.message
          });
        } else {
          this.setState({
            isDetailLoading: false,
            selectedPropDetail: response
          });
        }
      })
      .catch(error =>
        this.setState({ isDetailLoading: false, errorMsg: error })
      );
  };
}

export const StyledProfilePage = styled(ProfilePage)`
  display: flex;
  flex-flow: column wrap;

  @media (min-width: ${breakpoint.web}) {
    flex-flow: row wrap;
    justify-content: center;
  }
`;
