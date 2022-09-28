import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// COMPONENTS
import MainLayout from "./../components/MainLayout";
import {AppStore} from '../pages'

// ROUTING COMPONENTS
import { protectedRoutes, openRoutes,appStoreRoutes } from "./RoutesList";

class Routes extends React.Component {
  render() {
    console.log("Routes",this.props);
    const { isAuthenticated,isAppStoreSubscriber } = this.props;

   

    console.log(isAuthenticated);
    return (
      <Switch>
        {openRoutes.map((route, index) => (
          <Route
            key={`openRoutes-${index}`}
            path={route.path}
            exact={route.exact}
            component={(propsComponent) => {
              const RouteComponent = withRouter((withRouterProps) => {
                return (
                  <route.component {...propsComponent} {...withRouterProps} />
                );
              });
              return <RouteComponent />;
            }}
          />
        ))}
        {!isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          protectedRoutes.map((route, index) => (
            <Route
              key={`protectedRoutes-${index}`}
              path={route.path}
              exact={route.exact}
              component={(propsComponent) => {
                const RouteComponent = withRouter((withRouterProps) => {
                  return (
                    <MainLayout {...propsComponent} {...withRouterProps}>
                      <route.component
                        {...propsComponent}
                        {...withRouterProps}
                      />
                    </MainLayout>
                  );
                });
                return <RouteComponent />;
              }}
            />
          ))
        )}

  {/* App store routes */}
  {!isAuthenticated && !isAppStoreSubscriber ? (
          <Redirect to="/home/agreement" />
        ) : (
          appStoreRoutes.map((route, index) => (
            <Route
              key={`protectedRoutes-${index}`}
              path={route.path}
              exact={route.exact}
              component={(propsComponent) => {
                const RouteComponent = withRouter((withRouterProps) => {
                  return (
                    <MainLayout {...propsComponent} {...withRouterProps}>
                     {/* <AppStore> */}
                      <route.component
                        {...propsComponent}
                        {...withRouterProps}
                      />
                     {/* </AppStore> */}
                    </MainLayout>
                  );
                });
                return <RouteComponent />;
              }}
            />
          ))
        )}

      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Login.isAuthenticated,
  isAppStoreSubscriber:state.Payment.isAppStoreSubscriber
});

export default withRouter(connect(mapStateToProps, null)(Routes));
