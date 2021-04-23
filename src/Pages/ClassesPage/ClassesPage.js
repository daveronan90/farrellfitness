import React from "react";
import MainVideo from "../../components/MainVideo/MainVideo";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Timetable from "../../components/Timetable/Timetable";
import "./ClassesPage.scss";

const ClassesPage = () => {
  return (
    <div>
      <MainVideo />
      <Timetable />
      <div className="classInfo">
        <h1>Strength and Conditioning</h1>
        <h2>
          These classes involve a wide range of exercises developed to build a
          variety of skills with a focus on mind, mobility, stability, strength,
          endurance, power, speed, agility and performance. Here at Farrell
          Fitness you will learn how to perform an exercise correctly and most
          importantly learn why you perform exercises the way you do. You will
          not only increase your strength and confidence but you will also
          improve your body composition. You will look leaner and become
          stronger. Our classes are suitable for all levels and are tailored to
          suit your individual needs.
          <br />
          <br />
          What can you expect from our Strength & Conditioning classes?
          <br />
          <br />
          You can expect to:
          <br />
          <ul>
            <li>Become stronger, leaner and fitter</li>
            <li>Get personal attention and advice</li>
            <li>Learn correct technique</li>
            <li>Build lean muscle</li>
            <li>Gain confidence</li>
          </ul>
        </h2>
        <h1>Strength</h1>
        <h2>
          The focus in these classes is build technique and physical strength.
          Here at Farrell Fitness you will learn how to perform an exercise
          correctly and most importantly learn why you perform exercises the way
          you do.
          <br />
          Our classes are suitable for all levels and are tailored to suit your
          individual needs.
          <br />
          <br />
          What to expect from our Strength classes?
          <br />
          <br />
          You can expect to:
          <br />
          <ul>
            <li>Learn correct techniques</li>
            <li>Improve your mobility</li>
            <li>Learn compound lifts</li>
            <li>Learn Olympic lifts</li>
            <li>Build muscle</li>
            <li>Get strong</li>
            <li>Meet new people</li>
            <li>Have fun in a safe environment</li>
          </ul>
        </h2>
      </div>
      <SignUpForm />
    </div>
  );
};

export default ClassesPage;
