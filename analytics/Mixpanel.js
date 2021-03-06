import mixpanel from "mixpanel-browser";

let env_check = process.env.NODE_ENV === "production";

let actions = {
  init: () => {
    if (env_check) mixpanel.init("78c666ff328208d167fa7efd226e8ef1");
  },
  identify: id => {
    if (env_check) mixpanel.identify(id);
  },
  alias: id => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: props => {
      if (env_check) mixpanel.people.set(props);
    }
  }
};

export let Mixpanel = actions;
