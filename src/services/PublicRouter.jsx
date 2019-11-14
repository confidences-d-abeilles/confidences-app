import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';

const RuchesList = Loadable({
  loader: () => import('../components/ruches/List'),
  loading: () => null,
});

const Home = Loadable({
  loader: () => import('../modules/home/home.connector'),
  loading: () => null,
});

const Maintenance = Loadable({
  loader: () => import('../components/utils/Maintenance'),
  loading: () => null,
});

const Login = Loadable({
  loader: () => import('../components/Login'),
  loading: () => null,
});

const Signup = Loadable({
  loader: () => import('../components/Signup'),
  loading: () => null,
});

const Presignup = Loadable({
  loader: () => import('../components/Presignup'),
  loading: () => null,
});

const Mentions = Loadable({
  loader: () => import('../components/static/Mentions'),
  loading: () => null,
});

const About = Loadable({
  loader: () => import('../components/static/About'),
  loading: () => null,
});

const Team = Loadable({
  loader: () => import('../components/static/Team'),
  loading: () => null,
});

const Contact = Loadable({
  loader: () => import('../components/static/Contact'),
  loading: () => null,
});

const Video = Loadable({
  loader: () => import('../components/static/Video'),
  loading: () => null,
});

const Jobs = Loadable({
  loader: () => import('../components/static/jobs/Jobs'),
  loading: () => null,
});

const JobsReact = Loadable({
  loader: () => import('../components/static/jobs/JobsReact'),
  loading: () => null,
});

const JobsDesigner = Loadable({
  loader: () => import('../components/static/jobs/JobsDesigner'),
  loading: () => null,
});

const JobsProduction = Loadable({
  loader: () => import('../components/static/jobs/JobsProduction'),
  loading: () => null,
});

const JobsMarketing = Loadable({
  loader: () => import('../components/static/jobs/JobsMarketing'),
  loading: () => null,
});

const JobsBusinessDev = Loadable({
  loader: () => import('../components/static/jobs/JobsBusinessDev'),
  loading: () => null,
});

const JobsEvent = Loadable({
  loader: () => import('../components/static/jobs/JobsEvent'),
  loading: () => null,
});

const Faq = Loadable({
  loader: () => import('../components/static/Faq'),
  loading: () => null,
});

const Hives = Loadable({
  loader: () => import('../components/Hives'),
  loading: () => null,
});

const Hive = Loadable({
  loader: () => import('../components/Hive'),
  loading: () => null,
});

const Forgot = Loadable({
  loader: () => import('../components/Forgot'),
  loading: () => null,
});

const Reset = Loadable({
  loader: () => import('../components/Reset'),
  loading: () => null,
});

const Apply = Loadable({
  loader: () => import('../components/static/Apply'),
  loading: () => null,
});

const Join = Loadable({
  loader: () => import('../components/static/Join'),
  loading: () => null,
});

const RequestLabel = Loadable({
  loader: () => import('../components/RequestLabel'),
  loading: () => null,
});

const Present = Loadable({
  loader: () => import('../components/Present'),
  loading: () => null,
});

const Confirm = Loadable({
  loader: () => import('../components/Confirm'),
  loading: () => null,
});

const NotFound = Loadable({
  loader: () => import('../components/utils/NotFound'),
  loading: () => null,
});

const Newslettersignup = Loadable({
  loader: () => import('../components/static/Newslettersignup'),
  loading: () => null,
});

const Partners = Loadable({
  loader: () => import('../components/static/Partners'),
  loading: () => null,
});

const MyAccount = Loadable({
  loader: () => import('../components/MyAccount'),
  loading: () => null,
});

const Logout = Loadable({
  loader: () => import('../components/Logout'),
  loading: () => null,
});

export default () => (
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
    <Route exact path="/team" component={Team} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/apply" component={Apply} />
    <Route exact path="/requestlabel" component={RequestLabel} />
    <Route exact path="/presentation" component={Video} />
    <Route exact path="/jobs" component={Jobs} />
    <Route exact path="/jobs/reactjs" component={JobsReact} />
    <Route exact path="/jobs/designer" component={JobsDesigner} />
    <Route exact path="/jobs/production" component={JobsProduction} />
    <Route exact path="/jobs/marketing" component={JobsMarketing} />
    <Route exact path="/jobs/businessdev" component={JobsBusinessDev} />
    <Route exact path="/jobs/event" component={JobsEvent} />
    <Route exact path="/adherer" component={Join} />
    <Route exact path="/rapports-activite" component={Maintenance} />
    <Route exact path="/visites" component={Maintenance} />
    <Route exact path="/formations" component={Maintenance} />
    <Route exact path="/planter" component={Maintenance} />
    <Route exact path="/ressources" component={Maintenance} />
    <Route exact path="/newsletter/signup" component={Newslettersignup} />
    <Route exact path="/mentions_legales" component={Mentions} />
    <Route exact path="/hives" component={Hives} />
    <Route exact path="/partners" component={Partners} />
    <Route exact path="/hive/:id" component={Hive} />
    <Route exact path="/confirm/:token" component={Confirm} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/account" component={MyAccount} />
    <Route component={NotFound} />
  </Switch>
);
