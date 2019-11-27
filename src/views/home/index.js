import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);