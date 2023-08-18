import React from "react";

import { BsArrowRight } from "react-icons/bs";

import { Link } from "react-router-dom";

import sharingKnowledge from "../assets/sharing-knowledge.svg";

export default function Outside() {
  return (
    <div className="mt-[25vh] text-center">
      <h1 className="text-5xl">Read, Write & Explore...</h1>
      <div className="mt-6">
        <Link className="btn-regular" to="/login">
          Start Reading <BsArrowRight className="inline" />
        </Link>
      </div>
    </div>
  );
}
