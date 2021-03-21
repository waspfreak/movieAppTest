import React, { useEffect } from 'react';
import { StyledMovieModal } from './style';

/**
 * Modal UI component for user interaction
 */

export interface ModalProps {
	isVisible: boolean,
	children: any,
	onClose: any,
}

export const Modal: React.FC<ModalProps> = ({
	isVisible = false,
	children,
	onClose,
	...props
}) => {

	useEffect(() => {
		document.addEventListener('keydown', keydownHandler);
		return () => document.removeEventListener('keydown', keydownHandler);
	});

	function keydownHandler({ key }) {
		switch (key) {
			case 'Escape':
				onClose();
				break;
			default:
		}
	}
	return !isVisible ? null : (
		<StyledMovieModal {...props}>
			<div className='modal' onClick={onClose}>
				<div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
					<div className='modal-header'>
						<span className='modal-close' onClick={onClose}>
							&times;
						</span>
					</div>
					<div className='modal-body'>
						<div className='modal-content'>{children}</div>
					</div>
				</div>
			</div>
		</StyledMovieModal>
	);
};

export default Modal;
