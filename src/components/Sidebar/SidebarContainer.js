import Sidebar from "./Sidebar";
import {connect} from "react-redux";

const mapStateToProps = (state)  => {
    return {
        sidebarPage: state.sidebarPage,
    }
}
const mapDispatchToProps = () => {
    return {}
}
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)


export default SidebarContainer;