import StoreContext from "../../StoreContext";
import Sidebar from "./Sidebar";

const SidebarContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
               return <Sidebar sidebarPage={store.getState().sidebarPage} />
            }
            }
        </StoreContext.Consumer>

    );
}

export default SidebarContainer;