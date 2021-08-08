import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./pages/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Settings from "./containers/Settings";
import NotFound from "./containers/NotFound";
import Fluids from "./containers/Fluids";
import CarouselPage from "./components/Carousel";
import NameForm from "./components/MyForm";
import Kinematics from "./containers/Kinematics";
import Dynamics from "./containers/PhysicsContainers/Dynamics";
import UCM from "./containers/PhysicsContainers/UCM";
import Energy from "./containers/PhysicsContainers/Energy";
import Momo from "./containers/PhysicsContainers/Momo";
import Rotation from "./containers/PhysicsContainers/Rotation";
import BlogPage from "./pages/BlogPage";
import EandM from "./containers/PhysicsContainers/EandM";
import Optics from "./containers/PhysicsContainers/Optics";
import WavesInterference from "./containers/PhysicsContainers/multiSims/WaveInterference";
import BendingLight from "./containers/PhysicsContainers/multiSims/BendingLight";
import { Scheduler } from "./pages/Scheduler";
import CSPage from "./pages/ComputerScience";
import DivingPage from "./pages/SwimDive";
import Unity from "./containers/CSContainers/Unity";
import Python from "./containers/CSContainers/Python/Python";
import Thermo from "./containers/PhysicsContainers/Thermo";
import Intro from "./containers/DivingContainers/Intro/Intro";
import Dives from "./containers/DivingContainers/Dives/Dives";
import DivingNumbers from "./containers/DivingContainers/Numbers/DiveNumbers";
import Programs from "./containers/DivingContainers/Programs/Programs";
import StraightPosition from "./containers/DivingContainers/Intro/SubDirs/Positions/straight";
import NewPhysics from "./pages/NewPhysics";
import PhysicsIntro from "./pages/PhysicsPages/IntroPage";
import PhysicsSimpleMotion from "./pages/PhysicsPages/SimpleMotionPage";
import Techniques from "./containers/DivingContainers/Techniques/Techniques";
import PhysicsKinematics from "./pages/PhysicsPages/KinematicsPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <AuthenticatedRoute exact path="/nameform">
        <NameForm />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/settings">
        <Settings />
      </AuthenticatedRoute>
      <UnauthenticatedRoute exact path="/blogs">
        <BlogPage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/computerScience">
        <CSPage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/swimanddive">
        <DivingPage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/python">
        <Python />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Intro">
        <Intro />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Programs">
        <Programs />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Dives">
        <Dives />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Technique">
        <Techniques />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/DiveNumbers">
        <DivingNumbers />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Intro#/straight">
        <StraightPosition />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/unity">
        <Unity />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <Route exact path="/physics">
        <NewPhysics />
      </Route>
      <Route exact path="/schedule">
        <Scheduler />
      </Route>
      <UnauthenticatedRoute exact path="/kinematics">
        <Kinematics />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/physics/dynamics">
        <Dynamics />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/ucm">
        <UCM />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/energy">
        <Energy />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/momentum">
        <Momo />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/rotation">
        <Rotation />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/fluids">
        <Fluids />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/thermo">
        <Thermo />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/EandM">
        <EandM />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Optics">
        <Optics />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Optics/simsOptics/waveInterference">
        <WavesInterference />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Optics/simsOptics/bendingLight">
        <BendingLight />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/carousel">
        <CarouselPage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Physics_Intro">
        <PhysicsIntro />
      </UnauthenticatedRoute>\
      <UnauthenticatedRoute exact path="/SimpleMotion">
        <PhysicsSimpleMotion />
      </UnauthenticatedRoute>\
      <UnauthenticatedRoute exact path="/OneDKinematics">
        <PhysicsKinematics />
      </UnauthenticatedRoute>\
      
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
