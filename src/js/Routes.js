import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

const SignIn = lazy(() => import('./component/Auth/sign-in'));
const ListeDossier  = lazy(() => import('./component/Dossier/listeDossier'));
const EspaceEntreprise = lazy(() => import('./component/Entreprise/espaceEntreprise'));
const Routings = lazy(() => import('./component/Routing/routings'));
const Appareils = lazy(() => import('./component/Appareil/appareil'));
const PrixVoyage = lazy(() => import('./component/configurations/Finance/prixVoyage'));
const Seating = lazy(() => import('./component/seating'));
const EspaceVoyages = lazy(() => import('./component/Voyage/espaceVoyages'));
const Devise = lazy(() => import('./component/configurations/devise/devise'));
const TauxView = lazy(() => import('./component/configurations/Taux/tauxView'));
const EspacePersonnels = lazy(() => import('./component/User/espacePersonnel'));
const DossierClient = lazy(() => import('./component/Dossier/dossierClient'));
const Cargo = lazy(() => import('./component/Cargo/cargo'));
const Courrier = lazy(() => import('./component/Courrier/courrier'));

const Routes = () => {

  const PrivateRoute = ({ component: Component, ...rest }) =>
    (
      <Route {...rest} render={props =>
        (
          localStorage.getItem('user') ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
        )} />
    );


  return (

    <Switch>
      <Route exact path='/' component={SignIn} />

      <Route path="/devise" exact strict component={Devise} />

      <PrivateRoute path="/espaceEntreprise" exact strict component={EspaceEntreprise} />

      <PrivateRoute path="/routings" exact strict component={Routings} />

      <PrivateRoute path="/espaceVoyages" exact strict component={EspaceVoyages} />

      <PrivateRoute path="/espacePersonnels" exact strict component={EspacePersonnels} />

      <PrivateRoute path="/appareil" exact strict component={Appareils} />

      <PrivateRoute path="/seating" exact strict component={Seating} />
      
      <PrivateRoute path="/taux" exact strict component={TauxView } />

      <PrivateRoute path="/prix" exact strict component={PrixVoyage} />
      
      <PrivateRoute path="/cargo" exact strict component={Cargo} />
      
      <PrivateRoute path="/courrier" exact strict component={Courrier} />

      <PrivateRoute path="/dossierClient" exact strict component={DossierClient} />
      
      <PrivateRoute path="/listeDossier" exact strict component={ListeDossier} />

      <Route
        render={function () {
          return <h1 className="w3-center" style={{marginTop:'100px',marginBottom:'100px'}}>Not Found</h1>;
        }}
      />
    </Switch>
  );

}

export default Routes;

