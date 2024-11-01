import ReactGA from "@react-ga4";

export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId);
};

export const logPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};
