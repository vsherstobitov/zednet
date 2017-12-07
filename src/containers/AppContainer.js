import { connect } from 'react-redux';
import AppScreen from '../screens/App';
import { signIn } from '../redux/modules/auth/actions';

const mapStateToProps = ({ auth }) => ({auth});

export default connect(mapStateToProps, {
	signIn
})(AppScreen);