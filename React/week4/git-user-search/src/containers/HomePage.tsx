import * as React from 'react';
import { StyledLogoTitle } from 'src/components/LogoTitle';
import styled from 'src/themes/themes';
import { StyledSearchInput } from 'src/components/SearchInput';
import { searchGithubUsers } from 'src/helpers/api';
import { StyledAvatar } from 'src/components/Avatar';
import { StyledTripleLoader } from 'src/components/Loader';
import { Link } from 'react-router-dom';

export type HomePageProps = {
  className?: string;
};

export type GithubUserBrief = {
  avatar_url: string;
  login: string;
};

export type HomePageState = {
  searchTerm: string;
  isLoading: boolean;
  errorMsg: string;
  users: GithubUserBrief[];
};

const StyledWrapper = styled('div')`
  margin: calc(20px + 2vh) calc(16px + 5vw);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

class HomePage extends React.Component<HomePageProps, HomePageState> {
  public state: HomePageState = {
    searchTerm: '',
    isLoading: false,
    errorMsg: '',
    users: []
  };

  public render() {
    const { className } = this.props;
    const { searchTerm, errorMsg, isLoading, users } = this.state;

    return (
      <main className={className}>
        <StyledLogoTitle title="WebZ" />
        <StyledSearchInput
          value={searchTerm}
          changeHandler={this.changeSearchTerm}
          enterHandler={this.searchUsers}
        />
        <StyledWrapper>
          {isLoading ? (
            <StyledTripleLoader />
          ) : errorMsg ? (
            <div>{errorMsg}</div>
          ) : (
            users.map(user => (
              <Link key={user.login} to={`/profile/${user.login}`}>
                <StyledAvatar imgUrl={user.avatar_url} login={user.login} />
              </Link>
            ))
          )}
        </StyledWrapper>
      </main>
    );
  }

  private changeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  private searchUsers = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      this.setState({ isLoading: true });
      searchGithubUsers(this.state.searchTerm)
        .then(response => {
          if (response['total_count'] === 0) {
            this.setState({
              isLoading: false,
              errorMsg:
                'Found nothing with the given keyword, please try another one'
            });
          } else {
            this.setState({
              isLoading: false,
              users: response.items as GithubUserBrief[]
            });
          }
        })
        .catch(error => this.setState({ isLoading: false, errorMsg: error }));
    }
  };
}

export const StyledHomePage = styled(HomePage)``;
