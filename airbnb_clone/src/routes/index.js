import { BrowserRouter, Route, Switch } from "react-router-dom";
import BecomeHostPage from "../pages/become-a-host";
import BookPage from "../pages/book";
import RoomDetailPage from "../pages/detail";
import FlexSearchPage from "../pages/flex_search";
import HomePage from "../pages/home";
import HostPage from "../pages/host";
import HostingPage from "../pages/hosting";
import HostingListPage from "../pages/host_list";
import LocalSearchPage from "../pages/local";
import NoMatchPage from "../pages/noMatch";
import ProfilePage from "../pages/profile";
import TravelSearchPage from "../pages/travel";

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/search/flex' component={FlexSearchPage} exact />
                <Route path='/search/local' component={LocalSearchPage} exact />
                <Route path='/search/travel' component={TravelSearchPage} exact />
                <Route path='/rooms/:roomId' component={RoomDetailPage} exact />
                <Route path='/book/:roomId' component={BookPage} exact />
                <Route path='/host/homes' component={HostPage} exact />
                <Route path='/become-a-host' component={BecomeHostPage} exact />
                <Route path='/hosting' component={HostingPage} exact />
                <Route path='/profile' component={ProfilePage} exact />
                <Route path='/hosting/listings' component={HostingListPage} exact />
                {/* 경료가 유효하지 않을 때 */}
                <Route path='*' component={NoMatchPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default RootRoute;