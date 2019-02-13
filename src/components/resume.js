import React, { Component } from 'react';

import react from "react";

class Resume extends React.Component {
  render() {
    return (
      <diV className="resumeContainer">

        <div className="resumeHeader">
          <h1 className="resumeName">Thuy Nguyen</h1>
          <h3 className="resumeTitle">Front-End Developer</h3>
        </div>

        <div className="contactContainer">
          <h3 className="phone">(832)860-3836</h3>
          <h3 className="email">ngtan3@gmail.com</h3>
          <h3 className="website">www.thuyanguyen.com</h3>
          <h3 className="github">Github: https://github.com/thuy-n3</h3>
        </div>

        <div className="summaryContainer">
          <h1 className="summaryTitle">Summary</h1>
          <p className="summaryText">Creative front-end developer with a business background. Utilizing techincal skills to develop websites and applications to solve wide range of needs. Seeking a company to apply my abilitiess in key roles that help the company's growth, and to grow as a developer.</p>
        </div>

        <div className="skillsContainer">
          <h1 className="skillsTitle">Skills</h1>
          <ul className="skillsList">
            <li className="progLanguage">
              Programming Languages: Javascript(React.JS, Node.Js), HTML, CSS, Sass, JQuery, PHP
            </li>
            <li className="technologies">
              Technologies: Webflow, Sketch, WordPress, Drupal, Bootstrap, MongoDB, Git, Github, Firebase, NPM
            </li>
            <li className="operatingSystems">
              Operating Systems/ Cloud Platform: Heroku
            </li>
            <li className="design">
              Design: Responsive Design, UI/UX Design
            </li>
            <li className="accounting">
              Accounting: PeopleSoft Accounting, QuickBooks
            </li>
            <li className="other">
              Other: Microsoft Suite, Adobe Acrobat, Mac OS
            </li>
          </ul>
        </div>

        <div className="education">
          <h1 className="educationTitle">Education</h1>
          <div className="eduContainer">
            <h3 className="eduName">C.T. Bauer College of Business, University of Houston, BA Finance and Marketing</h3>
          </div>
          <div className="eduContainer">
            <h3 className="eduName">The Iron Yard Houston, Front-End Engineering</h3>
          </div>
        </div>

        <div className="experience">
          <div className="jobContainer">
            <h2 className="jobTitle">Web Developer</h2>
            <h2 className="companyName">Poetic Systems</h2>
            <h2 className="jobDate"></h2>
            <ul>
              <li>Developed and maintain client’s websites utilizing Drupal CMS, HTML, CSS, Sass, PHP and JavaScript</li>
              <li>Communicate with clients through Zendesk for site updates and site support issues</li>
              <li>Developed and maintain client’s portfolio of 250+ websites with dedicated service</li>
              <li>Document developmental steps and processes</li>
              <li>Trained multiple junior developers on developmental processes</li>
              <li>Work collaboratively with team members to craft solutions and enhancements to client’s site</li>
              <li>Implementing web accessibility standards on client’s sites</li>
            </ul>
          </div>

          <div className="jobContainer">
            <h2 className="jobTitle">Chief Marketing Office & Business Development</h2>
            <h2 className="companyName">Elias Commerical Roof Systems</h2>
            <h2 className="jobDate"></h2>
            <ul>
              <li>Cultivated relationship with vendors, business partners and potentials clients such as METRO Houston and sought out new ventures inline with company’s focus</li>
              <li>Design digital content and print materials for events, conventions, and online presences</li>
              <li>Organized and executed plans for events and conventions such as BOMA EXPO</li>
            </ul>
          </div>

          <div className="jobContainer">
            <h2 className="jobTitle">Accounts Payable/ Accounts Receivables</h2>
            <h2 className="companyName">Netsync Network Solutions</h2>
            <h2 className="jobDate"></h2>
            <ul>
              <li>Identified and resolved internal accounts discrepancies with minimal cost to the company</li>
              <li>Collaborated and streamline AR and AP for sales team and purchasing department</li>
              <li>Maintained AP and AR accounts ledger to ensure cash and payments are accurately posted to QuickBooks</li>
              <li>Reconciled vendor’s accounts for variance and produced revenue reports and evaluated open balance reports by collecting, analyzing and summarizing account information</li>
              <li>Audited reimbursement and created journal entry from all company’s credit card transactions</li>
              <li>Collected revenues for delinquent’s accounts with outstanding payments to optimize cash flow</li>
            </ul>
          </div>
        </div>

      </diV>
    )
  }
}

export default Resume;