import ContactPage from './ContactPage';
import TestRenderer from 'react-test-renderer';

it('renders correctly ContactPage component', () => {
    const ContactPageComponent = TestRenderer.create(<ContactPage />).toJSON();
    expect(ContactPageComponent).toMatchSnapshot();
});