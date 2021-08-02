import { BrowserRouter, Route, Switch } from "react-router-dom";
import FlexSearch from "../pages/flex_search";
import HomePage from "../pages/home";
import NoMatchPage from "../pages/noMatch";


const RootRoute = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/flex_search' component={FlexSearch} exact />


                {/* 경료가 유효하지 않을 때 */}
                <Route path='*' component={NoMatchPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default RootRoute;