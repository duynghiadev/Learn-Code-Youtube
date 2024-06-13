import { connect } from 'react-redux'
import nameActions from '../../state/name/actions'
import Name from './component'

export default connect(
  state => ({ name: state.name.currentName }),
  nameActions,
)(Name)
