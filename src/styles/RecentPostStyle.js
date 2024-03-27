import styled from "styled-components";

export const MainContainer = styled.div`
  border-radius: 10px;
  height: 350px;
  width: 100%;
  padding: 10px;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 49%;
  }
  @media (min-width: 1025px) {
    width: 26.6%;
  }
`;

export const HeaderContainer = styled.div`
  border-bottom: 2px solid #2f2f2f;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
  }
`;

export const MiddleContainer = styled.div`
  /* border: 2px solid red; */
  flex-grow: 1;
  padding: 8px;
`;

export const PostContainer = styled.div`
  border-radius: 15px;
  height: 100%;
  background: #000;
  padding: 5px;
  display: flex;
  flex-direction: column;
  max-height: 220px;
  overflow: hidden;
  /* border: 2px solid red; */

  .tweet {
    display: flex;
    height: 100%;
    /* border: 2px solid green; */
  }

  img {
    margin-right: 5px;
    align-self: flex-start;
  }

  .head-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    /* border: 2px solid blue; */
  }

  .name {
    font-weight: bold;
    color: #fff;
    font-size: 0.5em;
  }

  .username {
    margin-left: auto;
    color: #292c2e;
    font-size: 0.5em;
  }

  .first-container {
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
  }

  .highlight {
    color: #676767;
    font-size: 0.5em;
  }

  .body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .link {
    color: #676767;
    word-break: break-all;
    font-size: 0.5em;
    margin-top: 2px;
  }

  .tweet-text {
    color: #676767;
    font-size: 0.8em;
  }

  .icons-container {
    height: 30px;
    display: flex;
    gap: 5px;
    align-items: center;
    /* border: 2px solid red; */
  }

  .icons-container li {
    color: #313538;
    display: flex;
    align-items: center;
    gap: 2px;
  }
`;

export const FooterContainer = styled.div`
  border-top: 2px solid #2f2f2f;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 2px;
    color: #fff;
    background-color: #2ab42a;
    cursor: pointer;
  }
`;
