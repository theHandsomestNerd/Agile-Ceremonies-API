import styled, {keyframes} from "styled-components";
import thnTheme from "./globalStyles";

// ============ MODAL/DRAWER w/ "code editor" ============
export const fadeIn = keyframes`
  0%{transform:translateY(60px) scale(.96);opacity:0;}
  100%{transform:translateY(0) scale(1);opacity:1;}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(25,18,40,0.85);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.22s;
`;

export const ModalContent = styled.div`
  background: ${thnTheme.glassMain};
  border-radius: 2.2em;
  max-width: 420px;
  width: 96vw;
  min-height: 13.5em;
  box-shadow: 0 10px 64px #8b5cf6bb;
  border: 1.8px solid #8b5cf6;
  padding: 2.2em 2em 1.6em 2.05em;
  animation: ${fadeIn} 0.15s;
`;

export const ModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3em;
`;

export const ModalTitle = styled.h2`
  font-size: 1.31em;
  font-weight: 900;
  background: ${thnTheme.gradientMain};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
`;

export const CloseBtn = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 2.2em;
  font-weight: bold;
  opacity: 0.88;
  cursor: pointer;
  line-height: 1;
  transition: color 0.12s;
  &:hover {
    color: #ff00cc;
  }
`;

export const Field = styled.div`
  margin-bottom: 1.25em;
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.label`
  font-size: 1.045em;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.22em;
  text-shadow: 0 2px 22px #06d6a062;
`;

export const FieldInput = styled.input`
  border-radius: 6px;
  border: none;
  font-size: 1em;
  font-weight: 600;
  padding: 0.67em 0.82em;
  background: #161223;
  color: #fff;
  margin-bottom: 0.23em;
  &:focus {
    box-shadow: ${thnTheme.focusBox};
    border: 2px solid #06d6a0;
  }
`;

export const FieldError = styled.span`
  color: #ff00cc;
  font-size: 0.9em;
  margin-left: 0.2em;
`;

export const FieldHint = styled.span`
  color: #8b5cf6cc;
  font-size: 0.92em;
  margin-top: 0.12em;
  margin-left: 0.12em;
`;

export const FieldSelect = styled.select`
  background: #181929;
  border-radius: 0.57em;
  color: #05f0a4;
  font-weight: 600;
  border: none;
  outline: none;
  padding: 0.38em 0.82em;
`;

export const FieldTextarea = styled.textarea`
  background: #181211;
  border-radius: 7.8px;
  font-family: 'JetBrains Mono','Monaco',monospace !important;
  font-size: 1em;
  color: #fff;
  border: 1.3px solid #322161;
  padding: 0.71em 0.96em;
  margin-top: 0.11em;
  resize: vertical;
  min-height: 5em;
  line-height: 1.44;
  transition: box-shadow 0.12s;
  &:focus {
    box-shadow: 0 0 0 3.5px #8b5cf6cc;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 2.1em;
`;

export const ModalActionBtn = styled.button`
  background: ${thnTheme.gradientMain};
  color: #fff;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-size: 1.08em;
  padding: 0.47em 2.1em;
  box-shadow: 0 0 18px #06d6a055;
  transition: background 0.16s, box-shadow 0.13s, color 0.13s;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 3px #06d6a099;
  }
`;
