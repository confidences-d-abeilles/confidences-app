import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';
import Loadable from 'react-loadable';

const RuchesList = Loadable({
    loader: () => import('../components/ruches/List'),
    loading: () => 'Loading...',
});

const Home = Loadable({
    loader: () => import('../components/Home'),
    loading: () => 'Loading...',
});

const Login = Loadable({
    loader: () => import('../components/Login'),
    loading: () => 'Loading...',
});

const Signup = Loadable({
    loader: () => import('../components/Signup'),
    loading: () => 'Loading...',
});

const Presignup = Loadable({
    loader: () => import('../components/Presignup'),
    loading: () => 'Loading...',
});

const Cgv = Loadable({
    loader: () => import('../components/static/Cgv'),
    loading: () => 'Loading...',
});

const Mentions = Loadable({
    loader: () => import('../components/static/Mentions'),
    loading: () => 'Loading...',
});

const About = Loadable({
    loader: () => import('../components/static/About'),
    loading: () => 'Loading...',
});

const Ourvalues = Loadable({
    loader: () => import('../components/static/Ourvalues'),
    loading: () => 'Loading...',
});

const Team = Loadable({
    loader: () => import('../components/Team'),
    loading: () => 'Loading...',
});

const Contact = Loadable({
    loader: () => import('../components/static/Contact'),
    loading: () => 'Loading...',
});

const Jobs = Loadable({
    loader: () => import('../components/static/jobs/Jobs'),
    loading: () => 'Loading...',
});

const JobsReact = Loadable({
    loader: () => import('../components/static/jobs/JobsReact'),
    loading: () => 'Loading...',
});

const JobsDesigner = Loadable({
    loader: () => import('../components/static/jobs/JobsDesigner'),
    loading: () => 'Loading...',
});

const JobsMarketing = Loadable({
    loader: () => import('../components/static/jobs/JobsMarketing'),
    loading: () => 'Loading...',
});

const JobsBusinessDev = Loadable({
    loader: () => import('../components/static/jobs/JobsBusinessDev'),
    loading: () => 'Loading...',
});

const JobsEvent = Loadable({
    loader: () => import('../components/static/jobs/JobsEvent'),
    loading: () => 'Loading...',
});

const Faq = Loadable({
    loader: () => import('../components/static/Faq'),
    loading: () => 'Loading...',
});

const Prices = Loadable({
    loader: () => import('../components/static/Prices'),
    loading: () => 'Loading...',
});

const Hives = Loadable({
    loader: () => import('../components/Hives'),
    loading: () => 'Loading...',
});

const Hive = Loadable({
    loader: () => import('../components/Hive'),
    loading: () => 'Loading...',
});

const Forgot = Loadable({
    loader: () => import('../components/Forgot'),
    loading: () => 'Loading...',
});

const Reset = Loadable({
    loader: () => import('../components/Reset'),
    loading: () => 'Loading...',
});

const Apply = Loadable({
    loader: () => import('../components/static/Apply'),
    loading: () => 'Loading...',
});

const RequestLabel = Loadable({
    loader: () => import('../components/RequestLabel'),
    loading: () => 'Loading...',
});

const Present = Loadable({
    loader: () => import('../components/Present'),
    loading: () => 'Loading...',
});

const Confirm = Loadable({
    loader: () => import('../components/Confirm'),
    loading: () => 'Loading...',
});

const NotFound = Loadable({
    loader: () => import('../components/utils/NotFound'),
    loading: () => 'Loading...',
});

const Newslettersignup = Loadable({
    loader: () => import('../components/static/Newslettersignup'),
    loading: () => 'Loading...',
});

const Partners = Loadable({
    loader: () => import('../components/static/Partners'),
    loading: () => 'Loading...',
});

const MyAccount = Loadable({
    loader: () => import('../components/MyAccount'),
    loading: () => 'Loading...',
});

const Logout = Loadable({
    loader: () => import('../components/Logout'),
    loading: () => 'Loading...',
});

const PublicRouter = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route exact path="/reset/:token" component={Reset} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/presignup" component={Presignup} />
        <Route exact path="/signup/:type" component={Signup} />
        <Route exact path="/ruches/list" component={RuchesList} />
        <Route exact path="/present" component={Present} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ourvalues" component={Ourvalues} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/apply" component={Apply} />
        <Route exact path="/requestlabel" component={RequestLabel} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/jobs/reactjs" component={JobsReact} />
        <Route exact path="/jobs/designer" component={JobsDesigner} />
        <Route exact path="/jobs/marketing" component={JobsMarketing} />
        <Route exact path="/jobs/businessdev" component={JobsBusinessDev} />
        <Route exact path="/jobs/event" component={JobsEvent} />
        <Route exact path="/newsletter/signup" component={Newslettersignup} />
        <Route exact path="/cgv" component={Cgv} />
        <Route exact path="/mentions_legales" component={Mentions} />
        <Route exact path="/tarifs" component={Prices} />
        <Route exact path="/prices" component={Prices} />
        <Route exact path="/hives" component={Hives} />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/hive/:id" component={Hive} />
        <Route exact path="/confirm/:token" component={Confirm} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/account" component={MyAccount} />
        <Route component={NotFound} />
    </Switch>  
);    
export default PublicRouter;