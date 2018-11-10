import * as React from 'react';
import { StyledButton } from 'src/components/Button';
import { StyledCardWithShadow } from 'src/components/Card';
import { StyledTripleLoader } from 'src/components/Loader';
import StyledSearchInput from 'src/components/SearchInput';
// import StyledTitleBanner from 'src/components/TitleBanner';
import { StyledWrapper } from 'src/components/Wrapper';
import { Emojis, getEmojis } from 'src/helpers/api';
import styled, { IThemeColor } from '../theme';
import EmojiCard from './EmojiCard';

type EmojiPlaygroundProps = {
  bgColor?: IThemeColor;
  className?: string;
};

type EmojiPlaygroundState = {
  isLoading: boolean;
  emojis: Emojis;
  filteredEmojis: Emoji[];
  error: string;
  showSearch: boolean;
  searchValue: string;
};

export type Emoji = {
  name: string;
  url: string | undefined;
};

export class EmojiPlayground extends React.Component<
  EmojiPlaygroundProps,
  EmojiPlaygroundState
> {
  public state: EmojiPlaygroundState = {
    emojis: {},
    error: '',
    filteredEmojis: [],
    isLoading: false,
    searchValue: '',
    showSearch: false
  };

  public showSearchInput = () => {
    this.setState({ isLoading: true });
    getEmojis()
      .then(response =>
        this.setState({
          emojis: response,
          filteredEmojis: this.mapEmojisToEmojiArray(response),
          isLoading: false,
          showSearch: true
        })
      )
      .catch(error =>
        this.setState({
          error: `Data fetch failed, please try again. \n Error info: ${error}`,
          isLoading: false,
          showSearch: false
        })
      );
  };

  private mapEmojisToEmojiArray = (emojis: Emojis): Emoji[] => {
    return Object.keys(emojis).map(emoji => ({
      name: emoji,
      url: emojis[emoji]
    }));
  };

  public searchHandler = (value: string) => {
    const result = this.mapEmojisToEmojiArray(this.state.emojis).filter(emoji =>
      emoji.name.includes(value)
    );
    this.setState({ searchValue: value, filteredEmojis: result });
  };

  public render() {
    const {
      isLoading,
      error,
      showSearch,
      searchValue,
      filteredEmojis
    } = this.state;

    let content;
    if (error) {
      content = error;
    } else if (filteredEmojis.length < 1) {
      content = 'Oops, seems like no such emoji. Try with other words.';
    } else {
      content = filteredEmojis.map(emoji => (
        <EmojiCard key={emoji.name} name={emoji.name} url={emoji.url} />
      ));
    }

    return (
      <div className={this.props.className}>
        {isLoading ? (
          <StyledTripleLoader />
        ) : (
          <StyledWrapper width={'80%'}>
            {!showSearch ? (
              <StyledButton
                label={'Fetch me some EMOJIS!'}
                width={'300px'}
                clickHandler={this.showSearchInput}
              />
            ) : (
              <>
                {!error && (
                  <StyledSearchInput
                    value={searchValue}
                    onSearchChange={this.searchHandler}
                  />
                )}
                <StyledCardWithShadow>{content}</StyledCardWithShadow>
              </>
            )}
          </StyledWrapper>
        )}
      </div>
    );
  }
}

export const StyledEmojiPlayground = styled(EmojiPlayground)`
  background-color: ${props => props.bgColor || IThemeColor.lightGrey};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
