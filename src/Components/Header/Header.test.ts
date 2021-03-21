import {snapshotTestFactory} from '../../utils/snapshotTestFactory';
//
import {Header, HeaderProps} from './Header';
const props: HeaderProps[] = [{
  title: "App Title"
}];

snapshotTestFactory(Header, props);
