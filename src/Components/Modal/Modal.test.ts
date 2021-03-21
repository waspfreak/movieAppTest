import {snapshotTestFactory} from '../../utils/snapshotTestFactory';
//
import {Modal, ModalProps} from './Modal';
const props: ModalProps[] = [
	{
		isVisible: false,
		children: 'content for modal',
		onClose: true,
	},
];
snapshotTestFactory(Modal, props);
