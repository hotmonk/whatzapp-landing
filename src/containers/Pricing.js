import React from "react";
import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { connect } from "react-redux";
import "./landing.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="Pricing">
      <div className="subscriptionPlans">
        <div className="card gap1">
          <div className="cardHeader">
            <h3>Monthly Plan</h3>
          </div>

          <div className="cardBody">
            <h3>
              $9.99<span>/month</span>
            </h3>
            <div>
              <ul>
                <li>
                  <b>Unlimited</b> Lead & Client Management
                </li>
                <li>
                  <b>Unlimited</b> Followups{" "}
                </li>
                <li>
                  <b>Unlimited</b> Tags and Interest Level Labels
                </li>
                <li>
                  <b>Unlimited</b> Messages
                </li>
                <li>
                  <b>3 day Free Trial. No credit card required!</b>
                </li>
              </ul>
            </div>

            <Link to="/checkout">
              <button
                className="rechargeButton"
                onClick={() => localStorage.setItem("amountToPay", "74500")}
              >
                Try Now
              </button>
            </Link>
          </div>
        </div>

        <div className="card gap2">
          <div className="cardHeader">
            <h3>
              Annual Plan <span>(Save 2 Months)</span>
            </h3>
          </div>

          <div className="cardBody">
            <h3>
              $100<span>/year</span>
            </h3>
            <div>
              <ul>
                <li>
                  <b>Unlimited</b> Lead & Client Management
                </li>
                <li>
                  <b>Unlimited</b> Followups{" "}
                </li>
                <li>
                  <b>Unlimited</b> Tags and Interest Level Labels
                </li>
                <li>
                  <b>Unlimited</b> Messages
                </li>
                <li>
                  <b>3 day Free Trial. No credit card required!</b>
                </li>
              </ul>
            </div>
            <Link to="/checkout">
              <button
                className="rechargeButton"
                onClick={() => localStorage.setItem("amountToPay", "745000")}
              >
                Try Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
