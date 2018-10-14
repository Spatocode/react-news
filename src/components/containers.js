import { connect } from 'react-redux'
import DisplayMenu from './UI/menu'
import DisplayHome from './UI/home'
import { onOver, onOut } from '../actions'

export const Menu = connect(
    state => ({
        fullMenu: state.navReducer.fullNav ? {width: '130px'} : {width: '20px'}
    }), 
    dispatch => ({
        show: () => { dispatch(onOver()) },
        hide: () => { dispatch(onOut()) }
    })
)(DisplayMenu)

export const Home = connect(
    state => ({
        news: state.news.items
    }), 
    null
)(DisplayHome)