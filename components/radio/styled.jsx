import styled from 'styled-components';
import { resetStyles } from '../utils';

export const RadioDiv = styled.div`
	position: absolute;
	border: solid 1px ${props => props.theme.border};
	border-radius: 14px;
	width: 14px;
	height: 14px;
	background: transparent;

	${props =>
		props.disabled
			? `
		border: solid 1px ${props.theme.disabledBorder};
		background-color: ${props.theme.disabledBackground};
	`
			: ''}
`;

export const RadioContainer = styled.button`
	${resetStyles};

	display: flex;
	align-items: center;
	position: relative;
	border: none;
	padding: 0px 16px;
	min-width: 44px;
	min-height: 44px;
	background: transparent;

	&:not(:disabled) {
		&:active {
			color: buttontext;
		}

		@media (hover: hover) {
			&:hover ${RadioDiv} {
				border: solid 1px ${props => props.theme.primary};
			}
		}
		@media (hover: none) {
			&:active ${RadioDiv} {
				border: solid 1px ${props => props.theme.primary};
			}
		}
	}

	&:focus {
		&:not(:active) {
			box-shadow: 0 0 0 0.2rem rgba(30, 145, 214, 0.5);
		}
		outline: none;
	}
`;

export const isCheckedStyles = `&:after {
opacity: 1;
}`;

export const CheckedIndicator = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 14px;
	height: 14px;
	cursor: pointer;

	${props => (props.disabled ? 'cursor: default;' : '')};

	&:after {
		background: ${props => props.theme.primary};
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		border-radius: 8px;
		height: 8px;
		width: 8px;
		opacity: 0;
	}

	${props => (props.isChecked ? isCheckedStyles : '')};
`;

export const Label = styled.div`
	margin-left: 22px;

	& + & {
		margin-left: 6px;
	}
`;
