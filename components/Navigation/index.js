import Link from "next/link";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  position: fixed;
  left: 0;
  bottom: -1em;
  background-color: white;
  width: 100%;
  padding-bottom: 2em;
  padding-top: 1em;
  display: flex;
  justify-content: space-evenly;
`;

export function Navigation() {
  return (
    <StyledNavigation>
      <Link href="/">Home</Link>
      <Link href="/spotlight">Spotlight</Link>
      <Link href="/favourites">Favourites</Link>
    </StyledNavigation>
  );
}
