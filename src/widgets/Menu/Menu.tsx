import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import Panel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import Avatar from "./components/Avatar";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { GlassLayer } from '../../components/GlassLayer'

const BGWrapper = styled.div<{darkBackground?:string,lightBackground?:string}>`
  
  position:absolute;
  top:0;
  left:0;
  display:flex;
  width: 100%;
  ${`height: calc(100vh - 2em);`}
  height:100%;
  
  
  
  
  padding:1em;
  margin:0px;
  ${({theme }) => !theme.isDark && `
  

  &:before {
    content: "";
    position: absolute;
    display:block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgb(255 255 255 / 15%) 100%);
    backdrop-filter: saturate(3);
  }
  `
  }
  
`;
/*
background: url(${({ theme,darkBackground,lightBackground }) =>
		theme.isDark
			? darkBackground
			: lightBackground});
        
  background-size: cover;
  background-position: center;
*/

const Wrapper = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  background-color: ${({ theme }) => theme.colors.backgroundGlass};
  width: 100%;
  min-height:100%;
  height:100%;
  border-radius:15px;
  border:1px solid ${({ theme }) => theme.colors.borderMenuGlass};
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.8);
  
`;


const StyledNav = styled.nav<{ showMenu: boolean }>`

  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  

`;

const BodyWrapper = styled.div`
  position:relative;
  height:100%;
  width:100%;
  display: flex;
  flex:1 1 auto;
  width:inherit;
  
  `;

const ContentWrapper = styled.div`
position:absolute;
  height:100%;
  width:100%;
  overflow:auto;
  padding:1em 1em 1em 1em;
  
  `;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position:relative;
  flex-grow: 1;
  max-width: 100%;
  width:100%;
  height:100%;
  padding:0em 0em .5em 0em;
  background-color:${({ theme }) => theme.colors.backgroundGlass};
  
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
  
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;
  width:100%;
  
  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  tokenPriceUsd,
  tokenAltPriceUsd,
  links,
  profile,
  children,
  darkBackground,
  lightBackground,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <BGWrapper darkBackground={darkBackground} lightBackground={lightBackground}>
    <Wrapper >
      <GlassLayer blur={2} />
    <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <Flex>
          <UserBlock account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          tokenPriceUsd={tokenPriceUsd}
          tokenAltPriceUsd={tokenAltPriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          <ContentWrapper>
            {children}
          </ContentWrapper>

        </Inner>

      </BodyWrapper>
      <MobileOnlyOverlay show={isPushed} isDark={isDark} onClick={() => setIsPushed(false)} role="presentation" zIndex={10} />  
      
    </Wrapper>
    
    </BGWrapper>
  );
};

export default Menu;

/*

 <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <Flex>
          <UserBlock account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>

    */