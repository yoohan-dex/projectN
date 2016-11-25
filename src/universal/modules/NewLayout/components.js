import s from 'styled-components';
const styled = s.default;
export const AsideLay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #CE5C60;
  overflow: hidden;
`;
export const Stage = styled.div`
  position: relative;
  transition: left 0.5s cubic-bezier(0.15, 1.17, 1, 1);
  color: white;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const ActivityBox = styled.div`
  width: 100%;
  height: 100%;
  background: #CE5C60;
  display: flex;
`;

export const Aside = styled.aside`
  width: 20%;
  min-width: 250px;
  user-select: none;
  background: #555;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  background: #fff;
`;
