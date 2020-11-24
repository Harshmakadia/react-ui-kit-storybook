import styled, { css } from 'styled-components';

const warningStyles = css`
	background-color: yellow;`;

const infoStyles = css`
	background-color: blue`;

const errorStyles = css`
	background-color: red`;

export const AlertWrapper = styled.div`
	border-radius: 3px;
	padding: 10px;
	${(props) => props.type === 'warning' && warningStyles};
	${(props) => props.type === 'info' && infoStyles};
	${(props) => props.type === 'error' && errorStyles};`;
