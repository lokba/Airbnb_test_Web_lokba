import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoomDetailPage from "../pages/detail";
import FlexSearchPage from "../pages/flex_search";
import HomePage from "../pages/home";
import LocalSearchPage from "../pages/local";
import NoMatchPage from "../pages/noMatch";
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

                {/* 경료가 유효하지 않을 때 */}
                <Route path='*' component={NoMatchPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default RootRoute;