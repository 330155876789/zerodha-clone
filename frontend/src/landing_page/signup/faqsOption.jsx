import React from "react";

function faqsOption(props) {
  return (
    <>
      <div
        data-bs-toggle="collapse"
        data-bs-target="#multiCollapseExample2"
        aria-expanded="false"
        aria-controls="multiCollapseExample2"
      >
        What is a Zerodha account?
      </div>
      <div
        data-bs-toggle="collapse"
        data-bs-target="#multiCollapseExample2"
        aria-expanded="false"
        aria-controls="multiCollapseExample2"
      >
        What is a Zerodha account?
      </div>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              Some placeholder content for the first collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
              Some placeholder content for the second collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default faqsOption;
